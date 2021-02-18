import React from 'react';
import ProductRow from './ProductRow';

function ProductTable({ products, searchQuery, inStock }) {
  return (
    <div>
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody className="product-table-body">
          { products
            .filter(product => {
              if(inStock) {
                return product.name.toLowerCase().includes(searchQuery.toLowerCase()) && product.stocked;
              }
              return product.name.toLowerCase().includes(searchQuery.toLowerCase())
            })
            .map(product => <ProductRow key={product.id} {...product} /> )
          }
        </tbody>
      </table>
    </div>
  )
}

export default ProductTable;