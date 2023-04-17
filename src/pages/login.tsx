import React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import LoginForm from '@/components/login/LoginForm';

const Login = () => {
  const formSubmitHandler = (loginInfo: {
    email: string;
    password: string;
  }) => {
    console.log(loginInfo);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '& > :not(style)': {
          m: 1,
          width: 600,
        },
      }}
    >
      <Paper elevation={3}>
        <LoginForm onSubmitHandler={formSubmitHandler} />
      </Paper>
    </Box>
  );
};

export default Login;
