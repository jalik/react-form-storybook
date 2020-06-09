import useFormContext from '@jalik/react-form/dist/useFormContext';
import React from 'react';

function FormStateBadges() {
  const {
    modified, submitError, submitted, submitting, validated,
  } = useFormContext();
  return (
    <>
      {modified ? (
        <div className="badge badge-warning mr-3">MODIFIED</div>
      ) : (
        <div className="badge badge-secondary mr-3">UNMODIFIED</div>
      )}

      {validated ? (
        <div className="badge badge-primary mr-3">VALIDATED</div>
      ) : (
        <div className="badge badge-danger mr-3">INVALID</div>
      )}

      {submitting ? (
        <div className="badge badge-info mr-3">SUBMITTING</div>
      ) : null}

      {submitError ? (
        <div className="badge badge-danger mr-3">{`FAILED: ${submitError.message}`}</div>
      ) : null}

      {submitted ? (
        <div className="badge badge-success mr-3">SUBMITTED</div>
      ) : null}
    </>
  );
}

export default FormStateBadges;
