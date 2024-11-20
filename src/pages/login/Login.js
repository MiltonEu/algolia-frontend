import React from 'react';
import { Box, Card, CardContent, CircularProgress, Alert } from '@mui/material';
import RandomImage from '../../components/RandomImage';
import { Form } from '../../components/Form';
import { useNavigate } from 'react-router-dom';

import useLogin from '../../hooks/login/use-login-hook';

const Login = () => {
    const formGreetings = {
      title: "Welcome Back",
      subtitle: "Enter your email and password to access your account"
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
  
    const { login, loading, error } = useLogin();
    const navigate = useNavigate();
  
    const handleLogin = async (data) => {
      const response = await login(data.email, data.password);
      if (response) {
        console.log('Login successful:', response);
        navigate('/');
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
            <Form fields={fields} formGreetings={formGreetings} onSubmit={handleLogin} />
            {loading && <CircularProgress />}
            {error && <Alert severity="error">{error}</Alert>}
          </CardContent>
        </Card>
      </Box>
    );
  };
  
  export default Login;
