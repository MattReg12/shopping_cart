import * as endpointService from '../services/products'
import React from "react"
import { Item } from '../types';

interface AddFormProps {
  onCancel: () => void; 
  setProducts: React.Dispatch<React.SetStateAction<Item[]>>
}

const AddForm = function({ onCancel, setProducts }: AddFormProps) {
  const [title, setTitle] = React.useState('')
  const [price, setPrice] = React.useState('')
  const [quantity, setQuantity] = React.useState('')

  const reset = function() {
    setTitle('')
    setPrice('')
    setQuantity('')
  }


  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log(e)
    const response = await endpointService.addProduct(title, price, quantity)
    setProducts((products) => [...products, response])
    reset()
  }
  
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value)
  }

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(e.target.value)
  }
 
  return (
    <div className="add-form">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="product-name">Product Name:</label>
          <input
            type="text"
            id="product-name"
            name="product-name"
            required
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-price">Price:</label>
          <input
            type="number"
            id="product-price"
            name="product-price"
            min="0"
            step="0.01"
            required
            value={price}
            onChange={handlePriceChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-quantity">Quantity:</label>
          <input
            type="number"
            id="product-quantity"
            name="product-quantity"
            min="0"
            required
            value={quantity}
            onChange={handleQuantityChange}
          />
        </div>
        <div className="actions form-actions">
          <button type="submit">Add</button>
          <button onClick={onCancel} type="button">Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default AddForm