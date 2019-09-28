import { createContext } from 'react';
import { configure, observable, action } from 'mobx';
import api from '../api';
import { DEFAULT_CURRENCY, PRIORITY_CURRENCY } from '../constants/currencies';

configure({ enforceActions: 'observed' });

export const StoreContext = createContext(
  observable(
    {
      ratesList: null,
      loading: false,
      error: null,
      sourceCurrency: DEFAULT_CURRENCY,
      targetCurrency: PRIORITY_CURRENCY,
      sourceValue: 1000,
      targetValue: 0,
      get updatedList() {
        return this.ratesList;
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
      getRates() {
        this.startLoading();
        api
          .getLatest('')
          .then(rates => {
            this.setRates(rates);
          })
          .catch(error => {
            this.setError(error);
          })
          .finally(this.finishLoading);
      },
      cleanList() {
        this.ratesList = null;
      },
      setRates(rates) {
        this.ratesList = rates;
      },
      setError(error) {
        this.error = error;
      },
    },
    {
      getRates: action.bound,
      changeValue: action,
      startLoading: action,
      finishLoading: action.bound,
      cleanList: action.bound,
      setRates: action,
      setError: action,
    }
  )
);
