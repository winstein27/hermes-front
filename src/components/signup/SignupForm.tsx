import React, { useState } from 'react';
import { object, string, TypeOf } from 'zod';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

import FormInput from '../UI/FormInput';

const signupSchema = object({
  firstName: string()
    .nonempty('First name is required')
    .min(3, 'First name must be at least 3 characters'),
  lastName: string()
    .nonempty('Last name is required')
    .min(3, 'Last name must be at least 3 characters'),
  companyName: string()
    .nonempty('Company name is required')
    .min(3, 'Company name must be at least 3 characters'),
  email: string().nonempty('Email is required').email('Email is invalid'),
  password: string()
    .nonempty('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(32, 'Password must be less than 32 characters'),
  confirmPassword: string()
    .nonempty('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(32, 'Password must be less than 32 characters'),
});

type ISignup = TypeOf<typeof signupSchema>;

interface Props {
  onSubmitHandler: (signupInfo: {
    firstName: string;
    lastName: string;
    companyName: string;
    email: string;
    password: string;
  }) => void;
}

const SignupForm = (props: Props) => {
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const matches = useMediaQuery('(min-width: 700px)');

  const boxStyles = matches
    ? { display: 'flex', justifyContent: 'center' }
    : {};

  const buttonStyles = matches
    ? { marginRight: 3, paddingLeft: 4, paddingRight: 4 }
    : { display: 'block', marginTop: 2, marginBottom: 2 };

  const defaultValues: ISignup = {
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  // ? The object returned from useForm Hook
  const methods = useForm<ISignup>({
    resolver: zodResolver(signupSchema),
    defaultValues,
  });

  const onSubmitHandler: SubmitHandler<ISignup> = (values: ISignup) => {
    if (values.password !== values.confirmPassword) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);
      props.onSubmitHandler(values);
    }
  };

  const clearFormHandler = () => {
    methods.reset();
    setPasswordsMatch(true);
  };

  return (
    <FormProvider {...methods}>
      <Box
        sx={{
          padding: 2,
        }}
      >
        {!passwordsMatch && (
          <Alert severity="error">Passwords don&apos;t match!</Alert>
        )}
        <form action="POST" onSubmit={methods.handleSubmit(onSubmitHandler)}>
          <FormInput
            required
            id="firstName"
            name="firstName"
            label="First name"
            placeholder="John"
            variant="standard"
            margin="normal"
            fullWidth
          />
          <FormInput
            required
            id="lastName"
            name="lastName"
            label="Last name"
            placeholder="Doe"
            variant="standard"
            margin="normal"
            fullWidth
          />
          <FormInput
            required
            id="companyName"
            name="companyName"
            label="Company name"
            placeholder="Starbucks"
            variant="standard"
            margin="normal"
            fullWidth
          />
          <FormInput
            required
            id="email"
            name="email"
            label="Email"
            placeholder="example@email.com"
            variant="standard"
            margin="normal"
            fullWidth
          />
          <FormInput
            required
            id="password"
            type="password"
            name="password"
            label="Password"
            variant="standard"
            margin="normal"
            fullWidth
          />
          <FormInput
            required
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            label="Re-enter password"
            variant="standard"
            margin="normal"
            fullWidth
          />

          <Box sx={{ ...boxStyles, marginTop: 2 }}>
            <Button
              variant="contained"
              type="submit"
              sx={buttonStyles}
              fullWidth={!matches}
            >
              Sign Up
            </Button>
            <Button
              variant="outlined"
              type="button"
              sx={buttonStyles}
              fullWidth={!matches}
              onClick={clearFormHandler}
            >
              Clear
            </Button>
          </Box>
        </form>
      </Box>
    </FormProvider>
  );
};

export default SignupForm;
