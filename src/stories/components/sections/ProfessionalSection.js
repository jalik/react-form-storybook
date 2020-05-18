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
import { currencies } from '../../libs/values';
import FormError from '../FormError';
import FormField from '../FormField';
import FormInput from '../FormInput';

function ProfessionalSection() {
  return (
    <fieldset>
      <legend>Professional</legend>

      <FormGroup>
        <label>Income</label>
        <div className="input-group">
          <FormInput
            name="professional.income.amount"
            max={1000000}
            step={10000}
            type="number"
          />
          <FormInput
            emptyOptionLabel="Currency"
            name="professional.income.currency"
            options={currencies}
            type="select"
          />
        </div>
        <FormError name="professional.income.amount" />
        <FormError name="professional.income.currency" />
      </FormGroup>
      <FormGroup>
        <FormField
          label="Income (range)"
          name="professional.income.amount"
          max={1000000}
          step={10000}
          type="range"
        />
      </FormGroup>
      <FormGroup>
        <FormField
          label="Website"
          name="professional.website"
          type="url"
        />
      </FormGroup>
    </fieldset>
  );
}

export default ProfessionalSection;
