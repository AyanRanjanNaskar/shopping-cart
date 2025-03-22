import React, { useState } from 'react'
import { Link } from 'react-router';

function Header(props) {
    const[showCart, setShowCart] = useState(false)
    return (
        <div className='flex justify-between items-center p-4 bg-blue-300 overflow-hidden flex-wrap'>
            <Link to="/">
                <div className='text-3xl font-semibold text-primary'>Shopping Cart</div>
            </Link>
            <Link to="/cart">
                <div className='font-medium cursor-pointer'>Cart
                    <sup className='pr-2 pl-2 pt-1 pb-1 ml-1 rounded-xl bg-gray-400 hover:bg-gray-300 '>
                        {props.count}
                    </sup>
                </div>
            </Link>
        </div>
    )
}

export default Header;

