import {
  Form,
  useForm,
} from '@jalik/react-form';
import Schema from '@jalik/schema';
import {
  func,
  object,
} from 'prop-types';
import React from 'react';
import Card from 'reactstrap/es/Card';
import CardBody from 'reactstrap/es/CardBody';
import CardFooter from 'reactstrap/es/CardFooter';
import FormGroup from 'reactstrap/es/FormGroup';
import { createSchemaValidator } from '../../libs/utils';
import FormField from '../FormField';
import FormResetButton from '../FormResetButton';
import FormStateBadges from '../FormStateBadges';
import FormSubmitButton from '../FormSubmitButton';

export const LoginFormSchema = new Schema({
  username: {
    type: 'string',
    required: true,
    minLength: 1,
  },
  password: {
    type: 'string',
    required: true,
    minLength: 1,
  },
});

const LoginFormSchemaValidator = createSchemaValidator(LoginFormSchema);

function LoginForm({ onSubmit, values }) {
  const form = useForm({
    initialValues: values,
    onSubmit,
    schema: LoginFormSchemaValidator,
  });
  return (
    <Form
      className="m-3"
      context={form}
      style={{ maxWidth: 600 }}
    >
      <Card>
        <CardBody>
          <FormGroup>
            <FormField
              label="Username"
              name="username"
            />
          </FormGroup>
          <FormGroup>
            <FormField
              label="Password"
              name="password"
              type="password"
            />
          </FormGroup>
        </CardBody>
        <CardFooter className="text-right">
          <FormStateBadges />
          <FormResetButton />
          <FormSubmitButton />
        </CardFooter>
      </Card>
    </Form>
  );
}

LoginForm.propTypes = {
  onSubmit: func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  values: object,
};

LoginForm.defaultProps = {
  values: null,
};

export default LoginForm;
