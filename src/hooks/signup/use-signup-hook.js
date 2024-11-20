import { useState } from "react";
import { apiConfig } from "../../utils/api-config";
import axios from "axios";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signup = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(apiConfig.signup, { email, password });
      setLoading(false);
      return response.data;
    } catch (err) {
      setLoading(false);
      setError(err.response ? err.response.data : 'An error occurred');
    }
  };

  return { signup, loading, error };
};

export default useSignup;
