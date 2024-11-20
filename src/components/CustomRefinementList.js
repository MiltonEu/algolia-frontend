import React from 'react'
import { RefinementList  } from 'react-instantsearch';
import './CustomRefinementList.css';

const CustomRefinementList = (props) => {
  return (
    <>
    <h2 className='filter-title'>{props.title}</h2>
    <RefinementList attribute={props.attributeName} className="refinement-list" limit={3} showMore={true} showMoreLimit={10} />
    </>
  )
}

export default CustomRefinementList;
