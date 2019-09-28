import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import Wrapper from './wrapper';
import Input from './input';
import Select from './select';
import { CURRENCIES_LIST } from '../constants/currencies';
import { StoreContext } from '../stores';

const Inner = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 15px;
`;

const Converter = observer(() => {
  const store = useContext(StoreContext);

  const onChange = event => {
    store.changeValue(event.target.name, event.target.value);
  };

  return (
    <Wrapper header={<div>Currency converter</div>}>
      <Inner>
        <Input label="From" value={store.sourceValue} onChange={onChange} name="sourceValue" />
        <Select items={CURRENCIES_LIST} onChange={onChange} value={store.sourceCurrency} name="sourceCurrency" />
        <Input label="To" value={store.targetValue} onChange={onChange} name="targetValue" />
        <Select items={CURRENCIES_LIST} onChange={onChange} value={store.targetCurrency} name="targetCurrency" />
      </Inner>
    </Wrapper>
  );
});

export default Converter;
