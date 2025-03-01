import React from 'react'

export function Cartlists(props) {
    const {cart} = props

    

    return (
        <div>
            {
                cart.map((cartItem , cartIndex) => {
                    return(
                        <div className='flex gap-[2vw] m-[3vw] items-center '>
                            <img src={cartItem.img}
                            className='w-[10vw] rounded-lg' alt="" />
                            <p className='font-bold min-w-[8vw]'>{cartItem.name} </p>
                            <p className='max-w-[5vw]'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit..</p>
                            <p>$ {cartItem.price} </p>
                        </div>
                    )
                })
            }
        </div>
    )
}
