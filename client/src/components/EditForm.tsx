import { Item } from "../types";
import React from "react";
import * as productService from '../services/products'

interface EditFormProps {
  onHandleCancel: () => void; 
  item: Item
  onEdit: (item:Item) => void
}

const EditForm = function({ onEdit, item, onHandleCancel }: EditFormProps)  {
  const [title, setTitle] = React.useState(item.title)
  const [price, setPrice] = React.useState(item.price)
  const [quantity, setQuantity] = React.useState(item.quantity)
  
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value)
  }

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(e.target.value)
  }
  
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const newItem = await productService.updateProduct(item._id as string, title, price, quantity)
    onEdit(newItem)
  }

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={title}
            onChange={handleTitleChange}
            aria-label="Product Name"
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            type="number"
            id="product-price"
            value={price}
            onChange={handlePriceChange}
            aria-label="Product Price"
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="number"
            id="product-quantity"
            value={quantity}
            onChange={handleQuantityChange}
            aria-label="Product Quantity"
          />
        </div>

        <div className="actions form-actions">
          <button type="submit">Update</button>
          <button type="button" onClick={onHandleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default EditForm