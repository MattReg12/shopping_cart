import React from "react"
import ProductList from "./ProductList"
import AddForm from "./AddForm"
import * as productService from '../services/products'
import { Item } from "../types"

const ProductListing = () => {
  const [showForm, setShowForm] = React.useState<boolean>(false)
  const [products, setProducts] = React.useState<Item[]>([])

  const handleToggleForm = function() {
    setShowForm(!showForm)
  }

  const handleEditProduct = function(item: Item) {
    const itemIndex: number = products.findIndex(product => product.id == item.id)
    const newProducts = [...products]
    if (itemIndex !== -1) {
      newProducts[itemIndex] = item
      setProducts(newProducts)
    }
  }

  const handleDeleteProduct = async function(id: string) {
    await productService.deleteProduct(id)
    const itemIndex: number = products.findIndex(product => product.id == id)
    const newProducts = [...products]
    newProducts.splice(itemIndex, 1)
    setProducts(newProducts)
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
        <ProductList onEdit={handleEditProduct} products={products} onDelete={handleDeleteProduct}/>
      </div>
      <p>
        <button onClick={handleToggleForm} className="add-product-button">Add A Product</button>
      </p>
      {showForm && <AddForm onCancel={handleToggleForm} setProducts={setProducts}/>}
    </main>
  )
}

export default ProductListing
