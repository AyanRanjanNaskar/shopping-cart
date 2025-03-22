import { useContext, useState } from 'react'
import Header from '../Components/Header';
import Items from '../Components/Items';
import Products from '../constants';
import { MainContext } from '../ContextProvider';

function Home() {
  const { cart, addToCart } = useContext(MainContext);
  return (
    <div>
      <Header count = {cart.length} />
      <Items product={Products} addToCart = {addToCart}/>
    </div>
  )
}

export default Home
