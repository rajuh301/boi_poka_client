import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const WriterDetails = () => {
  const writerDetails = useLoaderData();
  const { photo, name, bio } = writerDetails;
  const [data, setData] = useState([]);
  console.log("book data ", data);
  useEffect(() => {
    fetch(`http://localhost:5000/bookpost/${name}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [name]);

  return (
    <div className="flex flex-col md:flex-row gap-x-8 md:p-8  lg:p-8  ">
      <div className="md:w-[150px] lg:w-[150px]  ps-2 md:text-start text-center my-4">
        <h5 className="font-bold text-[20px]">ক্যাটেগরি</h5>
        <div className="mb-12">
          <ul className="">
            <li>
              <Link to="/novel">উপন্যাস</Link>
            </li>
            <li>
              <Link to="/story">গল্প</Link>
            </li>
            <li>
              <Link to="/poem">কবিতা</Link>
            </li>
            <li>
              <Link to="/probondho">প্রবন্ধ</Link>
            </li>
            <li>
              <Link to="/biography">আত্মজীবনী</Link>
            </li>
            <li>
              <Link to="/travel">ভ্রমন</Link>
            </li>
            <li>
              <Link to="/translated">অনুবাদ</Link>
            </li>
            <li>
              <Link to="/comics">কমিক্স</Link>
            </li>
          </ul>
        </div>
        <h5 className="font-bold text-[20px]">বইয়ের ধরন</h5>
        <div>
          <ul className="">
            <li>
              <Link to="/romantic">রোমান্টিক</Link>
            </li>
            <li>
              <Link to="/thriler">থ্রিলার</Link>
            </li>
            <li>
              <Link to="/horor">হরর</Link>
            </li>
            <li>
              <Link to="/probondho">প্রবন্ধ</Link>
            </li>
            <li>
              <Link to="/scienceFiction">সায়েন্স ফিকশন</Link>
            </li>
            <li>
              <Link to="/motivational">মোটিভেশনাল</Link>
            </li>
            <li>
              <Link to="/comedy">কমেডি</Link>
            </li>
            <li>
              <Link to="/classic">ক্লাসিক</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className=" shadow-inner w-full">
        <div className="flex  gap-x-8 p-6 bg-[#FEF6EB] mb-5 shadow-xl mx-2  ">
          <div className="md:w-36">
            <img
              className="rounded-full w-[100px] h-[100px]"
              src={photo}
              alt=""
            />
            <p>
              <span className="font-bold md:text-[17px] text-[14px]">133</span>{" "}
              followers
            </p>
            <button className=" w-[95px] h-[30px] bg-[#059BC8] mt-2 text-white">
              Follow
            </button>
          </div>
          <div className="md:ms-[-10px]  ">
            <h5 className="font-bold text-[20px]">{name}</h5>
            <p className="">{bio}</p>
          </div>
        </div>
        <div className="shadow-xl mx-2 p-8 ">
          <h5 className="font-bold text-[24px]">{name} এর বই সমূহ</h5>
          <div className="grid md:grid-cols-4">
            {data?.map((book, index) => {
              return (
                <div
                  key={index}
                  className="card md:w-[200px] bg-base-100 mt-8 "
                >
                  <Link to={`/bookDetails/${book._id}`}>
                    {" "}
                    <img
                      className="h-60 md:w-64"
                      src={book.bookImage}
                      alt="Shoes"
                    />
                  </Link>

                  <p className="text-center text-[16px] font-bold">
                    {book.bookName}
                  </p>
                  <p className="text-center text-[16px]">{book.bookWriter}</p>
                  <p className="text-center text-[16px]">rating (42)</p>
                  <p className="text-center text-[16px] text-[green]">
                    Product in stock
                  </p>
                  <p className="text-center text-[16px]">
                    <del> TK.120 </del>{" "}
                    <span className="font-bold ms-2">TK.{book.bookPrice}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriterDetails;
