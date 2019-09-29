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
import { calculateAmount, divide, fixNumberToPlace, isFloatNumber, multiply } from '../util';

configure({ enforceActions: 'observed' });

const roundRates = rates =>
  Object.fromEntries(Object.entries(rates).map(([key, value]) => [key, String(fixNumberToPlace(value, 4))]));

const calculateCurrencyAmount = handler => (value, rate) =>
  isFloatNumber(value) ? calculateAmount(handler)(value, rate) : EMPTY_VALUE;

const multiplyAmount = (value, rate) => calculateCurrencyAmount(multiply)(value, rate);
const divideAmount = (value, rate) => calculateCurrencyAmount(divide)(value, rate);

const RATES = 'rates';
const LOADING = 'loading';
const ERROR = 'error';
const SOURCE_CURRENCY = 'sourceCurrency';
const SOURCE_VALUE = 'sourceValue';
const TARGET_CURRENCY = 'targetCurrency';
const TARGET_VALUE = 'targetValue';
const CHOSEN_RATE = 'chosenRate';

export const StoreContext = createContext(
  observable(
    {
      [RATES]: null,
      [LOADING]: false,
      [ERROR]: null,
      [SOURCE_CURRENCY]: DEFAULT_CURRENCY,
      [TARGET_CURRENCY]: PRIORITY_CURRENCY,
      [SOURCE_VALUE]: DEFAULT_SOURCE_VALUE,
      [TARGET_VALUE]: EMPTY_VALUE,
      [CHOSEN_RATE]: EMPTY_VALUE,
      get todayRates() {
        const ratesList = this[RATES] || {};
        const isPriorityInConverter = [this[SOURCE_CURRENCY], this[TARGET_CURRENCY]].includes(PRIORITY_CURRENCY);

        return CURRENCIES_RATES.map((currency, index) => {
          const priorityCurrency = !isPriorityInConverter && index === 0 ? PRIORITY_CURRENCY : currency;
          const resultCurrency = priorityCurrency === this[SOURCE_CURRENCY] ? DEFAULT_CURRENCY : priorityCurrency;

          return [resultCurrency, ratesList[resultCurrency]];
        });
      },
      setValue(key, value) {
        this[key] = value;
      },
      changeCurrency(key, value) {
        this.setValue(key, value);
        this[TARGET_VALUE] = multiplyAmount(this[SOURCE_VALUE], this[CHOSEN_RATE]);
      },
      changeSourceValue(key, value) {
        this.setValue(key, value);
        this[TARGET_VALUE] = multiplyAmount(value, this[CHOSEN_RATE]);
      },
      changeTargetValue(key, value) {
        this.setValue(key, value);
        this[SOURCE_VALUE] = divideAmount(value, this[CHOSEN_RATE]);
      },
      startLoading() {
        this[LOADING] = true;
      },
      finishLoading() {
        this[LOADING] = false;
      },
      cleanRates() {
        this[RATES] = null;
      },
      getRates(currency = this[SOURCE_CURRENCY]) {
        this.startLoading();
        api
          .getBased(currency)
          .then(({ rates }) => {
            const updatedRates = roundRates(rates);
            const chosenRate = updatedRates[this[TARGET_CURRENCY]] || EMPTY_VALUE;

            this.setValue(RATES, updatedRates);
            this.setValue(CHOSEN_RATE, chosenRate);
            this.setValue(TARGET_VALUE, multiplyAmount(this[SOURCE_VALUE], chosenRate));
          })
          .catch(error => {
            this.setValue(ERROR, error);
          })
          .finally(this.finishLoading);
      },
    },
    {
      getRates: action.bound,
      setValue: action.bound,
      changeCurrency: action.bound,
      changeSourceValue: action.bound,
      changeTargetValue: action.bound,
      startLoading: action.bound,
      finishLoading: action.bound,
      cleanRates: action.bound,
    }
  )
);
