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
  useFormContext,
} from '@jalik/react-form';
import React, { useState } from 'react';
import { FormGroup } from 'reactstrap';
import {
  checkPassword,
  checkUsernameAsync,
} from '../../libs/checks';
import FormField from '../FormField';
import FormError from '../FormError';
import FormControl from './FormControl';

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
          validator={checkUsernameAsync}
        />
      </FormGroup>
      <div className="form-row">
        <div className="col">
          <FormGroup>
            <label htmlFor="passwordField">
              Password
            </label>
            <div className="input-group">
              <FormControl
                id="passwordField"
                name="password"
                type={passwordVisible ? 'text' : 'password'}
                validator={checkPassword}
              />
              <div className="input-group-append">
                <Button
                  className="btn btn-secondary"
                  onClick={togglePasswordVisible}
                  type="button"
                >
                  {passwordVisible ? (
                    <i className="fas fa-fw fa-eye-slash" />
                  ) : (
                    <i className="fas fa-fw fa-eye" />
                  )}
                </Button>
              </div>
            </div>
            <FormError name="password" />
          </FormGroup>
        </div>
        <div className="col">
          <FormGroup>
            <label htmlFor="passwordConfirmField">
              Password confirmation
            </label>
            <FormControl
              disabled={getValue('password', '').length === 0}
              id="passwordConfirmField"
              name="passwordConfirm"
              type={passwordVisible ? 'text' : 'password'}
              validator={checkPassword}
            />
            <FormError name="passwordConfirm" />
          </FormGroup>
        </div>
      </div>
    </fieldset>
  );
}

export default GeneralSection;
