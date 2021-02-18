import React, { useState } from 'react'
import CheckBox from './CheckBox';

function Searchbar({ searchProduct, onClick }) {
  const [ state, setState ] = useState('');

  const handleChange = ({ target }) => {
    let query = target.value;
    setState(query);
    searchProduct(query);
  }

  return (
    <form className="search-bar">
      <label htmlFor="search">Search</label>
      <input 
        type="text" 
        name="search"
        placeholder="Product name..." 
        value={state} 
        onChange={handleChange}
      />

      <CheckBox onClick={onClick} />
    </form>
  )
}

export default Searchbar;