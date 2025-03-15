import { useState } from 'react'
import { Header } from '../Components/Header'
import { Items } from '../Components/Items'
import { Cartlists } from '../Components/Cartlists'
import { products } from '../utils/constant'

function Home() {
  
  const [cart, setCart] = useState([])
  console.log(cart);
  

  const addToCart = (data) => {
    setCart([...cart , data])
    
  }

  return (
    <div>
      <Header count = {cart.length}/>
      <Cartlists cart = {cart}/>
      <Items product={products} addToCart = {addToCart}/>
    </div>
  )
}

export default Home ;
