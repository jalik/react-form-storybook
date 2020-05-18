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

import React from 'react';
import { FormGroup } from 'reactstrap';
import { languages } from '../../libs/values';
import FormError from '../FormError';
import FormInput from '../FormInput';

function LanguageSection() {
  return (
    <fieldset>
      <legend>Languages</legend>

      <div className="row">
        <div className="col">
          <FormGroup>
            {languages.map(({ label, value }) => (
              <FormInput
                key={label}
                label={label}
                name="languages"
                type="checkbox"
                value={value}
              />
            ))}
            <FormError name="languages" />
          </FormGroup>
        </div>
        <div className="col">
          <FormGroup>
            <FormInput
              multiple
              name="languages"
              type="select"
              options={languages}
            />
            <FormError name="languages" />
          </FormGroup>
        </div>
      </div>
    </fieldset>
  );
}

export default LanguageSection;
