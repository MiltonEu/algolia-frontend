import { useState, useEffect } from 'react';
import api from '../../utils/axios-config';
import { apiConfig } from '../../utils/api-config';


const usePokemon = (pokemonId) => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        console.log(apiConfig.pokemon(pokemonId));
        
        const response = await api.get(apiConfig.pokemon(pokemonId));
        setPokemon(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [pokemonId]);

  return { pokemon, loading, error };
};

export default usePokemon;
