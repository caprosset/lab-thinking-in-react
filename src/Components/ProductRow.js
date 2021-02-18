import React from 'react'

function ProductRow({ category, price, stocked, name, id }) {
  return (
    <tr>
      <td className={!stocked ? "out-of-stock" : null }>{name}</td>
      <td>{price}</td>
    </tr>
  )
}

export default ProductRow;