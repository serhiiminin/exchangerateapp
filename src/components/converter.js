import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import Wrapper from './wrapper';
import Input from './input-number';
import Select from './select';
import ConverterRate from './converter-rate';
import { CURRENCIES_LIST } from '../constants/currencies';
import { StoreContext } from '../stores';
import Menu from './menu';

const ConverterInputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const onChange = handler => event => {
  handler(event.target.name, event.target.value);
};

const Converter = observer(() => {
  const {
    sourceValue,
    targetValue,
    sourceCurrency,
    targetCurrency,
    targetRate,
    changeCurrency,
    changeSourceValue,
    changeTargetValue,
  } = useContext(StoreContext);

  return (
    <Wrapper header={<Menu items={[{ title: 'Currency converter', path: '/' }]} />}>
      <ConverterInputs>
        <Input name="sourceValue" label="From" value={sourceValue} onChange={onChange(changeSourceValue)} />
        <Select
          name="sourceCurrency"
          items={CURRENCIES_LIST}
          onChange={onChange(changeCurrency)}
          value={sourceCurrency}
        />
        <Input name="targetValue" label="To" value={targetValue} onChange={onChange(changeTargetValue)} />
        <Select
          name="targetCurrency"
          items={CURRENCIES_LIST}
          onChange={onChange(changeCurrency)}
          value={targetCurrency}
        />
      </ConverterInputs>
      <ConverterRate sourceCurrency={sourceCurrency} targetCurrency={targetCurrency} targetRate={targetRate} />
    </Wrapper>
  );
});

export default Converter;
