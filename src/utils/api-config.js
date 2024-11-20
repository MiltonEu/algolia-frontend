export const BASE_URL = process.env.REACT_APP_BACKEND_URL;

console.log('BASE_URL:', BASE_URL);
export const apiConfig = {
  login: `${BASE_URL}/auth/login`,
  signup: `${BASE_URL}/auth/signup`,
  getUser: () => `${BASE_URL}/users/profileFromToken`,
  pokemon : (pokemonId) => `${BASE_URL}/pokemon/${pokemonId}`
};
