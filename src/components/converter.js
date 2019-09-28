import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import Wrapper from './wrapper';
import Input from './input';
import Select from './select';
import ConverterRate from './converter-rate';
import { CURRENCIES_LIST } from '../constants/currencies';
import { StoreContext } from '../stores';
import { extractFloatNumber } from '../util';

const ConverterInputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Converter = observer(() => {
  const { changeValue, sourceValue, sourceCurrency, targetCurrency, targetRate, targetCalculatedValue } = useContext(
    StoreContext
  );

  const onChange = event => {
    changeValue(event.target.name, event.target.value);
  };
  const onChangeInput = event => {
    const { value } = event.target;
    changeValue(event.target.name, extractFloatNumber(value));
  };

  return (
    <Wrapper header={<div>Currency converter</div>}>
      <ConverterInputs>
        <Input label="From" value={sourceValue} onChange={onChangeInput} name="sourceValue" />
        <Select items={CURRENCIES_LIST} onChange={onChange} value={sourceCurrency} name="sourceCurrency" />
        <Input label="To" value={targetCalculatedValue} onChange={onChangeInput} name="targetValue" />
        <Select items={CURRENCIES_LIST} onChange={onChange} value={targetCurrency} name="targetCurrency" />
      </ConverterInputs>
      <ConverterRate sourceCurrency={sourceCurrency} targetCurrency={targetCurrency} targetRate={targetRate} />
    </Wrapper>
  );
});

export default Converter;
