import React from 'react'
import { Link } from 'react-router';

function Items({product, addToCart}) {
    return (
        <div className=' h-screen flex flex-wrap gap-20 justify-center items-center'>
            {
                product.map((productItem, productIndex) =>{
                    return(
                        <Link to={"product/"+productItem.id} key={productItem.id} >
                            <div className='lg:w-[17vw] md:w-[30vw] sm:w-[50vw] xs:w-full shadow-2xl pl-6 pr-6 pt-8 rounded'>
                                <img src={productItem.img} 
                                className="w- object-cover rounded-lg mb-6"
                                alt="" />
                                <p className='font-semibold text-xl overflow-hidden text-ellipsis'>iD : {productIndex+1}</p>
                                <p className='font-semibold text-xl overflow-hidden text-ellipsis'>Name: {productItem.name}</p>
                                <p className='mb-4'>Price: ${productItem.price}</p>
                                <button className='pt-2 pb-2 pl-2 pr-2 bg-yellow-400 hover:bg-yellow-300 duration-200 rounded mb-4' onClick={e => addToCart(e, productItem)}>Add to Cart</button>
                            </div>
                        </Link>
                    )
                })
            }
        
        </div>
    )
}


export default Items;