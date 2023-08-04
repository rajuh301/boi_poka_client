import React from "react";
import { Link } from "react-router-dom";

const Novel = ({ bookPopular }) => {
  const { bookImage, bookName, _id } = bookPopular;
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
    </div>
  );
};

export default Novel;
