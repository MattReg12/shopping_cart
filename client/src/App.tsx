import './App.css'
import ShopHeader from './components/ShopHeader'
import './components/ProductList'
import ProductListing from './components/ProductListing'
import { Item } from './types'

function App() {
  const mockProducts: Item[] = [
    {
      _id: "1",
      title: "Amazon Kindle E-reader",
      quantity: '5',
      price: '79.99',
    },
    {
      _id: "2",
      title: "Apple 10.5-Inch iPad Pro",
      quantity: '0',
      price: '649.99',
    },
    {
      _id: "3",
      title: "Yamaha Portable Keyboard",
      quantity: '2',
      price: '155.99',
    },
    {
      _id: "4",
      title: "Tinker, Tailor, Soldier, Spy - A John le Carre Novel",
      quantity: '12',
      price: '13.74',
    },
  ];

  return (
    <div id='app'>
      <ShopHeader />
      <ProductListing products={mockProducts}/>
    </div>
  )
}

export default App
