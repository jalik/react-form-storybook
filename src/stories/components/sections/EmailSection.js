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
  useFormContext,
} from '@jalik/react-form';
import React from 'react';
import { FormGroup } from 'reactstrap';
import { parseBoolean } from '../../libs/utils';
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

      <div className="btn-group mb-3">
        <Button
          className="btn btn-secondary"
          onClick={emails.handleAppend}
        >
          <i className="fas fa-fw fa-plus-circle mr-1" />
          Append
        </Button>
        <Button
          className="btn btn-secondary"
          onClick={emails.handlePrepend}
        >
          <i className="fas fa-fw fa-plus-circle mr-1" />
          Prepend
        </Button>
      </div>

      {emails.fields.length > 0 ? (
        emails.fields.map(({ key, value: email }, index) => (
          <FormGroup key={key}>
            <div className="input-group">
              <FormInput
                disabled={!getValue(`emails[${index}].enabled`)}
                name={`emails[${index}].address`}
                parser={parseEmailAddress}
                placeholder="me@mail.com"
                type="email"
              />
              <div className="input-group-append">
                <Button
                  className="btn btn-secondary"
                  disabled={index === emails.fields.length - 1}
                  onClick={handleMoveDown(index)}
                >
                  <i className="fas fa-fw fa-arrow-circle-down" />
                </Button>
                <Button
                  className="btn btn-secondary"
                  disabled={index === 0}
                  onClick={handleMoveUp(index)}
                >
                  <i className="fas fa-fw fa-arrow-circle-up" />
                </Button>
                <Button
                  className="btn btn-secondary"
                  onClick={emails.handleRemove(index)}
                >
                  <i className="fas fa-fw fa-trash" />
                </Button>
              </div>
            </div>
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
        <div className="alert alert-secondary">
          You have not added any email address yet.
        </div>
      )}

      <FormError name="emails" />
      <FormError name="defaultEmail" />
    </fieldset>
  );
}

export default EmailSection;
