import React from "react"
import ProductList from "./ProductList"
import { Item } from "../types"
import AddForm from "./AddForm"

interface ProductListingProp {
  products: Item[]
}

const ProductListing = ({products}: ProductListingProp) => {
  const [addFormClicked, setAddFormClicked] = React.useState(false)

  const clickHandler = function() {
    setAddFormClicked(!addFormClicked)
  }

  return (
    <main>
      <div className='product-listing'>
        <h2>Products</h2>
        <ProductList products={products}/>
      </div>
      <p>
        <button onClick={clickHandler} className="add-product-button">Add A Product</button>
      </p>
      {addFormClicked && <AddForm onCancel={clickHandler}/>}
    </main>
  )
}

export default ProductListing
