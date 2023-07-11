import React from 'react';

const MotivationalBook = ({bookPopular}) => {
    const {bookImage,bookName,}=bookPopular;
    return (
            <div className="card md:w-[175px] bg-base-100 ">
  <img className='h-60 md:w-48 w-96'  src={bookImage?bookImage:'https://clipart-library.com/images/6Tpo6G8TE.jpg'} alt="Shoes" />
  
   
    <p className='text-center text-[18px]'>{bookName}</p>
 
</div>


        
    );
};

export default MotivationalBook;