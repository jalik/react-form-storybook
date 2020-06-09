import { faUndoAlt } from '@fortawesome/free-solid-svg-icons/faUndoAlt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import FormButton from './FormButton';

function FormResetButton() {
  return (
    <FormButton
      className="ml-1"
      type="reset"
    >
      <FontAwesomeIcon
        fixedWidth
        icon={faUndoAlt}
        className="mr-1"
      />
      Reset
    </FormButton>
  );
}

export default FormResetButton;
