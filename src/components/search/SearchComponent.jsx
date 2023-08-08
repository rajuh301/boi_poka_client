import React from "react";
import { Link } from "react-router-dom";

const SearchComponent = ({ bookPopular }) => {
  const { bookImage, bookName, bookWriter, _id, oldPrice, newPrice } =
    bookPopular;
  return (
    <div className="card md:w-[200px] bg-base-100 mt-8 ">
      <Link to={`/bookDetails/${_id}`}>
        <img className="h-60 md:w-64" src={bookImage} alt="Shoes" />
      </Link>

      <p className="text-center text-[16px] font-bold">{bookName}</p>
      <p className="text-center text-[16px]">{bookWriter}</p>
      <p className="text-center text-[16px]">rating (42)</p>
      <p className="text-center text-[16px] text-[green]">Product in stock</p>
      <p className="text-center text-[16px]">
        <del> TK.{oldPrice} </del>{" "}
        <span className="font-bold ms-2">TK.{newPrice}</span>
      </p>
    </div>
  );
};

export default SearchComponent;
