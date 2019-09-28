import { createContext } from 'react';
import { configure, observable, action } from 'mobx';
import api from '../api';
import { CURRENCIES_RATE, DEFAULT_CURRENCY, PRIORITY_CURRENCY } from '../constants/currencies';

configure({ enforceActions: 'observed' });

export const StoreContext = createContext(
  observable(
    {
      rates: null,
      loading: false,
      error: null,
      sourceCurrency: DEFAULT_CURRENCY,
      targetCurrency: PRIORITY_CURRENCY,
      sourceValue: 1000,
      targetValue: 0,
      get todayRates() {
        return Object.entries((this.rates || {}).rates || {}).filter(([currency]) =>
          CURRENCIES_RATE.includes(currency)
        );
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
          .then(rates => {
            this.setRates(rates);
          })
          .catch(error => {
            this.setError(error);
          })
          .finally(this.finishLoading);
      },
    },
    {
      getRates: action.bound,
      changeValue: action,
      startLoading: action,
      finishLoading: action.bound,
      cleanRates: action.bound,
      setRates: action,
      setError: action,
    }
  )
);
