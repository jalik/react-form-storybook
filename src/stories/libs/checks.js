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

export function checkPassword(value) {
  if (typeof value !== 'string' || value.length === 0) {
    throw new Error('password is not set');
  }
  if (value.length < 10) {
    throw new Error('password must contain at least 10 characters');
  }
  if (value.length > 20) {
    throw new Error('password must contain no more than 20 characters');
  }
  if (!/[0-9]/.test(value)) {
    throw new Error('password must contain numbers');
  }
  if (!/[a-zA-Z]/.test(value)) {
    throw new Error('password must contain alphabetical characters');
  }
}

export function checkUsernameAsync(value) {
  if (typeof value !== 'string' || value.length === 0) {
    throw new Error('username is not set');
  }
  if (value.length > 20) {
    throw new Error('username must contain no more than 20 characters');
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!/[0-9]$/.test(value)) {
        reject(Error(`username already exists, try to add a number at the end (ex: ${value}1337)`));
      }
      resolve();
    }, 500);
  });
}

export function validateUserForm(values) {
  return new Promise(((resolve) => {
    const errors = {};
    let duration = 0;

    if (!values.username) {
      errors.username = 'username is not set';
    } else {
      duration = 500;

      if (values.username.length > 10) {
        errors.username = 'username is too long (10 characters maximum)';
      } else if (!/[0-9]$/.test(values.username)) {
        errors.username = `username already exists, try to add a number at the end (ex: ${values.username}1337)`;
      }
    }

    if (!values.password) {
      errors.password = 'password is not set';
    } else if (values.password.length < 10) {
      errors.password = 'password is too short (10 characters minimum)';
    }

    if (!values.profile?.firstNames) {
      errors['profile.firstNames'] = 'first names is not set';
    } else if (values.profile.firstNames.length > 30) {
      errors['profile.firstNames'] = 'first names is too long (30 characters maximum)';
    }

    if (!values.profile?.lastName) {
      errors['profile.lastName'] = 'last name is not set';
    } else if (values.profile.lastName.length > 30) {
      errors['profile.lastName'] = 'last name is too long (30 characters maximum)';
    }

    if (!values.profile?.birthDate) {
      errors['profile.birthDate'] = 'birth date is not set';
    }

    if (!values.profile?.birthTime) {
      errors['profile.birthTime'] = 'birth time is not set';
    }

    if (typeof values.profile?.gender === 'undefined') {
      errors['profile.gender'] = 'gender is not selected';
    }

    if (typeof values.profile?.married === 'undefined') {
      errors['profile.married'] = 'marital situation is not selected';
    }

    if (!values.profile?.color) {
      errors['profile.color'] = 'color is not set';
    } else if (!/^#[abcdefABCDEF0-9]{6}$/.test(values.profile.color)) {
      errors['profile.color'] = 'color is not valid';
    }

    if (!values.address?.country) {
      errors['address.country'] = 'country is not selected';
    }

    if (!values.address?.street) {
      errors['address.street'] = 'street is not set';
    }

    if (!values.professional?.income?.amount) {
      errors['professional.income.amount'] = 'income amount is not set';
    }
    if (!values.professional?.income?.currency) {
      errors['professional.income.currency'] = 'income currency is not set';
    }

    if (!values.professional?.website) {
      errors['professional.website'] = 'website is not set';
    } else if (!/^https?:\/\/[a-zA-Z0-9._-]\/?.*/.test(values.professional.website)) {
      errors['professional.website'] = 'website is not valid';
    }

    if (!values.languages || values.languages?.length < 1) {
      errors.languages = 'at least one language must be selected';
    }

    if (!values.emails || values.emails?.length < 1) {
      errors.emails = 'at least one email must be added';
    }

    if (!values.phones || values.phones?.length < 1) {
      errors.phones = 'at least one phone must be added';
    }

    setTimeout(() => {
      resolve(errors);
    }, duration);
  }));
}
