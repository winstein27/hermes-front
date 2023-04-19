import React from 'react';
import { object, string, TypeOf } from 'zod';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import FormInput from '../UI/FormInput';

const loginSchema = object({
  email: string().nonempty('Email is required').email('Email is invalid'),
  password: string()
    .nonempty('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(32, 'Password must be less than 32 characters'),
});

type ILogin = TypeOf<typeof loginSchema>;

interface Props {
  onSubmitHandler: (loginInfo: { email: string; password: string }) => void;
}

const LoginForm = (props: Props) => {
  const matches = useMediaQuery('(min-width: 700px)');

  const boxStyles = matches
    ? { display: 'flex', justifyContent: 'center' }
    : {};

  const buttonStyles = matches
    ? { marginRight: 3, paddingLeft: 4, paddingRight: 4 }
    : { display: 'block', marginTop: 2, marginBottom: 2 };

  const defaultValues: ILogin = {
    email: '',
    password: '',
  };

  // ? The object returned from useForm Hook
  const methods = useForm<ILogin>({
    resolver: zodResolver(loginSchema),
    defaultValues,
  });

  const onSubmitHandler: SubmitHandler<ILogin> = (values: ILogin) => {
    props.onSubmitHandler(values);
  };

  return (
    <FormProvider {...methods}>
      <Box
        sx={{
          padding: 2,
        }}
      >
        <form action="POST" onSubmit={methods.handleSubmit(onSubmitHandler)}>
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

          <Box sx={{ ...boxStyles, marginTop: 2 }}>
            <Button
              variant="contained"
              type="submit"
              sx={buttonStyles}
              fullWidth={!matches}
            >
              Send
            </Button>
            <Button
              variant="outlined"
              type="button"
              sx={buttonStyles}
              fullWidth={!matches}
              onClick={() => methods.reset()}
            >
              Clear
            </Button>
          </Box>
        </form>
      </Box>
    </FormProvider>
  );
};

export default LoginForm;
