import React, { useState } from 'react'

export function Header(props) {
    const[showCart, setShowCart] = useState(false)
    

    return (
        <div className='flex justify-between items-center p-4 bg-[#f66435] text-[#f4efca] overflow-hidden flex-wrap'>
            <div className='text-3xl font-semibold'>Shopping Cart</div>
            <div className='font-medium' >Cart
                <sup className='pr-2 pl-2 pt-1 pb-1 ml-1 rounded-xl bg-gray-400 hover:bg-gray-300 '>{props.count}</sup>
            </div>
        </div>
    )
}

