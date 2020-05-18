import { Button } from '@jalik/react-form';
import {
  node,
  string,
} from 'prop-types';
import React from 'react';
import { Button as RsButton } from 'reactstrap';

function FormButton({ children, ...props }) {
  return (
    <Button
      component={RsButton}
      {...props}
    >
      {children}
    </Button>
  );
}

FormButton.propTypes = {
  children: node,
  color: string,
  type: string,
};

FormButton.defaultProps = {
  children: null,
  color: 'secondary',
  type: 'button',
};

export default FormButton;
