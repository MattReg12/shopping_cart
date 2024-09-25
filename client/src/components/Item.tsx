interface ItemProps {
  title: string,
  quantity: string,
  price: string
}

const CartItem = function({ title, quantity, price} : ItemProps) {
  return(
    <tr>
      <td>{title}</td>
      <td>{quantity}</td>
      <td>{price}</td>
    </tr>
  )
}

export default CartItem;