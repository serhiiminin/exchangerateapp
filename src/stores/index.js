import { createContext } from 'react';
import { configure, observable, action } from 'mobx';
import api from '../api';
import {
  CURRENCIES_RATE,
  DEFAULT_CURRENCY,
  DEFAULT_SOURCE_VALUE,
  EMPTY_VALUE,
  PRIORITY_CURRENCY,
} from '../constants/currencies';
import { fixNumberToPlace, isFloatNumber, roundFloor } from '../util';

configure({ enforceActions: 'observed' });

const roundRates = rates =>
  Object.fromEntries(
    Object.entries(rates).map(([key, value]) => [key, String(fixNumberToPlace(roundFloor(value), 4))])
  );

const getRate = (rates, currency) => (rates || {})[currency] || EMPTY_VALUE;
const calculateAmount = operation => (amount, rate) =>
  String(fixNumberToPlace(operation(Number(amount || 0), Number(rate)), 2));
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;

export const StoreContext = createContext(
  observable(
    {
      rates: null,
      loading: false,
      error: null,
      sourceCurrency: DEFAULT_CURRENCY,
      targetCurrency: PRIORITY_CURRENCY,
      sourceValue: DEFAULT_SOURCE_VALUE,
      targetValue: EMPTY_VALUE,
      get todayRates() {
        const ratesList = this.rates || {};
        const listOfCurrenciesWithDefault = CURRENCIES_RATE.includes(this.sourceCurrency)
          ? [...CURRENCIES_RATE, DEFAULT_CURRENCY]
          : CURRENCIES_RATE;

        const listCurrencies = [this.sourceCurrency, this.targetCurrency].includes(PRIORITY_CURRENCY)
          ? listOfCurrenciesWithDefault
          : [PRIORITY_CURRENCY, ...listOfCurrenciesWithDefault.slice(0, listOfCurrenciesWithDefault.length - 1)];
        return listCurrencies.map(currency => [currency, ratesList[currency]]);
      },
      get targetRate() {
        return getRate(this.rates, this.targetCurrency);
      },
      changeValue(key, value) {
        this[key] = value;
      },
      changeCurrency(key, value) {
        this.changeValue(key, value);
        this.targetValue = isFloatNumber(this.sourceValue)
          ? calculateAmount(multiply)(this.sourceValue, getRate(this.rates, this.targetCurrency))
          : EMPTY_VALUE;
      },
      changeSourceValue(key, value) {
        this.changeValue(key, value);
        this.targetValue = isFloatNumber(value)
          ? calculateAmount(multiply)(value, getRate(this.rates, this.targetCurrency))
          : EMPTY_VALUE;
      },
      changeTargetValue(key, value) {
        this.changeValue(key, value);
        this.sourceValue = isFloatNumber(value)
          ? calculateAmount(divide)(value, getRate(this.rates, this.targetCurrency))
          : EMPTY_VALUE;
      },
      setTargetAmount(amount) {
        this.targetValue = amount;
      },
      startLoading() {
        this.loading = true;
      },
      finishLoading() {
        this.loading = false;
      },
      setRates(rates) {
        this.rates = rates;
      },
      cleanRates() {
        this.rates = null;
      },
      setError(error) {
        this.error = error;
      },
      getRates(currency = this.sourceCurrency) {
        this.startLoading();
        api
          .getBased(currency)
          .then(({ rates }) => {
            const updatedRates = roundRates(rates);
            this.setRates(updatedRates);
            this.setTargetAmount(
              calculateAmount(multiply)(this.sourceValue, getRate(updatedRates, this.targetCurrency))
            );
          })
          .catch(error => {
            this.setError(error);
          })
          .finally(this.finishLoading);
      },
    },
    {
      getRates: action.bound,
      changeValue: action.bound,
      changeCurrency: action.bound,
      changeSourceValue: action.bound,
      changeTargetValue: action.bound,
      startLoading: action.bound,
      finishLoading: action.bound,
      cleanRates: action.bound,
      setRates: action.bound,
      setTargetAmount: action.bound,
      setError: action.bound,
    }
  )
);
