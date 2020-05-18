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

import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, {
  useEffect,
  useState,
} from 'react';
import '../styles/styles.css';
import UserForm from './components/forms/UserForm';
import { doSubmit } from './libs/utils';

const initialValues = {
  address: {
    street: 'Somewhere over the rainbow',
    country: 'pf',
  },
  defaultEmail: 0,
  emails: [
    { address: 'private@mail.com', enabled: true, private: true },
    { address: 'public@gmail.com', enabled: false, private: false },
  ],
  languages: ['fr', 'en'],
  phones: [
    { code: '689', number: '87010110', type: 'mobile' },
    { code: '689', number: '87110010', type: 'home' },
  ],
  profile: {
    birthDate: '1987-12-20',
    birthTime: '21:10',
    color: '#EEEEEE',
    firstNames: 'Karl',
    lastName: 'STEIN',
    gender: 'male',
    married: false,
  },
  professional: {
    income: { amount: 300_000, currency: 'XPF' },
    website: 'https://github.com/jalik',
  },
  username: 'jalik',
};

const emptyValues = {
  address: {},
  professional: { income: {} },
  profile: {},
};

export const EmptyUserFormExample = () => (
  <UserForm
    onSubmit={doSubmit}
    values={emptyValues}
  />
);

export const FilledUserFormExample = () => (
  <UserForm
    onSubmit={doSubmit}
    values={initialValues}
  />
);

export const LoadingUserFormExample = () => {
  const [data, setData] = useState(null);

  // Simulate loading of data.
  useEffect(() => {
    const timer = setTimeout(() => { setData(initialValues); }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <UserForm
      onSubmit={doSubmit}
      values={data}
    />
  );
};

export default {
  title: 'User Form',
  component: LoadingUserFormExample,
};
