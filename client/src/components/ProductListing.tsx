import React from "react"
import ProductList from "./ProductList"
import AddForm from "./AddForm"
import * as productService from '../services/products'
import { Item } from "../types"

const ProductListing = () => {
  const [addFormClicked, setAddFormClicked] = React.useState<boolean>(false)
  const [products, setProducts] = React.useState<Item[]>([])

  const clickHandler = function() {
    setAddFormClicked(!addFormClicked)
  }

  React.useEffect(() => {
    const getProducts = async function() {
      const products = await productService.fetchProducts()
      setProducts(products)
    }

    getProducts()
  }, [])

  return (
    <main>
      <div className='product-listing'>
        <h2>Products</h2>
        <ProductList products={products}/>
      </div>
      <p>
        <button onClick={clickHandler} className="add-product-button">Add A Product</button>
      </p>
      {addFormClicked && <AddForm onCancel={clickHandler} setProducts={setProducts}/>}
    </main>
  )
}

export default ProductListing
