import React from 'react'
import Searchcss from './SearchBar.module.css'
const SearchBar = () => {
  return (
    <div className={Searchcss.container}> 
    
        <input type="text" placeholder='Search Here' />
        <button> Search </button>
    </div>
  )
}

export default SearchBar