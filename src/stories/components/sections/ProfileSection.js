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

import { faFemale } from '@fortawesome/free-solid-svg-icons/faFemale';
import { faMale } from '@fortawesome/free-solid-svg-icons/faMale';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons/faQuestionCircle';
import { faRing } from '@fortawesome/free-solid-svg-icons/faRing';
import { faRunning } from '@fortawesome/free-solid-svg-icons/faRunning';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormContext } from '@jalik/react-form';
import React from 'react';
import { FormGroup } from 'reactstrap';
import Col from 'reactstrap/es/Col';
import InputGroup from 'reactstrap/es/InputGroup';
import Row from 'reactstrap/es/Row';
import {
  capitalizeWords,
  parseBoolean,
  parseString,
  uppercase,
} from '../../libs/utils';
import {
  genders,
  maritalStatuses,
} from '../../libs/values';
import FormError from '../FormError';
import FormField from '../FormField';
import FormInput from '../FormInput';

function getGenderIcon(gender) {
  switch (gender) {
    case 'male':
      return faMale;
    case 'female':
      return faFemale;
    default:
      return faQuestionCircle;
  }
}

function getMarriedIcon(married) {
  switch (married) {
    case true:
      return faRing;
    case false:
      return faRunning;
    default:
      return faQuestionCircle;
  }
}

function ProfileSection() {
  const { getValue } = useFormContext();
  return (
    <fieldset>
      <legend>Profile</legend>

      <Row form>
        <Col>
          <FormGroup>
            <FormField
              label="First names"
              name="profile.firstNames"
              parser={capitalizeWords}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <FormField
              label="Last name"
              name="profile.lastName"
              parser={uppercase}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col>
          <FormGroup>
            <FormField
              label="Birth date"
              name="profile.birthDate"
              type="date"
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <FormField
              label="Birth time"
              type="time"
              name="profile.birthTime"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row form>
            <Col>
              <FormGroup>
                {genders.map(({ label, value }) => (
                  <FormInput
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
            </Col>
            <Col className="col-4 bg-light text-muted rounded text-center py-4">
              <FontAwesomeIcon
                fixedWidth
                icon={getGenderIcon(getValue('profile.gender'))}
                size="2x"
                className="mr-1"
              />
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col>
              <FormGroup>
                {maritalStatuses.map(({ label, value }) => (
                  <FormInput
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
            </Col>
            <Col className="col-4 bg-light text-muted rounded text-center py-4">
              <FontAwesomeIcon
                fixedWidth
                icon={getMarriedIcon(getValue('profile.married'))}
                size="2x"
                className="mr-1"
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <FormGroup>
        <label>Color</label>
        <InputGroup>
          <FormInput
            name="profile.color"
            parser={uppercase}
            type="color"
          />
          <FormInput
            name="profile.color"
            parser={uppercase}
            placeholder="#000000"
          />
        </InputGroup>
        <FormError name="profile.color" />
      </FormGroup>
    </fieldset>
  );
}

export default ProfileSection;
