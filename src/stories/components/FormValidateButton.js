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
      {validating ? (
        <i className="fas fa-fw fa-spinner fa-spin mr-1" />
      ) : (
        <i className="fas fa-fw fa-check mr-1" />
      )}
      Validate
    </FormButton>
  );
}

export default FormValidateButton;
