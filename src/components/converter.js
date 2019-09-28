import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import Wrapper from './wrapper';
import Input from './input';
import Select from './select';
import ConverterRate from './converter-rate';
import { CURRENCIES_LIST } from '../constants/currencies';
import { StoreContext } from '../stores';

const ConverterInputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 15px;
  margin-bottom: 25px;
`;

const Converter = observer(() => {
  const { changeValue, sourceValue, sourceCurrency, targetValue, targetCurrency, targetRate } = useContext(
    StoreContext
  );

  const onChange = event => {
    changeValue(event.target.name, event.target.value);
  };

  return (
    <Wrapper header={<div>Currency converter</div>}>
      <ConverterInputs>
        <Input label="From" value={sourceValue} onChange={onChange} name="sourceValue" />
        <Select items={CURRENCIES_LIST} onChange={onChange} value={sourceCurrency} name="sourceCurrency" />
        <Input label="To" value={targetValue} onChange={onChange} name="targetValue" />
        <Select items={CURRENCIES_LIST} onChange={onChange} value={targetCurrency} name="targetCurrency" />
      </ConverterInputs>
      <ConverterRate sourceCurrency={sourceCurrency} targetCurrency={targetCurrency} targetRate={targetRate} />
    </Wrapper>
  );
});

export default Converter;
