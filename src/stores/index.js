import { createContext } from 'react';
import { configure, observable, action } from 'mobx';
import api from '../api';
import { CURRENCIES_RATE, DEFAULT_CURRENCY, PRIORITY_CURRENCY } from '../constants/currencies';
import { roundFloor } from '../util';

configure({ enforceActions: 'observed' });

const roundRates = rates =>
  Object.fromEntries(Object.entries(rates).map(([key, value]) => [key, String(roundFloor(value))]));

export const StoreContext = createContext(
  observable(
    {
      rates: null,
      loading: false,
      error: null,
      sourceCurrency: DEFAULT_CURRENCY,
      targetCurrency: PRIORITY_CURRENCY,
      sourceValue: '1000',
      targetValue: '0',
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
        const ratesList = this.rates || {};
        return ratesList[this.targetCurrency] || '0';
      },
      changeValue(key, value) {
        this[key] = value;
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
            this.setRates(roundRates(rates));
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
      startLoading: action,
      finishLoading: action.bound,
      cleanRates: action.bound,
      setRates: action,
      setError: action,
    }
  )
);
