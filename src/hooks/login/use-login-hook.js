import { useContext, useState } from 'react';
import axios from 'axios';
import { apiConfig } from '../../utils/api-config';
import { AuthContext } from '../../context/AuthContext';

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { login: authLogin } = useContext(AuthContext);
  
    const login = async (email, password) => {
      setLoading(true);
      setError(null);
  
      try {
        const response = await axios.post(apiConfig.login, {
          email,
          password,
        });
        const token = response.data.refreshToken;
        localStorage.setItem('authToken', token); 
        authLogin(); 
        setLoading(false);
        return response.data;
      } catch (err) {
        setLoading(false);
        setError(err.response ? err.response.data : 'An error occurred');
      }
    };
  
    return { login, loading, error };
  };
  
  export default useLogin;
