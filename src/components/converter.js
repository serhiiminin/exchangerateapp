import React from 'react';
import Wrapper from './wrapper';
import Input from './input';
import Select from './select';
import { CURRENCIES_LIST, DEFAULT_CURRENCY } from '../constants/currencies';

const Converter = () => (
  <Wrapper header={<div>Currency converter</div>}>
    <div>
      <Input value="" onChange={() => {}} name="From" />
      <Select items={CURRENCIES_LIST} onChange={() => {}} value={DEFAULT_CURRENCY} name="from" />
    </div>
    <div>
      <Input value="" onChange={() => {}} name="To" />
      <Select items={CURRENCIES_LIST} onChange={() => {}} value={CURRENCIES_LIST[0]} name="to" />
    </div>
  </Wrapper>
);

export default Converter;
