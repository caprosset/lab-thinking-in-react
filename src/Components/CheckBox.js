import React from 'react'

function CheckBox({ onClick }) {
  return (
    <div>
      <input type="checkbox" name="stock-checkbox" onClick={onClick} />
      <label htmlFor="stock-checkbox">Only show products in stock</label>
    </div>
  )
}

export default CheckBox;