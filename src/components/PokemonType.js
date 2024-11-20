import { Typography } from '@mui/material'
import React from 'react'

const PokemonType = (props) => {
  return (
   <>
   <Typography component={"span"} key={props.type} className="pokemon-type" style={{ backgroundColor: getPokemonColor(props.type) }} >
                {capitalizeFirstLetter(props.type)}
              </Typography>
   </>
  )
}

function getPokemonColor(pokemonType) {
    switch (pokemonType.toLowerCase()) {
      case 'normal':
        return '#A8A77A';
      case 'fire':
        return '#EE8130';
      case 'flying':
        return '#A98FF3';
      case 'poison':
        return '#A33EA1';
      case 'electric':
        return '#F7D02C';
      case 'water':
        return '#6390F0';
      case 'bug':
        return '#A6B91A';
      case 'fairy':
        return '#D685AD';
      case 'grass':
        return '#7AC74C';
      default:
        return '#A8A77A';
    }
  }
  
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

export default PokemonType

