import React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import LoginForm from '@/components/login/LoginForm';

const Login = () => {
  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
          height: 300,
        },
      }}
    >
      <Paper elevation={3}>
        <LoginForm submitHandler={formSubmitHandler} />
      </Paper>
    </Box>
  );
};

export default Login;
