import { FaFacebook, FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";
import { Tabs } from "antd";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const BookDetails = () => {
  const bookDetail = useLoaderData();
  console.log("book details dekhun", bookDetail);
  const {
    bookImage,
    bookName,
    bookWriter,
    newPrice,
    bookDiscription,
    writeBook,
  } = bookDetail;
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);

  console.log("amar book data2 ", data2);

  //bio of this writer
  useEffect(() => {
    fetch(`https://boi-poka-server-chi.vercel.app/writers/${bookWriter}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [bookWriter]);

  // popular category book of this writer start

  useEffect(() => {
    fetch(`https://boi-poka-server-chi.vercel.app/bookWriter/${bookWriter}`)
      .then((res) => res.json())
      .then((data2) => setData2(data2));
  }, [bookWriter]);

  // simple category book of this writer start

  useEffect(() => {
    fetch(`https://boi-poka-server-chi.vercel.app/simpleBookWriter/${bookWriter}`)
      .then((res) => res.json())
      .then((data3) => setData3(data3));
  }, [bookWriter]);

  const items = [
    {
      key: "1",
      label: (
        <div className="text-[18px]  font-bold">
          <h2>সার সংক্ষেপ</h2>
        </div>
      ),
      children: <div className="px-4 pb-4">{bookDiscription}</div>,
    },
    {
      key: "2",
      label: (
        <div className="text-[18px] font-bold">
          <h2>লেখক পরিচিতি</h2>
        </div>
      ),
      children: <div className="px-4 pb-4">{data.bio}</div>,
    },
  ];



  // -------------- Add to cart---------------

  const handleAddtoCart = (bookDetail) => {
    const cartItem = {
      data: bookDetail, // Make sure to match the structure with what's used in other parts of your code
    };

    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    const isProductExists = existingCartItems.some(item => item.data._id === cartItem.data._id);

    if (isProductExists) {
      Swal.fire({
        title: 'Error',
        text: 'This book already exists in your cart.',
        icon: 'error',
        confirmButtonText: 'Close',
      });
    } else {
      existingCartItems.push(cartItem);
      localStorage.setItem('cartItems', JSON.stringify(existingCartItems));

      Swal.fire({
        title: 'Added to Cart!',
        text: 'This book has been added to your cart.',
        icon: 'success',
        confirmButtonText: 'Close',
      });
    }
  };



  // -------------- Add to cart---------------










  return (
    <div>
      <div className="flex justify-between  ">
        {/* book details starts */}
        <div className="md:w-9/12 ">
          <div className="flex gap-x-10">
            <div className=" w-5/12 bg-[#7c76761c] ps-12 pe-2 pt-12 pb-4 relative">
              <span className="text-[18px]  font-extrabold border-2 text-[#201212be] border-yellow-600 py-2 px-2 bg-amber-200 absolute right-2">
                <Link to={`/pdfviwer/${writeBook}`}>পড়ে দেখুন</Link>
              </span>
              <img
                className="md:w-96 md:h-[450px] shadow-sm"
                src={bookImage}
                alt=""
              />
              <div className="flex mt-6 justify-center ">
                <p className="me-2"> Share On : </p>
                <p>
                  <a href="">
                    <FaFacebook className="w-[23px] h-[23px] text-[#355496] me-1"></FaFacebook>
                  </a>
                </p>
                <p>
                  <a href="">
                    <FaFacebookMessenger className="w-[23px] h-[23px] text-[#43A2E4] me-1"></FaFacebookMessenger>
                  </a>
                </p>
                <p>
                  <a href="">
                    <FaWhatsapp className="w-[23px] h-[23px] text-[#00800094] me-1"></FaWhatsapp>
                  </a>
                </p>
                <p>
                  <a href="">
                    <AiFillTwitterCircle className="w-[25px] h-[25px] text-[#43A2E4] me-1"></AiFillTwitterCircle>
                  </a>
                </p>
              </div>
            </div>
            <div className="md:w-7/12 mt-4">
              <h1 className="text-2xl  font-extrabold pt-8 pb-4">{bookName}</h1>
              <div className="flex gap-x-8 text-[18px] ">
                <div>
                  <p className="py-2">লেখক</p>
                  <p className="py-2">ক্যাটেগরি</p>
                  <p className="py-2">ভাষা</p>
                  <p className="py-2">পৃষ্ঠা</p>
                  <p className="py-2">মূল্য</p>
                </div>
                <div>
                  <p className="py-2">{bookWriter}</p>
                  <p className="py-2"> উপন্যাস</p>
                  <p className="py-2"> বাংলা</p>
                  <p className="py-2">১২০</p>
                  <p className="py-2">{newPrice}</p>
                </div>
              </div>
              {/* cart section */}
              <div className="mt-8">
                <h2>
                  <button onClick={() => handleAddtoCart(bookDetail)} className="me-8 font-extrabold text-[20px]" href="">
                    কার্টে যুক্ত করুন
                  </button>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    download
                    className="me-8 font-extrabold text-[20px]"
                    href={writeBook}
                  >
                    বইটি কিনুন
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* writer details start */}
        {/* <div className="w-3/12 bg-[#B7B376] py-4 px-2">
          <h1 className="text-center font-bold text-2xl text-black pb-4">
            সাইডবার
          </h1>
          <div className=" bg-white py-4 px-6 ">
            <div className="flex items-center gap-x-4 p-4 mb-2 shadow-lg">
              <div>
                <img
                  className="w-[75px] h-[100px]"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ova1iW7vR6xu63Uvunucf-m7SHC_Lky2Kg&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="text-[14px]">
                <p>দূর নীলিমায়</p>
                <p>আবু তাহের মিয়া</p>
                <p>
                  <del>TK.120</del> TK.150
                </p>
              </div>
            </div>

            <div className="flex items-center gap-x-4 p-4 mb-2 shadow-lg">
              <div>
                <img
                  className="w-[75px] h-[100px]"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ova1iW7vR6xu63Uvunucf-m7SHC_Lky2Kg&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="text-[14px]">
                <p>দূর নীলিমায়</p>
                <p>আবু তাহের মিয়া</p>
                <p>
                  <del>TK.120</del> TK.150
                </p>
              </div>
            </div>

            <div className="flex items-center gap-x-4 p-4 mb-2 shadow-lg">
              <div>
                <img
                  className="w-[75px] h-[100px]"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ova1iW7vR6xu63Uvunucf-m7SHC_Lky2Kg&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="text-[14px]">
                <p>দূর নীলিমায়</p>
                <p>আবু তাহের মিয়া</p>
                <p>
                  <del>TK.120</del> TK.150
                </p>
              </div>
            </div>

            <div className="flex items-center gap-x-4 p-4 mb-2 shadow-lg">
              <div>
                <img
                  className="w-[75px] h-[100px]"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ova1iW7vR6xu63Uvunucf-m7SHC_Lky2Kg&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="text-[14px]">
                <p>দূর নীলিমায়</p>
                <p>আবু তাহের মিয়া</p>
                <p>
                  <del>TK.120</del> TK.150
                </p>
              </div>
            </div>
          </div>
        </div> */}

        <div className="w-3/12 bg-[#B7B376] py-2 px-2 md:h-full ">
          <h1 className="text-center font-bold text-2xl text-black pb-4">
            সাইডবার
          </h1>
          <div className=" bg-white py-2 px-6 ">
            <div className="flex items-center gap-x-4 p-2   shadow-lg">
              <div>
                <img
                  className="w-[75px] h-[100px] "
                  src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/10079/images/aytZTWURk6AKXSwG7jzw_file.jpg"
                  alt=""
                />
              </div>
              <div className="text-[14px]">
                <p>দূর নীলিমায়</p>
                <p>আবু তাহের মিয়া</p>
                <p>
                  <del>TK.120</del> TK.150
                </p>
              </div>
            </div>

            <div className="flex items-center gap-x-2 p-2 shadow-lg">
              <div>
                <img
                  className="w-[75px] h-[100px]"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ova1iW7vR6xu63Uvunucf-m7SHC_Lky2Kg&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="text-[14px]">
                <p>দূর নীলিমায়</p>
                <p>আবু তাহের মিয়া</p>
                <p>
                  <del>TK.120</del> TK.150
                </p>
              </div>
            </div>

            <div className="flex items-center gap-x-2 p-2 shadow-lg">
              <div>
                <img
                  className="w-[75px] h-[100px]"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTzYcpRutcMj4PIpXDOMLjvEwQyyhNgo1k2AZnbud-QE0QzK1RZx6jTU7jdSbW6SCnjv4&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="text-[14px]">
                <p>দূর নীলিমায়</p>
                <p>আবু তাহের মিয়া</p>
                <p>
                  <del>TK.120</del> TK.150
                </p>
              </div>
            </div>

            <div className="flex items-center gap-x-2 p-2 shadow-lg">
              <div>
                <img
                  className="w-[75px] h-[100px]"
                  src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-24942,resizemode-75,msid-98117524/top-trending-products/books/10-best-novels-for-beginners-to-read-this-year.jpg"
                  alt=""
                />
              </div>
              <div className="text-[14px]">
                <p>দূর নীলিমায়</p>
                <p>আবু তাহের মিয়া</p>
                <p>
                  <del>TK.120</del> TK.150
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* book section */}
      <div>
        <div className="flex justify-between mt-16">
          <div className="w-9/12 ">
            <div className=" mx-2 p-8 ">
              {/* summary of book and writer with tab */}
              <div className="w-full bg-[#7c76761c] px-4 mb-8">
                <Tabs defaultActiveKey="1" centered items={items} />
              </div>
              {/* summary of book and writer with tab end */}

              {/* spopular book of this writer section start  */}
              <h5 className="font-bold text-[24px] text-center mb-2">
                লেখকের জনপ্রিয় বই সমূহ
              </h5>

              <div className="grid md:grid-cols-5 gap-x-2 bg-[#7c76761c]">
                {data2?.map((book, index) => {
                  return (
                    <div key={index} className="card md:w-[140px]  my-2 mx-6 ">
                      <Link to={`/bookDetails/${book._id}`}>
                        {" "}
                        <img
                          className="h-48 md:w-64"
                          src={book.bookImage}
                          alt="Shoes"
                        />
                      </Link>

                      <p className="text-center text-[16px] font-bold">
                        {book.bookName}
                      </p>
                      <p className="text-center text-[16px]">
                        {book.bookWriter}
                      </p>
                      <p className="text-center text-[16px]">
                        <del> TK.{book.oldPrice}</del>
                        <span className="font-bold ms-2">
                          TK.{book.newPrice}
                        </span>
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* popular book of this writer section end */}
            {/* other book of this writer section start */}
            <div className=" mx-2 px-8 ">
              <h5 className="font-bold text-[24px] text-center mb-2">
                লেখকের অন্যান্য বই সমূহ
              </h5>
              <div className="grid md:grid-cols-5 gap-x-2 bg-[#7c76761c]">
                {data3?.map((book, index) => {
                  return (
                    <div key={index} className="card md:w-[140px]  my-2 mx-6 ">
                      <Link to={`/bookDetails/${book._id}`}>
                        {" "}
                        <img
                          className="h-48 md:w-64"
                          src={book.bookImage}
                          alt="Shoes"
                        />
                      </Link>

                      <p className="text-center text-[16px] font-bold">
                        {book.bookName}
                      </p>
                      <p className="text-center text-[16px]">
                        {book.bookWriter}
                      </p>
                      <p className="text-center text-[16px]">
                        <del> TK.{book.oldPrice} </del>{" "}
                        <span className="font-bold ms-2">
                          TK.{book.newPrice}
                        </span>
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* other books of this writer section end */}
          </div>

          {/* bottom sidebar start */}
          <div className="w-3/12 bg-[#B7B376] py-2 px-2 md:h-full mt-8">
            <h1 className="text-center font-bold text-2xl text-black pb-4">
              সাইডবার
            </h1>
            <div className=" bg-white py-2 px-6 ">
              <div className="flex items-center gap-x-4 p-2   shadow-lg">
                <div>
                  <img
                    className="w-[75px] h-[100px] "
                    src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/10079/images/aytZTWURk6AKXSwG7jzw_file.jpg"
                    alt=""
                  />
                </div>
                <div className="text-[14px]">
                  <p>দূর নীলিমায়</p>
                  <p>আবু তাহের মিয়া</p>
                  <p>
                    <del>TK.120</del> TK.150
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-x-2 p-2 shadow-lg">
                <div>
                  <img
                    className="w-[75px] h-[100px]"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ova1iW7vR6xu63Uvunucf-m7SHC_Lky2Kg&usqp=CAU"
                    alt=""
                  />
                </div>
                <div className="text-[14px]">
                  <p>দূর নীলিমায়</p>
                  <p>আবু তাহের মিয়া</p>
                  <p>
                    <del>TK.120</del> TK.150
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-x-2 p-2 shadow-lg">
                <div>
                  <img
                    className="w-[75px] h-[100px]"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTzYcpRutcMj4PIpXDOMLjvEwQyyhNgo1k2AZnbud-QE0QzK1RZx6jTU7jdSbW6SCnjv4&usqp=CAU"
                    alt=""
                  />
                </div>
                <div className="text-[14px]">
                  <p>দূর নীলিমায়</p>
                  <p>আবু তাহের মিয়া</p>
                  <p>
                    <del>TK.120</del> TK.150
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-x-2 p-2 shadow-lg">
                <div>
                  <img
                    className="w-[75px] h-[100px]"
                    src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-24942,resizemode-75,msid-98117524/top-trending-products/books/10-best-novels-for-beginners-to-read-this-year.jpg"
                    alt=""
                  />
                </div>
                <div className="text-[14px]">
                  <p>দূর নীলিমায়</p>
                  <p>আবু তাহের মিয়া</p>
                  <p>
                    <del>TK.120</del> TK.150
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
