import { Item as ItemType } from '../types/index'
import Item from './Item'
import CheckoutButton from './CheckoutButton'

interface CartProps {
  items: ItemType[]
}

const Cart = ({ items }: CartProps) => {
  return (
    <div className='cart'>
      <h2>Your Cart</h2>
      <table className="cart-items">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => {
            return (
              <Item quantity={item.quantity} price={item.price} title={item.title}/>
            )
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} className="total">Total: $729.98</td>
          </tr>
        </tfoot>
      </table>
      <CheckoutButton />
    </div>
  )
}

export default Cart

{/* <div class="cart">
//   <h2>Your Cart</h2>
//   <table class="cart-items">
//     <thead>
//       <tr>
//         <th scope="col">Item</th>
//         <th scope="col">Quantity</th>
//         <th scope="col">Price</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <td>Amazon Kindle E-reader</td>
//         <td>2</td>
//         <td>$79.99</td>
//       </tr>
//       <tr>
//         <td>Apple 10.5-Inch iPad Pro</td>
//         <td>1</td>
//         <td>$649.99</td>
//       </tr>
//     </tbody>
//     <tfoot>
//       <tr>
//         <td colspan="3" class="total">Total: $729.98</td>
//       </tr>
//     </tfoot>
//   </table>
//   <div class="checkout-button">
//     <button class="checkout">Checkout</button>
// </div> */}