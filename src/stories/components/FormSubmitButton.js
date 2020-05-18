import useFormContext from '@jalik/react-form/dist/useFormContext';
import React from 'react';
import FormButton from './FormButton';

function FormSubmitButton() {
  const { failedCount, submitting } = useFormContext();
  return (
    <FormButton
      className="ml-1"
      color="primary"
      type="submit"
    >
      {failedCount > 0 ? (
        <>
          {submitting ? (
            <i className="fas fa-fw fa-redo-alt fa-spin mr-1" />
          ) : (
            <i className="fas fa-fw fa-redo-alt mr-1" />
          )}
          {`Retry (${failedCount})`}
        </>
      ) : (
        <>
          {submitting ? (
            <i className="fas fa-fw fa-spinner fa-spin mr-1" />
          ) : (
            <i className="fas fa-fw fa-paper-plane mr-1" />
          )}
          Submit
        </>
      )}
    </FormButton>
  );
}

export default FormSubmitButton;
