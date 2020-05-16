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

import Schema from '@jalik/schema';
import { mapOptionValues } from '../libs/utils';
import { languages } from '../libs/values';
import AddressSchema from './AddressSchema';
import EmailSchema from './EmailSchema';
import FileSchema from './FileSchema';
import PhoneSchema from './PhoneSchema';
import ProfessionalSchema from './ProfessionalSchema';
import ProfileSchema from './ProfileSchema';

const UserSchema = new Schema({
  address: {
    type: AddressSchema,
    required: true,
  },
  defaultEmail: {
    required: true,
  },
  emails: {
    type: 'array',
    items: { type: EmailSchema },
    required: true,
    minLength: 1,
    maxLength: 2,
  },
  files: {
    type: 'array',
    items: { type: FileSchema },
    required: true,
    maxLength: 2,
  },
  languages: {
    type: 'array',
    items: { type: 'string' },
    required: true,
    minLength: 1,
    allowed: mapOptionValues(languages),
  },
  password: {
    type: 'string',
    required: true,
    minLength: 10,
    maxLength: 20,
    check: (value) => /[0-9]/.test(value) && /[a-zA-Z]/.test(value),
  },
  passwordConfirm: {
    type: 'string',
    required: true,
    check: (value, context) => value === context.password,
  },
  phones: {
    type: 'array',
    items: { type: PhoneSchema },
    required: true,
    minLength: 1,
    maxLength: 2,
  },
  professional: {
    type: ProfessionalSchema,
    required: true,
  },
  profile: {
    type: ProfileSchema,
    required: true,
  },
  username: {
    type: 'string',
    required: true,
    minLength: 3,
    maxLength: 20,
  },
});

export default UserSchema;
