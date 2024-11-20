import React, { useState } from 'react';
import { Configure, InstantSearch, Pagination } from 'react-instantsearch';
import ConnectedCustomSortBy from '../../components/CustomSortBy';
import './Pokedex.css';
import { Box } from '@mui/material';
import CustomRefinementList from '../../components/CustomRefinementList';
import { algoliasearch } from 'algoliasearch';
import SearchBar from '../../components/SearchBar';
import CustomHits from '../../components/CustomHits';

const searchClient = algoliasearch(process.env.REACT_APP_ALGOLIA_APP_ID, process.env.REACT_APP_ALGOLIA_API_KEY);

const Pokedex = () => {
  const [isPokemonCardFocused, setIsPokemonCardFocused] = useState(false);

  const onPokemonCardFocused = (pokemonId) => {
    
    setIsPokemonCardFocused(!isPokemonCardFocused);
  };

  return (
    <Box className="pokedex-container">
      <InstantSearch searchClient={searchClient} indexName="pokemons">
        <Configure hitsPerPage={40} />
        <SearchBar />
          <ConnectedCustomSortBy
            items={[
              { label: 'Life - Highest to lowest', value: 'pokemons_life_desc' },
              { label: 'Life - Lowest to highest', value: 'pokemons_life_asc' },
              { label: 'Damages - Highest to lowest', value: 'pokemons_damages_desc' },
              { label: 'Damages - Lowest to highest', value: 'pokemons_damages_asc' },
            ]}
          />
        <Box className="search-results">
          <Box className="refinement-list-group">
          <CustomRefinementList attributeName={"types"} title="Types"  />
          <CustomRefinementList attributeName={"life"}  title="Life" />
          <CustomRefinementList attributeName={"damage"} title="Damage" />           
          </Box>
          <Box className="hits-container">
          <CustomHits handleIsPokemonCardFocused={onPokemonCardFocused}/>
          </Box>
        </Box>
      
          <Pagination className="pagination" showPrevious={true} showNext={true} />
      </InstantSearch>
    </Box>
  );
};

export default Pokedex;


