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

import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFieldArray } from '@jalik/react-form';
import prettyBytes from 'pretty-bytes';
import React from 'react';
import { FormGroup } from 'reactstrap';
import Alert from 'reactstrap/es/Alert';
import ButtonGroup from 'reactstrap/es/ButtonGroup';
import FormText from 'reactstrap/es/FormText';
import InputGroup from 'reactstrap/es/InputGroup';
import InputGroupAddon from 'reactstrap/es/InputGroupAddon';
import FormButton from '../FormButton';
import FormError from '../FormError';
import FormInput from '../FormInput';

function FileSection() {
  const files = useFieldArray({
    name: 'files',
    defaultValue: {
      name: null,
      size: null,
      type: null,
    },
  });

  function handleSelectFiles(event) {
    const { target } = event;
    const blobs = [];
    target.files.forEach((blob) => {
      blobs.push({
        name: blob.name,
        size: blob.size,
        type: blob.type,
        blob,
      });
    });
    files.append(...blobs);
  }

  return (
    <fieldset>
      <legend>Files</legend>

      <ButtonGroup>
        <input
          className="custom-file"
          multiple
          name="filesLoader"
          onChange={handleSelectFiles}
          type="file"
        />
      </ButtonGroup>

      {files.fields.length > 0 ? (
        files.fields.map(({ key, value }, index) => (
          <FormGroup key={key}>
            <InputGroup>
              <FormInput name={`files[${index}].name`} />
              <InputGroupAddon addonType="append">
                <FormButton onClick={files.handleRemove(index)}>
                  <FontAwesomeIcon
                    fixedWidth
                    icon={faTrash}
                    className="mr-1"
                  />
                </FormButton>
              </InputGroupAddon>
            </InputGroup>
            <FormText>
              <FormError name={`files[${index}].name`} />
              <FormError name={`files[${index}].size`} />
              <FormError name={`files[${index}].type`} />
              <span className="small text-muted">
                <span>{value.type}</span>
                <span className="ml-2">{prettyBytes(value.size)}</span>
              </span>
            </FormText>
          </FormGroup>
        ))
      ) : (
        <Alert color="secondary">
          You have not added any file yet.
        </Alert>
      )}

      <FormError name="files" />
    </fieldset>
  );
}

export default FileSection;
