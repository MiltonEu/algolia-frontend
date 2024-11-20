import React, { useState } from 'react';
import { useHits } from 'react-instantsearch';
import PokemonCard from './PokemonCard';
import { Box } from '@mui/material';
import './CustomHits.css';
import PokemonDetail from './PokemonDetail';

function CustomHits(props) {
  const { items } = useHits(props);
  const [selectedPokemonId, setSelectedPokemonId] = useState(null);
  
  const handleCloseDetail = () => {
    setSelectedPokemonId(null);
  }

  return (
  <>
  <Box className="hits-container">
    {items.map((item) => (  <PokemonCard hit={item} key={item.objectID} setSelectedPokemonId={setSelectedPokemonId}  />) 
)}
    </Box>
    <Box className={`pokemon-detail-container ${selectedPokemonId ? 'visible' : ''}`}>
        {selectedPokemonId && <PokemonDetail pokemonId={selectedPokemonId} onClose={handleCloseDetail} />}
      </Box>
  </>
  );
}

export default CustomHits;
