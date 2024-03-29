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
  Form,
  useForm,
} from '@jalik/react-form';
import {
  func,
  object,
} from 'prop-types';
import React, {
  useEffect,
  useState,
} from 'react';
import Card from 'reactstrap/es/Card';
import CardBody from 'reactstrap/es/CardBody';
import CardFooter from 'reactstrap/es/CardFooter';
import {
  createFieldInitializer,
  createFieldValidator,
  createValidator,
} from '../../libs/utils';
import { countryCurrency } from '../../libs/values';
import UserSchema from '../../schemas/UserSchema';
import FormButton from '../FormButton';
import FormResetButton from '../FormResetButton';
import FormStateBadges from '../FormStateBadges';
import FormSubmitButton from '../FormSubmitButton';
import FormValidateButton from '../FormValidateButton';
import AddressSection from '../sections/AddressSection';
import EmailSection from '../sections/EmailSection';
import FileSection from '../sections/FileSection';
import GeneralSection from '../sections/GeneralSection';
import LanguageSection from '../sections/LanguageSection';
import PhoneSection from '../sections/PhoneSection';
import ProfessionalSection from '../sections/ProfessionalSection';
import ProfileSection from '../sections/ProfileSection';

const onInitializeField = createFieldInitializer(UserSchema);
const onValidate = createValidator(UserSchema);
const onValidateField = createFieldValidator(UserSchema);

let renderCount = 0;

function UserForm({ onSubmit, values }) {
  const [modifications, setModifications] = useState(null);
  const form = useForm({
    initialValues: values,
    onInitializeField,
    onSubmit,
    onValidate,
    onValidateField,
  });

  const country = form.getValue('address.country');
  const income = form.getValue('professional.income', {});

  // Set default currency if not selected when country is selected.
  if (country && !income.amount && income.currency !== countryCurrency[country]) {
    form.setValue('professional.income.currency', countryCurrency[country]);
  }

  useEffect(() => {
    if (!form.modified) {
      setModifications(null);
    }
  }, [form.modified]);

  console.log('RENDER UserForm', renderCount);
  renderCount += 1;

  return (
    <Form
      className="m-3"
      context={form}
    >
      <Card>
        <CardBody>
          <div className="row">
            <div className="col">
              <GeneralSection />
              <ProfileSection />
            </div>
            <div className="col">
              <LanguageSection />
              <AddressSection />
              <ProfessionalSection />
            </div>
            <div className="col">
              <EmailSection />
              <PhoneSection />
              <FileSection />
            </div>
          </div>
        </CardBody>

        <CardFooter className="text-right">
          <div className="row">
            <div className="col form-inline">
              <div className="input-group">
                <select
                  className="custom-select"
                  disabled={!form.modified}
                  name="modifications"
                  onChange={(event) => { setModifications(event.target.value); }}
                  value={modifications || ''}
                >
                  <option value="">
                    {`${Object.keys(form.modifiedFields).length} modification(s)`}
                  </option>
                  {Object.keys(form.modifiedFields).map((name) => (
                    <option key={name}>{name}</option>
                  ))}
                </select>
                <div className="input-group-append">
                  <FormButton
                    disabled={!modifications}
                    onClick={() => { form.reset([modifications]); }}
                  >
                    Reset field
                  </FormButton>
                </div>
              </div>
            </div>

            <div className="col">
              <FormStateBadges />
              <FormResetButton />
              <FormValidateButton />
              <FormSubmitButton />
            </div>
          </div>
        </CardFooter>
      </Card>
    </Form>
  );
}

UserForm.propTypes = {
  onSubmit: func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  values: object,
};

UserForm.defaultProps = {
  values: null,
};

export default UserForm;
