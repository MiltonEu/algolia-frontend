import React from 'react';
import { Form } from '../../components/Form';
import { Alert, Box, Card, CardContent, CircularProgress } from '@mui/material';
import RandomImage from '../../components/RandomImage';
import useSignup from '../../hooks/signup/use-signup-hook';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const formGreetings = {
    title: "Hey, want to join us ?",
    subtitle: "Enter your email and password create your account"
  };

  const fields = [
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      placeholder: 'Enter your email',
      validation: { required: true }
    },
    {
      name: 'password',
      type: 'password',
      label: 'Password',
      placeholder: 'Enter your password',
      validation: { required: true }
    }
  ];

  const navigate = useNavigate();
  const {signup, loading, error } = useSignup();

  const handleSignup = async (data) => {
    const response = await signup(data.email, data.password);
    if (response) {
      alert('Account created');
      navigate('/login');
    }
  };

  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="70vh"
  >
    <Card sx={{ display: 'flex', alignItems: 'center', width: 1000, padding: 2, border: "1px solid #eee",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", height: 500 }}>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" flex={1}>
        <RandomImage />
      </Box>
      <CardContent sx={{ flex: 1 }}>
        <Form fields={fields} formGreetings={formGreetings} onSubmit={handleSignup} />
        {loading && <CircularProgress />}
        {error && <Alert severity="error">{error}</Alert>}
      </CardContent>
    </Card>
  </Box>
  );
};

export default Signup;
