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
import { currencies } from '../libs/values';
import BsField from './BsField';
import FormError from './FormError';
import FormControl from './FormControl';

function ProfessionalSection() {
  return (
    <fieldset>
      <legend>Professional</legend>

      <FormGroup>
        <label>Income</label>
        <div className="input-group">
          <FormControl
            name="professional.income.amount"
            max={1000000}
            step={10000}
            type="number"
          />
          <FormControl
            disabledOptionLabel="Currency"
            name="professional.income.currency"
            options={currencies}
            type="select"
          />
        </div>
        <FormError name="professional.income.amount" />
        <FormError name="professional.income.currency" />
      </FormGroup>
      <FormGroup>
        <BsField
          label="Income (range)"
          name="professional.income.amount"
          max={1000000}
          step={10000}
          type="range"
        />
      </FormGroup>
      <FormGroup>
        <BsField
          label="Website"
          name="professional.website"
          type="url"
        />
      </FormGroup>
    </fieldset>
  );
}

export default ProfessionalSection;
