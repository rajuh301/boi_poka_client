import React from 'react';

const TranslatedBook = ({bookPopular}) => {
    const {bookImage,bookName,}=bookPopular;
    return (
            <div className="card w-[175px] bg-base-100 ">
                <img className='h-60 w-48'  src={bookImage?bookImage:'https://clipart-library.com/images/6Tpo6G8TE.jpg'} alt="Shoes" />
                
                
                    <p className='text-center text-[18px]'>{bookName}</p>
                
                </div>


                
            );
        };

export default TranslatedBook;