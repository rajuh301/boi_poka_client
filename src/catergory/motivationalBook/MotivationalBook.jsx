import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const MotivationalBook = ({ bookPopular }) => {
  const { bookImage, bookName, _id, bookWriter, rating } = bookPopular;
  return (
    <div className="card md:w-[175px] bg-base-100 ">
      <Link to={`/bookDetails/${_id}`}>
        <img
          className="h-60 md:w-48 w-96"
          src={
            bookImage
              ? bookImage
              : "https://clipart-library.com/images/6Tpo6G8TE.jpg"
          }
          alt="Shoes"
        />
      </Link>

      <p className="text-center text-[18px]">{bookName}</p>
      <p className="text-center text-[18px]">{bookWriter}</p>
      <p className="text-center text-[18px]">
        <Rating
          className="text-yellow-300"
          placeholderRating={rating}
          emptySymbol={<AiOutlineStar />}
          placeholderSymbol={<FaStar />}
          fullSymbol={<FaStar />}
        />
        <span className="mb-[30px]">({rating})</span>
      </p>
    </div>
  );
};

export default MotivationalBook;
