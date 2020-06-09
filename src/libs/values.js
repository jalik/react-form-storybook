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

export const countryCurrency = {
  fr: 'EUR',
  es: 'EUR',
  jp: 'JPY',
  pf: 'XPF',
  ru: 'RUB',
  uk: 'GBP',
  us: 'USD',
};

export const countries = [
  { label: 'France', value: 'fr' },
  { label: 'French Polynesia', value: 'pf' },
  { label: 'Japan', value: 'jp' },
  { label: 'Russia', value: 'ru' },
  { label: 'Spain', value: 'es' },
  { label: 'United Kingdom', value: 'uk' },
  { label: 'United States of America', value: 'us' },
];

export const currencies = [
  { label: 'EUR (€)', value: 'EUR' },
  { label: 'GBP (£)', value: 'GBP' },
  { label: 'JPY (¥)', value: 'JPY' },
  { label: 'RUB (₽)', value: 'RUB' },
  { label: 'USD ($)', value: 'USD' },
  { label: 'XPF', value: 'XPF' },
];

export const genders = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Unset', value: null },
];

export const languages = [
  { label: 'English', value: 'en' },
  { label: 'French', value: 'fr' },
  { label: 'Japanese', value: 'jp' },
  { label: 'Russian', value: 'ru' },
  { label: 'Spanish', value: 'es' },
];

export const maritalStatuses = [
  { label: 'Married', value: true },
  { label: 'Not married', value: false },
  { label: 'Unset', value: null },
];

export const phoneCountryCodes = [
  { label: '+33 (France)', value: '33' },
  { label: '+689 (French Polynesia)', value: '689' },
  { label: '+81 (Japan)', value: '81' },
  { label: '+7 (Russia)', value: '7' },
  { label: '+34 (Spain)', value: '34' },
  { label: '+44 (United Kingdom)', value: '44' },
  { label: '+1 (United States of America)', value: '1' },
];
