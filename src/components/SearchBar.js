import { Box } from '@mui/material'
import React from 'react'
import { SearchBox } from 'react-instantsearch'
import './SearchBar.css'

const SearchBar = () => {
  return (
   <>
     <Box className="search-controls">
          <SearchBox className="search-box" placeholder="Search" />
        </Box>
   </>
  )
}

export default SearchBar;
