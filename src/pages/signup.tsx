import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import SignupForm from '@/components/signup/SignupForm';

const Signup = () => {
  const formSubmitHandler = (signupInfo: {
    firstName: string;
    lastName: string;
    companyName: string;
    email: string;
    password: string;
  }) => {
    console.log(signupInfo);
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
        <SignupForm onSubmitHandler={formSubmitHandler} />
      </Paper>
    </Box>
  );
};

export default Signup;
