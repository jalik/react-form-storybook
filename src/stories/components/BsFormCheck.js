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
  array,
  bool,
  node,
  number,
  oneOf,
  oneOfType,
  string,
} from 'prop-types';
import React from 'react';
import { slugify } from '../libs/utils';

function BsFormCheck(
  {
    inline,
    label,
    name,
    type,
    value,
    ...props
  },
) {
  const id = `${slugify(name)}_${slugify(String(value))}_field`;
  return (
    <div className={`custom-control custom-${type} ${inline ? 'custom-control-inline' : ''}`}>
      <Field
        className="custom-control-input"
        id={id}
        name={name}
        type={type}
        value={value}
        {...props}
      />
      <label
        className="custom-control-label"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}

BsFormCheck.propTypes = {
  inline: bool,
  label: node.isRequired,
  name: string.isRequired,
  type: oneOf(['checkbox', 'radio']).isRequired,
  value: oneOfType([array, bool, number, string]),
};

BsFormCheck.defaultProps = {
  inline: false,
  value: null,
};

export default BsFormCheck;
