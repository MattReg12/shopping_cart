import { Item } from "../types"
import EditForm from "./EditForm"
import React from "react"
 
interface ProductItemProp {
  item: Item
}

const ProductItem = function({item}: ProductItemProp) {
  const [editClicked, setEditClicked] = React.useState(false)

  const handleClick = () => {
    setEditClicked(!editClicked)
  }

  return (
    <li className="product">
      <div className="product-details">
        <h3>{item.title}</h3>
        <p className="price">{item.price}</p>
        <p className="quantity">{item.quantity}</p>
        <div className="actions product-actions">
          <button className="add-to-cart">Add to Cart</button>
          <button className="edit" onClick={handleClick}>Edit</button>
        </div>
        <button className="delete-button"><span>X</span></button>
      </div>
      {editClicked && <EditForm item={item} onHandleCancel={handleClick}/>}
    </li>
  )
}

export default ProductItem