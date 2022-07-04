import React from 'react'
import './Filter.scss'

const Filter = ({ categories, filterItems}) => {
  return (
    <div className='btn-container'>
   {categories.map((category, index)=> {
    return (
    <button 
    type='button'
    className='filter-btn'
    key={index}
    onClick={() => filterItems(category)}
    >
    {category}
    </button>
    );
   })}
    </div>
  )
}

export default Filter