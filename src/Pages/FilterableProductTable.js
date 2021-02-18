import React, { useState } from 'react';

import Searchbar from './../Components/SearchBar';
import ProductTable from './../Components/ProductTable';

function FilterableProductTable({ products }) {
  const [ search, setSearch ] = useState('');
  const [ inStock, setInStock ] = useState(false);

  const handleSearch = (product) => setSearch(product);
  const isStocked = (e) => setInStock(!inStock);
  
  return (
    <div className="container">
      <h1>IronStore</h1>
      <Searchbar searchProduct={handleSearch} onClick={isStocked} />
      <ProductTable products={products} searchQuery={search} inStock={inStock} />
    </div>
  )
}

export default FilterableProductTable;