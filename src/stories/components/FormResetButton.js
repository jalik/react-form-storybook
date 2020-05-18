import React from 'react';
import FormButton from './FormButton';

function FormResetButton() {
  return (
    <FormButton
      className="ml-1"
      type="reset"
    >
      <i className="fas fa-fw fa-undo-alt mr-1" />
      Reset
    </FormButton>
  );
}

export default FormResetButton;
