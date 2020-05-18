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

import SchemaValidator from '@jalik/react-form/dist/SchemaValidator';

export function capitalize(text) {
  return typeof text === 'string' && text.length > 0
    ? text.substr(0, 1).toUpperCase() + text.substr(1)
    : text;
}

export function capitalizeWords(text) {
  return typeof text === 'string' && text.length > 0
    ? text.split(' ').map(capitalize).join(' ')
    : text;
}

export function createSchemaValidator(schema) {
  return new SchemaValidator({
    // Returns field attributes.
    getAttributes(name) {
      const field = schema.getField(name);
      return field ? {
        max: field.getMax(),
        min: field.getMin(),
        maxLength: field.getMaxLength(),
        minLength: field.getMinLength(),
        pattern: field.getPattern(),
        required: field.isRequired(),
      } : null;
    },
    // Validate all fields (including nested elements).
    validate(values) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(schema.getErrors(values));
        }, 1000);
      });
    },
    // Validate a single field (excluding nested elements).
    validateField(value, name, values) {
      return schema.getField(name).validate(value, {
        context: values,
        rootOnly: true,
      });
    },
  });
}

export function doSubmit(values) {
  // eslint-disable-next-line no-console
  console.log('SUBMIT', values);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate network error randomly.
      if (Math.round(Math.random()) === 1) {
        reject(Error('Network error'));
      } else {
        resolve({
          status: 200,
          success: true,
        });
      }
    }, 1000);
  });
}

export function generateFieldId(name, value = '') {
  // eslint-disable-next-line no-use-before-define
  return `${slugify(name)}_${slugify(String(value))}_field`;
}

export function mapOptionValues(options) {
  return options.map(({ value }) => value);
}

/**
 * Returns true if value is "true", "yes", "1" or "y",
 * false if not truthy or null for anything else.
 * @param {string|*} text
 * @return {boolean|null}
 */
export function parseBoolean(text) {
  return typeof text === 'string' && text.length > 0 ? /^[1y]|true|yes$/i.test(text) : null;
}

/**
 * Returns the string if not empty, otherwise returns null.
 * @param {string} text
 * @return {string|null}
 */
export function parseString(text) {
  return typeof text === 'string' && text.length > 0 ? text : null;
}

export function slugify(text) {
  return typeof text === 'string' && text.length > 0 ? text.replace(/[^a-zA-Z0-9_-]+/g, '_') : text;
}

export function uppercase(text) {
  return typeof text === 'string' ? text.toUpperCase() : text;
}
