import { Box } from '@mui/material';
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import './PokemonCard.css';
import PokemonType from './PokemonType';

const PokemonCard = ({ hit, setSelectedPokemonId }) => {

    return (
      <article className="pokemon-card" onClick={() => setSelectedPokemonId(hit.id)}>
        <img src={hit.picture} alt={hit.name} className="pokemon-image" />
        <Box className="pokemon-info">
          <h2 className="pokemon-name">{hit.name}</h2>
          <Box className='pokemon-stats-container'>
            <p className="pokemon-stats">
              <FitnessCenterIcon color='error' className='favorite-icon' /> {hit.damage}
            </p>
            <p className="pokemon-stats">
              <FavoriteIcon color='error' className="favorite-icon" /> {hit.life}
            </p>
          </Box>
          <Box className="pokemon-types-container">
            {hit.types && hit.types.length > 0 ? hit.types.map((type) => (
             <PokemonType type={type} key={type} />
            )) : null}
          </Box>
        </Box>
      </article>
    );
  }

export default PokemonCard
