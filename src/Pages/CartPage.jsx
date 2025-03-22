import { useContext } from "react";
import Cartlists from "../Components/Cartlists";
import { MainContext } from "../ContextProvider";
import Header from "../Components/Header";

function CartPage() {
  const { cart } = useContext(MainContext);
  
  return (
    <div>
      <Header count = {cart.length} />
      <Cartlists cart = {cart}/>
    </div>
  )
}

export default CartPage;