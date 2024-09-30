import { Item } from "../types"
import ProductItem from "./ProductItem"

interface ProductListProp {
  products: Item[]
  onEdit: (item:Item) => void
  onDelete: (id:string) => void
}

const ProductList = ({onDelete, products, onEdit}: ProductListProp) => {
  return (
    <ul className="product-list">
      {products.map(product => {
        return (
          <ProductItem onDelete={onDelete} onEdit={onEdit} key={product.id} item={product}/>
        )
      })}
    </ul>
  )
}

export default ProductList
