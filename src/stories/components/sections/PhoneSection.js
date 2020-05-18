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

import {
  Button,
  useFieldArray,
} from '@jalik/react-form';
import React from 'react';
import { FormGroup } from 'reactstrap';
import { phoneCountryCodes } from '../../libs/values';
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

      <div className="btn-group mb-3">
        <Button
          className="btn btn-secondary"
          onClick={phones.handleAppend}
        >
          <i className="fas fa-fw fa-plus-circle mr-1" />
          Append
        </Button>
        <Button
          className="btn btn-secondary"
          onClick={phones.handlePrepend}
        >
          <i className="fas fa-fw fa-plus-circle mr-1" />
          Prepend
        </Button>
        <Button
          className="btn btn-secondary"
          onClick={handleInsertAt(Math.round(phones.fields.length / 2))}
        >
          <i className="fas fa-fw fa-plus-circle mr-1" />
          Insert at middle
        </Button>
      </div>

      {phones.fields.length > 0 ? (
        phones.fields.map(({ key }, index) => (
          <FormGroup key={key}>
            <div className="input-group">
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
              <div className="input-group-append">
                <Button
                  className="btn btn-secondary"
                  onClick={phones.handleRemove(index)}
                >
                  <i className="fas fa-fw fa-trash" />
                </Button>
              </div>
            </div>
            <FormError name={`phones[${index}].code`} />
            <FormError name={`phones[${index}].number`} />
            <FormError name={`phones[${index}].type`} />
          </FormGroup>
        ))
      ) : (
        <div className="alert alert-secondary">
          You have not added any phone yet.
        </div>
      )}

      <FormError name="phones" />
    </fieldset>
  );
}

export default PhoneSection;
