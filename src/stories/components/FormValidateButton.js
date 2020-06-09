import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useFormContext from '@jalik/react-form/dist/useFormContext';
import React from 'react';
import FormButton from './FormButton';

function FormValidateButton() {
  const { validate, validated, validating } = useFormContext();
  return (
    <FormButton
      className="ml-1"
      disabled={validated || validating}
      onClick={validate}
    >
      <FontAwesomeIcon
        fixedWidth
        icon={validating ? faSpinner : faCheck}
        spin={validating}
        clas
        className="mr-1"
      />
      Validate
    </FormButton>
  );
}

export default FormValidateButton;
