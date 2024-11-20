import React, { useState, useEffect, useRef } from 'react';
import { useSortBy } from 'react-instantsearch';
import FilterListIcon from '@mui/icons-material/FilterList';
import './CustomSortBy.css';
import { Box } from '@mui/material';

function CustomSortBy(props) {
  const {
    options,
    refine,
  } = useSortBy(props);

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      console.log(dropdownRef.current);
      
      console.log(event)
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    if (isDropdownVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownVisible]);

  return (
    <Box className="custom-sort-by">
        <Box className="sort-by-button">
      <button onClick={handleToggleDropdown} className="sort-by-button">
        <span className="filter-text">Filter by</span>
        <FilterListIcon />
      </button>
            
            </Box>
      {isDropdownVisible && (
        <Box className='button-group'  ref={dropdownRef}>
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
               console.log(option.value);
                refine(option.value);
                setDropdownVisible(false);
              }}
              className="sort-by-option"
            >
              <p>{option.label}</p>
            </button>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default CustomSortBy;
