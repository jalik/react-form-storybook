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
import {
  getErrorMessage,
  setLocale,
} from '@jalik/schema/dist/locale';
import fr from '@jalik/schema/dist/locales/fr';
import { string } from 'prop-types';
import React from 'react';
import { FormText } from 'reactstrap';

setLocale('fr', fr);

function FormError({ name }) {
  const lang = String(navigator.language).substr(0, 2).toLowerCase();
  const { errors } = useFormContext();
  const error = errors[name];
  return error ? (
    <FormText
      className="small"
      color="danger"
    >
      {getErrorMessage(error, lang)}
    </FormText>
  ) : null;
}

FormError.propTypes = {
  name: string.isRequired,
};

export default FormError;
