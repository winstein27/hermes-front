import React from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface Props {
  submitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
}

const LoginForm = (props: Props) => {
  const matches = useMediaQuery('(min-width: 700px)');

  const boxStyles = matches
    ? { display: 'flex', justifyContent: 'center' }
    : {};

  const buttonStyles = matches
    ? { marginRight: 3, paddingLeft: 4, paddingRight: 4 }
    : { display: 'block', marginTop: 2, marginBottom: 2 };

  return (
    <Box
      sx={{
        padding: 2,
      }}
    >
      <form action="POST" onSubmit={props.submitHandler}>
        <TextField
          required
          id="email"
          name="email"
          label="Email"
          placeholder="example@email.com"
          variant="standard"
          margin="normal"
          fullWidth
        />
        <TextField
          required
          id="password"
          type="password"
          name="email"
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
          >
            Clear
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default LoginForm;
