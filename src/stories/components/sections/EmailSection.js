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
  useFieldArray,
  useFormContext,
} from '@jalik/react-form';
import React from 'react';
import { FormGroup } from 'reactstrap';
import Alert from 'reactstrap/es/Alert';
import ButtonGroup from 'reactstrap/es/ButtonGroup';
import InputGroup from 'reactstrap/es/InputGroup';
import InputGroupAddon from 'reactstrap/es/InputGroupAddon';
import { parseBoolean } from '../../libs/utils';
import FormButton from '../FormButton';
import FormError from '../FormError';
import FormInput from '../FormInput';

function parseEmailAddress(email) {
  return typeof email === 'string' && email.length > 0
    ? email.replace(/^[^a-zA-Z0-9]/, '').replace(/[^a-zA-Z0-9._@-]+/g, '')
    : email;
}

function EmailSection() {
  const { getValue } = useFormContext();
  const emails = useFieldArray({
    name: 'emails',
    defaultValue: {
      address: null,
      enabled: true,
      private: true,
    },
  });

  function handleMoveDown(index) {
    return (event) => {
      event.preventDefault();
      emails.move(index, index + 1);
    };
  }

  function handleMoveUp(index) {
    return (event) => {
      event.preventDefault();
      emails.move(index, index - 1);
    };
  }

  return (
    <fieldset>
      <legend>Emails</legend>

      <ButtonGroup className="mb-3">
        <FormButton onClick={emails.handleAppend}>
          <i className="fas fa-fw fa-plus-circle mr-1" />
          Append
        </FormButton>
        <FormButton onClick={emails.handlePrepend}>
          <i className="fas fa-fw fa-plus-circle mr-1" />
          Prepend
        </FormButton>
      </ButtonGroup>

      {emails.fields.length > 0 ? (
        emails.fields.map(({ key, value: email }, index) => (
          <FormGroup key={key}>
            <InputGroup>
              <FormInput
                disabled={!getValue(`emails[${index}].enabled`)}
                name={`emails[${index}].address`}
                parser={parseEmailAddress}
                placeholder="me@mail.com"
                type="email"
              />
              <InputGroupAddon addonType="append">
                <FormButton
                  disabled={index === emails.fields.length - 1}
                  onClick={handleMoveDown(index)}
                >
                  <i className="fas fa-fw fa-arrow-circle-down" />
                </FormButton>
                <FormButton
                  disabled={index === 0}
                  onClick={handleMoveUp(index)}
                >
                  <i className="fas fa-fw fa-arrow-circle-up" />
                </FormButton>
                <FormButton onClick={emails.handleRemove(index)}>
                  <i className="fas fa-fw fa-trash" />
                </FormButton>
              </InputGroupAddon>
            </InputGroup>
            <div className="mt-2">
              <FormInput
                disabled={!email.address}
                inline
                label="Enabled"
                name={`emails[${index}].enabled`}
                parser={parseBoolean}
                type="checkbox"
                value
              />
              <FormInput
                disabled={!email.address}
                inline
                label="Public"
                name={`emails[${index}].private`}
                parser={parseBoolean}
                type="radio"
                value={false}
              />
              <FormInput
                disabled={!email.address}
                inline
                label="Private"
                name={`emails[${index}].private`}
                parser={parseBoolean}
                type="radio"
                value
              />
              <FormInput
                disabled={!email.address}
                inline
                label="Default"
                name="defaultEmail"
                parser={parseInt}
                type="radio"
                value={index}
              />
            </div>
            <FormError name={`emails[${index}].address`} />
            <FormError name={`emails[${index}].enabled`} />
            <FormError name={`emails[${index}].private`} />
          </FormGroup>
        ))
      ) : (
        <Alert color="secondary">
          You have not added any email address yet.
        </Alert>
      )}

      <FormError name="emails" />
      <FormError name="defaultEmail" />
    </fieldset>
  );
}

export default EmailSection;
