import Cart from './Cart'
import NoItemCart from './NoItemCart';

const ShopHeader = () => {
  const mockCart = [
    {
      _id: "1",
      title: "Amazon Kindle E-reader",
      quantity: '1',
      price: '79.99',
    },
    {
      _id: "2",
      title: "Apple 10.5-Inch iPad Pro",
      quantity: '3',
      price: '649.99',
    },
  ];

  const items = []

  return (
    <header>
      <h1>The Shop!</h1>
      {items.length > 1 ? <Cart items={mockCart} /> : <NoItemCart/> }
    </header>
  )
}

export default ShopHeader


// <header>
// <h1>The Shop!</h1>
// <div class="cart">
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
// </div>
// </header>