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

import { useFormContext } from '@jalik/react-form';
import React from 'react';
import { FormGroup } from 'reactstrap';
import {
  capitalizeWords,
  parseBoolean,
  parseString,
  uppercase,
} from '../libs/utils';
import {
  genders,
  maritalStatuses,
} from '../libs/values';
import BsField from './BsField';
import FormError from './FormError';
import BsFormCheck from './BsFormCheck';
import FormControl from './FormControl';

function ProfileSection() {
  const { getValue } = useFormContext();
  return (
    <fieldset>
      <legend>Profile</legend>

      <div className="form-row">
        <div className="col">
          <FormGroup>
            <BsField
              label="First names"
              name="profile.firstNames"
              parser={capitalizeWords}
            />
          </FormGroup>
        </div>
        <div className="col">
          <FormGroup>
            <BsField
              label="Last name"
              name="profile.lastName"
              parser={uppercase}
            />
          </FormGroup>
        </div>
      </div>
      <div className="form-row">
        <div className="col">
          <FormGroup>
            <BsField
              label="Birth date"
              name="profile.birthDate"
              type="date"
            />
          </FormGroup>
        </div>
        <div className="col">
          <FormGroup>
            <BsField
              label="Birth time"
              name="profile.birthTime"
              type="time"
            />
          </FormGroup>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="form-row">
            <div className="col">
              <FormGroup>
                {genders.map(({ label, value }) => (
                  <BsFormCheck
                    key={label}
                    label={label}
                    name="profile.gender"
                    parser={parseString}
                    type="radio"
                    value={value}
                  />
                ))}
                <FormError name="profile.gender" />
              </FormGroup>
            </div>
            <div className="col-4 bg-light text-muted rounded text-center py-4">
              <i className={`fas fa-${getValue('profile.gender')} fa-fw fa-2x`} />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="form-row">
            <div className="col">
              <FormGroup>
                {maritalStatuses.map(({ label, value }) => (
                  <BsFormCheck
                    key={label}
                    label={label}
                    name="profile.married"
                    parser={parseBoolean}
                    type="radio"
                    value={value}
                  />
                ))}
                <FormError name="profile.married" />
              </FormGroup>
            </div>
            <div className="col-4 bg-light text-muted rounded text-center py-4">
              <i className={`fas fa-${getValue('profile.married') ? 'ring' : ''} fa-fw fa-2x`} />
            </div>
          </div>
        </div>
      </div>
      <FormGroup>
        <label>Color</label>
        <div className="input-group">
          <FormControl
            name="profile.color"
            parser={uppercase}
            type="color"
          />
          <FormControl
            name="profile.color"
            parser={uppercase}
            placeholder="#000000"
          />
        </div>
        <FormError name="profile.color" />
      </FormGroup>
    </fieldset>
  );
}

export default ProfileSection;
