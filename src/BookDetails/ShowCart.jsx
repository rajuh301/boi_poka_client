import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const ShowCart = ({ cart }) => {
    console.log(cart)




    const [cartItems, setCartItems] = useState(null);

    useEffect(() => {
        const localStorageData = JSON.parse(localStorage.getItem('cartItems'));
        if (localStorageData) {
            setCartItems(localStorageData);
        }
    }, []);

    const handleDelete = (data) => {
        const localDataToDeleteId = data._id;

        setCartItems((prevItems) =>
            prevItems.filter((item) => item.data._id !== localDataToDeleteId)
        );

        const localStorageData = JSON.parse(localStorage.getItem('cartItems'));
        if (localStorageData) {
            const updatedData = localStorageData.filter(
                (item) => item.data._id !== localDataToDeleteId
            );
            localStorage.setItem('cartItems', JSON.stringify(updatedData));
        }

        Swal.fire({
            icon: 'success',
            title: 'Item Deleted',
            text: 'The item has been successfully deleted from your cart.',

        });
    };



    return (



        <div className='my-5 gap-5'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className='w-full h-72' src={cart.data.bookImage} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{cart.data.bookName}</h2>
                    <div className="card-actions justify-end ">
                        <button onClick={() => handleDelete(cart.data)} className="btn btn-primary hover:bg-red-700">মুছে ফেলুন</button>
                        <a href={cart.data.writeBook} className="btn btn-primary hover:bg-green-800">বইটি কিনুন</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ShowCart;