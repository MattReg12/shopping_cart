import { Item } from "../types"
import EditForm from "./EditForm"

interface ProductItemProp {
  item: Item
}

const ProductItem = function({item}: ProductItemProp) {
  return (
    <li className="product">
      <div className="product-details">
        <h3>{item.title}</h3>
        <p className="price">{item.price}</p>
        <p className="quantity">{item.quantity}</p>
        <div className="actions product-actions">
          <button className="add-to-cart">Add to Cart</button>
          <button className="edit">Edit</button>
        </div>
        <button className="delete-button"><span>X</span></button>
      </div>
      <EditForm />
    </li>
  )
}

export default ProductItem