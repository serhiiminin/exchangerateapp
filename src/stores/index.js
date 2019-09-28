import { createContext } from 'react';
import { configure, observable, action, computed } from 'mobx';
import api from '../api';

configure({ enforceActions: 'observed' });

export const StoreContext = createContext(observable({
  list: null,
  loading: false,
  error: null,
  get totalCount() {
    return 0
  },
  get updatedList() {
    return this.list
  },
  getRates() {
    api
      .getLatest('')
      .then(rates => {
        this.setRates(rates);
      })
      .catch(error => {
        this.setError(error);
      })
  },
  clearList() {
    this.list = []
  },
  setRates(rates) {
    this.list = rates;
  },
  setError(error) {
    this.error = error;
  }
}, {
  totalCount: computed,
  updatedList: computed,
  getRates: action.bound,
  clearList: action,
  setRates: action,
  setError: action,
}));
