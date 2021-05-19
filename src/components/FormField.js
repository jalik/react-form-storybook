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

import { getFieldId } from '@jalik/react-form';
import {
  bool,
  node,
  number,
  oneOfType,
  string,
} from 'prop-types';
import React from 'react';
import FormError from './FormError';
import FormInput from './FormInput';

function FormField(
  {
    children,
    label,
    name,
    value,
    ...props
  },
) {
  const id = getFieldId(name, value);
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <FormInput
        {...props}
        id={id}
        name={name}
        value={value}
      >
        {children}
      </FormInput>
      <FormError name={name} />
    </>
  );
}

FormField.propTypes = {
  children: node,
  label: string.isRequired,
  name: string.isRequired,
  value: oneOfType([bool, number, string]),
};

FormField.defaultProps = {
  children: null,
  value: null,
};

export default FormField;
