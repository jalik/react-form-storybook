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

import { Field } from '@jalik/react-form';
import {
  any,
  array,
  arrayOf,
  bool,
  node,
  number,
  oneOfType,
  shape,
  string,
} from 'prop-types';
import React from 'react';
import {
  CustomInput,
  Input,
} from 'reactstrap';
import { generateFieldId } from '../libs/utils';

function FormInput(
  {
    children,
    id,
    name,
    type,
    value,
    ...props
  },
) {
  return (
    <Field
      {...props}
      component={['checkbox', 'radio', 'range', 'select'].indexOf(type) !== -1 ? CustomInput : Input}
      id={id || generateFieldId(name, value)}
      name={name}
      type={type}
      value={value}
    >
      {children}
    </Field>
  );
}

FormInput.propTypes = {
  children: node,
  id: string,
  name: string.isRequired,
  options: arrayOf(oneOfType([
    any,
    shape({
      disabled: bool,
      label: string,
      value: any.isRequired,
    }),
  ])),
  type: string,
  value: oneOfType([array, bool, number, string]),
};

FormInput.defaultProps = {
  children: null,
  id: null,
  options: null,
  type: 'text',
  value: null,
};

export default FormInput;
