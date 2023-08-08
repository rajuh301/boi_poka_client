import React from 'react';

import { useEffect } from 'react';
import { useState } from 'react';
import Navbar from '../components/shaired/Navbar';
import ShowCart from './ShowCart';

const Cart = () => {
    const [cartItems, setCartItems] = useState(null);

    useEffect(() => {
        const localStorageData = JSON.parse(localStorage.getItem('cartItems'));
        if (localStorageData) {
            setCartItems(localStorageData);
        }
    }, []);



    return (
        <div>
            <Navbar />
            <div className='md:grid grid-cols-3 md:mx-20 mx-10'>
                {
                    cartItems?.map(cart => <ShowCart
                        key={cart._id}
                        cart={cart}
                    ></ShowCart>)
                }
            </div>



        </div>
    );
};

export default Cart;
