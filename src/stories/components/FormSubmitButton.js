import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons/faRedoAlt';
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useFormContext from '@jalik/react-form/dist/useFormContext';
import React from 'react';
import FormButton from './FormButton';

function FormSubmitButton() {
  const { submitCount, submitting } = useFormContext();
  return (
    <FormButton
      className="ml-1"
      color="primary"
      type="submit"
    >
      {submitCount > 0 ? (
        <>
          <FontAwesomeIcon
            fixedWidth
            icon={faRedoAlt}
            spin={submitting}
            className="mr-1"
          />
          {`Retry (${submitCount})`}
        </>
      ) : (
        <>
          {submitting ? (
            <FontAwesomeIcon
              fixedWidth
              icon={faSpinner}
              spin
              className="mr-1"
            />
          ) : (
            <FontAwesomeIcon
              fixedWidth
              icon={faPaperPlane}
              className="mr-1"
            />
          )}
          Submit
        </>
      )}
    </FormButton>
  );
}

export default FormSubmitButton;
