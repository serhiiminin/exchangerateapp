import { createContext } from 'react';
import { configure, observable, action } from 'mobx';
import api from '../api';
import {
  CURRENCIES_RATES,
  DEFAULT_CURRENCY,
  DEFAULT_SOURCE_VALUE,
  EMPTY_VALUE,
  PRIORITY_CURRENCY,
} from '../constants/currencies';
import { calculateAmount, divide, fixNumberToPlace, isFloatNumber, multiply, roundFloor } from '../util';

configure({ enforceActions: 'observed' });

const roundRates = rates =>
  Object.fromEntries(
    Object.entries(rates).map(([key, value]) => [key, String(fixNumberToPlace(roundFloor(value), 4))])
  );

const calculateTodayRatesCurrencies = ({ rates, sourceCurrency, targetCurrency }) => {
  const ratesList = rates || {};
  const isPriorityInConverter = [sourceCurrency, targetCurrency].includes(PRIORITY_CURRENCY);

  return CURRENCIES_RATES.map((currency, index) => {
    const priorityCurrency = !isPriorityInConverter && index === 0 ? PRIORITY_CURRENCY : currency;
    const resultCurrency = priorityCurrency === sourceCurrency ? DEFAULT_CURRENCY : priorityCurrency;

    return [resultCurrency, ratesList[resultCurrency]];
  });
};

const calculateCurrencyAmount = handler => (value, rate) =>
  isFloatNumber(value) ? calculateAmount(handler)(value, rate) : EMPTY_VALUE;

const multiplyAmount = (value, rate) => calculateCurrencyAmount(multiply)(value, rate);
const divideAmount = (value, rate) => calculateCurrencyAmount(divide)(value, rate);

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
      chosenRate: EMPTY_VALUE,
      get todayRates() {
        return calculateTodayRatesCurrencies({
          rates: this.rates || {},
          sourceCurrency: this.sourceCurrency,
          targetCurrency: this.targetCurrency,
        });
      },
      changeValue(key, value) {
        this[key] = value;
      },
      changeCurrency(key, value) {
        this.changeValue(key, value);
        this.targetValue = multiplyAmount(this.sourceValue, this.chosenRate);
      },
      changeSourceValue(key, value) {
        this.changeValue(key, value);
        this.targetValue = multiplyAmount(value, this.chosenRate);
      },
      changeTargetValue(key, value) {
        this.changeValue(key, value);
        this.sourceValue = divideAmount(value, this.chosenRate);
      },
      setTargetAmount(amount) {
        this.targetValue = amount;
      },
      setChosenRate(value) {
        this.chosenRate = value;
      },
      setRates(rates) {
        this.rates = rates;
      },
      setError(error) {
        this.error = error;
      },
      startLoading() {
        this.loading = true;
      },
      finishLoading() {
        this.loading = false;
      },
      cleanRates() {
        this.rates = null;
      },
      getRates(currency = this.sourceCurrency) {
        this.startLoading();
        api
          .getBased(currency)
          .then(({ rates }) => {
            const updatedRates = roundRates(rates);
            const chosenRate = updatedRates[this.targetCurrency] || EMPTY_VALUE;

            this.setRates(updatedRates);
            this.setChosenRate(chosenRate);
            this.setTargetAmount(multiplyAmount(this.sourceValue, chosenRate));
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
      setChosenRate: action.bound,
      setTargetAmount: action.bound,
      setError: action.bound,
    }
  )
);
