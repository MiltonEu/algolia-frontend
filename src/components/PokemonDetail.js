import React, { useEffect, useRef } from 'react';
import usePokemon from '../hooks/pokemons/use-pokemon-hook';
import { Alert, Box, CircularProgress, Card, CardContent, Typography } from '@mui/material';
import PokemonType from './PokemonType';

const PokemonDetail = ({ pokemonId, onClose }) => {
  const { pokemon, loading, error } = usePokemon(pokemonId);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);
  
  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;


  return (
    <Box position="relative" display="flex" justifyContent="center" alignItems="center" ref={containerRef}>
      <Card sx={{ minHeight: 600, minWidth : 300, overflow: 'visible', position: 'relative', zIndex: 1, width: '100%', maxWidth: 600, backgroundColor : "#f9f9f9" , display : "flex", flexDirection :"column", alignItems : "center", borderRadius:5, border:"1px solid #ddd" }}>
        <Box className="pokemon-img-container" sx={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <img
            src={pokemon.picture}
            alt={pokemon.name}
            className='pokemon-img'
            style={{ maxWidth: '150px', height: 'auto', position: 'absolute', top: '-90px', left: '50%', transform: 'translateX(-50%)' }}
          />
        </Box>
        <CardContent sx={{ paddingTop: '75px' }}>
          <Typography variant="h4" component="h2" gutterBottom textAlign={"center"} fontWeight={"bold"}>
            {pokemon.name}
          </Typography>
          {pokemon.types && pokemon.types.length > 0 && (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
              {pokemon.types.map((type) => (
                <PokemonType type={type} key={type} />
              ))}
            </Box>
          )    
        }
        <Typography variant="body1" textAlign={"center"} fontWeight={"bold"}>
          POKÉDEX ENTRY
            </Typography>
          <Typography variant="body1">
            <strong>Life:</strong> {pokemon.life}
          </Typography>
          <Typography variant="body1">
            <strong>Damage:</strong> {pokemon.damage}
          </Typography>

        </CardContent>
      </Card>
    </Box>
  );
};

export default PokemonDetail;
