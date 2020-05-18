/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2020 Karl STEIN
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

import { useFieldArray } from '@jalik/react-form';
import React from 'react';
import { FormGroup } from 'reactstrap';
import Alert from 'reactstrap/es/Alert';
import ButtonGroup from 'reactstrap/es/ButtonGroup';
import InputGroup from 'reactstrap/es/InputGroup';
import InputGroupAddon from 'reactstrap/es/InputGroupAddon';
import { phoneCountryCodes } from '../../libs/values';
import FormButton from '../FormButton';
import FormError from '../FormError';
import FormInput from '../FormInput';

function parsePhoneNumber(phone) {
  return typeof phone === 'string' && phone.length > 0
    ? phone.replace(/[^0-9]+/g, '')
    : phone;
}

function PhoneSection() {
  const defaultValue = {
    code: null,
    number: null,
    type: null,
  };
  const phones = useFieldArray({
    name: 'phones',
    defaultValue,
  });

  function handleInsertAt(index) {
    return () => { phones.insert(index, { ...defaultValue }); };
  }

  return (
    <fieldset>
      <legend>Phones</legend>

      <ButtonGroup className="mb-3">
        <FormButton onClick={phones.handleAppend}>
          <i className="fas fa-fw fa-plus-circle mr-1" />
          Append
        </FormButton>
        <FormButton onClick={phones.handlePrepend}>
          <i className="fas fa-fw fa-plus-circle mr-1" />
          Prepend
        </FormButton>
        <FormButton onClick={handleInsertAt(Math.round(phones.fields.length / 2))}>
          <i className="fas fa-fw fa-plus-circle mr-1" />
          Insert at middle
        </FormButton>
      </ButtonGroup>

      {phones.fields.length > 0 ? (
        phones.fields.map(({ key }, index) => (
          <FormGroup key={key}>
            <InputGroup>
              <FormInput
                emptyOptionLabel="Select a code..."
                name={`phones[${index}].code`}
                options={phoneCountryCodes}
                type="select"
              />
              <FormInput
                name={`phones[${index}].number`}
                parser={parsePhoneNumber}
              />
              <FormInput name={`phones[${index}].type`} />
              <InputGroupAddon addonType="append">
                <FormButton onClick={phones.handleRemove(index)}>
                  <i className="fas fa-fw fa-trash" />
                </FormButton>
              </InputGroupAddon>
            </InputGroup>
            <FormError name={`phones[${index}].code`} />
            <FormError name={`phones[${index}].number`} />
            <FormError name={`phones[${index}].type`} />
          </FormGroup>
        ))
      ) : (
        <Alert color="secondary">
          You have not added any phone yet.
        </Alert>
      )}

      <FormError name="phones" />
    </fieldset>
  );
}

export default PhoneSection;
