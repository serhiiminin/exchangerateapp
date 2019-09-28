import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Wrapper from './wrapper';
import Input from './input';
import Select from './select';
import { CURRENCIES_LIST } from '../constants/currencies';
import { StoreContext } from '../stores';

const Converter = observer(() => {
  const store = useContext(StoreContext);
  useEffect(() => {
    store.getRates();
    return store.cleanRates;
  }, [store, store.sourceValue]);

  const onChangeCurrency = event => {
    store.changeValue(event.target.name, event.target.value);
  };
  const onChangeAmount = event => {
    store.changeValue(event.target.name, parseFloat(event.target.value) || 0);
  };

  return (
    <Wrapper header={<div>Currency converter</div>}>
      <div>
        <Input label="From" value={store.sourceValue} onChange={onChangeAmount} name="sourceValue" />
        <Select items={CURRENCIES_LIST} onChange={onChangeCurrency} value={store.sourceCurrency} name="sourceCurrency" />
      </div>
      <div>
        <Input label="To" value={store.targetValue} onChange={onChangeAmount} name="targetValue" />
        <Select items={CURRENCIES_LIST} onChange={onChangeCurrency} value={store.targetCurrency} name="targetCurrency" />
      </div>
    </Wrapper>
  );
});

export default Converter;
