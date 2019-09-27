import { configure, decorate, observable, computed, action } from 'mobx';
import api from '../api';

configure({ enforceActions: 'observed' });

class Store {
  list = null;

  loading = false;

  error = null;

  totalCount = () => {
    return 0;
  };

  clearList() {
    this.list = [];
  }

  getRates = () =>
    api
      .get('latest')
      .then(({ rates }) => {
        this.setRates(rates);
      })
      .catch(error => {
        this.setError(error);
      });

  setRates = rates => {
    this.list = rates;
  };

  setError = error => {
    this.error = error;
  };
}

decorate(Store, {
  list: observable,
  loading: observable,
  error: observable,
  totalCount: computed,
  getRates: action.bound,
});
