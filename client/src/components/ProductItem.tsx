import { Item } from "../types"
import EditForm from "./EditForm"
import React from "react"
 
interface ProductItemProp {
  item: Item
  onEdit: (item:Item) => void
  onDelete: (id:string) => void
}

const ProductItem = function({onEdit, onDelete, item}: ProductItemProp) {
  const [showForm, setShowForm] = React.useState(false)

  const handleShowForm = () => {
    setShowForm(!showForm)
  }

  const handleDelete = async () => {
    onDelete(item._id as string)
  }

  return (
    <li className="product">
      <div className="product-details">
        <h3>{item.title}</h3>
        <p className="price">{item.price}</p>
        <p className="quantity">{item.quantity}</p>
        <div className="actions product-actions">
          <button className="add-to-cart">Add to Cart</button>
          <button className="edit" onClick={handleShowForm}>Edit</button>
        </div>
        <button className="delete-button" onClick={handleDelete}><span>X</span></button>
      </div>
      {showForm && <EditForm onEdit={onEdit} item={item} onHandleCancel={handleShowForm}/>}
    </li>
  )
}

export default ProductItem