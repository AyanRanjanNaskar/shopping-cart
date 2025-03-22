import { useParams } from "react-router";
import Products from "../constants";
import Header from "../Components/Header";
import { useContext } from "react";
import { MainContext } from "../ContextProvider";

function ProductPage() {
  const { cart, addToCart } = useContext(MainContext);
  let { productId } = useParams();
  // const product = Products.find(p => p.id === productId);
  let productItem;
  Products.forEach((val) => {
    if (val.id === Number(productId)) {
      productItem = val;
    }
  });

  return (
    <div>
      <Header count={cart.length} />
      <div className="flex justify-center">
        <div className='w-[50vw] shadow-2xl pl-6 pr-6 pt-8 rounded'>
            <img src={productItem.img} 
            className="w- object-cover rounded-lg mb-6"
            alt="" />
            <p className='font-semibold text-xl overflow-hidden text-ellipsis'>iD : {productId}</p>
            <p className='font-semibold text-xl overflow-hidden text-ellipsis'>Name: {productItem.name}</p>
            <p className='mb-4'>Price: ${productItem.price}</p>
            <button className='cursor-pointer pt-2 pb-2 pl-2 pr-2 bg-yellow-400 hover:bg-yellow-300 duration-200 rounded mb-4' onClick={(event) => addToCart(event, productItem)}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
export default ProductPage;