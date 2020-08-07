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

import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormContext } from '@jalik/react-form';
import React, { useState } from 'react';
import { FormGroup } from 'reactstrap';
import Col from 'reactstrap/es/Col';
import InputGroup from 'reactstrap/es/InputGroup';
import InputGroupAddon from 'reactstrap/es/InputGroupAddon';
import Row from 'reactstrap/es/Row';
import FormButton from '../FormButton';
import FormError from '../FormError';
import FormField from '../FormField';
import FormInput from '../FormInput';

function GeneralSection() {
  const { getValue } = useFormContext();
  const [passwordVisible, setPasswordVisible] = useState(false);

  function togglePasswordVisible() {
    setPasswordVisible((state) => !state);
  }

  return (
    <fieldset>
      <legend>General</legend>

      <FormGroup>
        <FormField
          label="Username"
          name="username"
        />
      </FormGroup>
      <Row form>
        <Col>
          <FormGroup>
            <label htmlFor="passwordField">
              Password
            </label>
            <FormInput
              id="passwordField"
              name="password"
              type={passwordVisible ? 'text' : 'password'}
            />
            <FormError name="password" />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <label htmlFor="passwordConfirmField">
              Password confirmation
            </label>
            <InputGroup>
              <FormInput
                disabled={getValue('password', '').length === 0}
                id="passwordConfirmField"
                name="passwordConfirm"
                type={passwordVisible ? 'text' : 'password'}
              />
              <InputGroupAddon addonType="append">
                <FormButton onClick={togglePasswordVisible}>
                  <FontAwesomeIcon
                    fixedWidth
                    icon={passwordVisible ? faEyeSlash : faEye}
                    className="mr-1"
                  />
                </FormButton>
              </InputGroupAddon>
            </InputGroup>
            <FormError name="passwordConfirm" />
          </FormGroup>
        </Col>
      </Row>
    </fieldset>
  );
}

export default GeneralSection;
