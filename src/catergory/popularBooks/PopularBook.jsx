import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const PopularBook = ({ bookPopular }) => {
  const { bookImage, bookName, _id, rating, bookWriter, newPrice, oldPrice } =
    bookPopular;
  return (
    <div className="card md:w-[175px] bg-base-100 ">
      <Link to={`/bookDetails/${_id}`}>
        <img
          className="h-60 md:w-48 w-96 mb-2"
          src={
            bookImage
              ? bookImage
              : "https://clipart-library.com/images/6Tpo6G8TE.jpg"
          }
          alt="Shoes"
        />
      </Link>

      <p className="text-center text-[15px] mb-[-4px]">{bookName}</p>
      <p className="text-center text-[15px] text-gray-500">{bookWriter}</p>
      <p className="text-center text-[15px]  relative">
        <Rating
          className="text-yellow-300"
          placeholderRating={rating}
          emptySymbol={<AiOutlineStar />}
          placeholderSymbol={<FaStar />}
          fullSymbol={<FaStar />}
        />
        <span className="absolute top-[-3px] text-[13px]">({rating})</span>
      </p>
      <p className="font-bold text-center mt-[-5px]">
        <del>TK.{oldPrice}</del> <span className="ms-2">TK.{newPrice}</span>
      </p>
    </div>
  );
};

export default PopularBook;
