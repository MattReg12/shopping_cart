import { Item } from "../types"
import ProductItem from "./ProductItem"

interface ProductListProp {
  products: Item[]
}

const ProductList = ({products}: ProductListProp) => {
  return (
    <ul className="product-list">
      {products.map(product => {
        return (
          <ProductItem key={product.id} item={product}/>
        )
      })}
    </ul>
  )
}

export default ProductList

{/* <ul class="product-list">


<li class="product">
  <div class="product-details">
    <h3>Apple 10.5-Inch iPad Pro</h3>
    <p class="price">$649.99</p>
    <p class="quantity">2 left in stock</p>
    <div class="actions product-actions">
      <button class="add-to-cart">Add to Cart</button>
      <button class="edit">Edit</button>
    </div>
    <button class="delete-button"><span>X</span></button>
  </div>
</li>

<li class="product">
  <div class="product-details">
    <h3>Yamaha Portable Keyboard</h3>
    <p class="price">$155.99</p>
    <p class="quantity">0 left in stock</p>
    <div class="actions product-actions">
      <button class="add-to-cart" disabled>Add to Cart</button>
      <button class="edit">Edit</button>
    </div>
    <button class="delete-button"><span>X</span></button>
  </div>
</li>
</ul> */}