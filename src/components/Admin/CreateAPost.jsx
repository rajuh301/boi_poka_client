import React, { useEffect, useState } from "react";
import Navbar from "../shaired/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../shaired/Footer";
import Swal from "sweetalert2";

const CreateAPost = () => {
  const [writer, setWriter] = useState(); // Changed initial state to an empty object
  const [author, setAuthor] = useState(); // Changed initial state to an empty object

  useEffect(() => {
    fetch("http://localhost:5000/writer")
      .then((res) => res.json())
      .then((data) => setWriter(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/author")
      .then((res) => res.json())
      .then((data) => setAuthor(data));
  }, []);

  // -------------------------- Create Post

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/admin";

  const createPost = (event) => {
    event.preventDefault();

    const form = event.target;
    const bookName = form?.bookName.value;
    const bookImage = form?.bookImage.value;
    const bookWriter = form?.bookWriter.value;
    const bookAuthor = form?.bookAuthor.value;
    const category_1 = form?.category_1.value;
    const category_2 = form.category_2.value;
    const category_3 = form.category_3.value;
    const category_4 = form.category_4.value;
    const oldPrice = form?.oldPrice.value;
    const newPrice = form?.newPrice.value;
    const language = form?.language.value;
    const page = form?.page.value;
    const bookDiscription = form.bookDiscription.value;
    const writeBook = form.writeBook.value;

    const createBook = {
      bookName,
      bookImage,
      bookWriter,
      bookAuthor,
      category_1,
      category_2,
      category_3,
      category_4,
      newPrice,
      oldPrice,
      language,
      page,
      bookDiscription,
      writeBook,
    };
    console.log(createBook);

    fetch("http://localhost:5000/bookpost", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(createBook),
    });

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });

    navigate(from, { replace: true });
  };

  // -------------------------- Create Post

  return (
    <div>
      <Navbar></Navbar>

      <div className="flex  ">
        <div className="w-52 block h-full bg-slate-700 text-white px-5 py-64 sticky top-0">
          <Link
            to="/createwriter"
            className="hover:text-green-800 duration-200"
          >
            লেখক তৈরি করুন
          </Link>
          <br />
          <br />
          <Link
            to="/createauthor"
            className="hover:text-green-800 duration-200"
          >
            প্রকাশনী তৈরি করুন
          </Link>
          <br />
          <br />
          <Link to="/createapost" className="hover:text-green-800 duration-200">
            বই পোস্ট করুন
          </Link>
        </div>

        {/* ------------------ Content */}

        <form className="md:w-[700px] mx-auto mb-8" onSubmit={createPost}>
          <h2 className="font-bold text-3xl text-center mt-8 border-b-2 w-72 pb-2 mx-auto">
            বই পোস্ট করুন{" "}
          </h2>
          <div className="flex gap-5 mx-auto mt-10 justify-center px-5">
            <div>
              <label className="mt-2">*বই এর নাম : </label>
              <input
                type="text"
                placeholder="বই এর নাম লিখুন"
                name="bookName"
                className="input input-bordered input-accent w-full max-w-xs"
              />
            </div>

            <div>
              <label className="mt-2">* কভার ইমেজ : </label>

              <input
                type="text"
                placeholder="লিংক দিন"
                name="bookImage"
                className="input input-bordered input-accent w-full max-w-xs"
              />
            </div>
          </div>

          {/* --------------------------------------------------------------------------------------2 */}
          <div className="grid md:grid-cols-2 gap-5 mx-auto justify-center mt-10 px-5">
            <div>
              <label className="mt-2">*লেখক সিলেক্ট করুন : </label>

              <select
                className="select select-bordered w-full max-w-xs"
                name="bookWriter"
              >
                <option disabled selected>
                  লেখক নির্বাচন করুন
                </option>

                {writer?.map((data, index) => {
                  return (
                    <>
                      <option className="" key={index} value={data.name}>
                        {data.name}
                      </option>
                    </>
                  );
                })}
              </select>
            </div>

            <div>
              <label className="mt-2">*প্রকাশনী সিলেক্ট করুন : </label>

              <select
                className="select select-bordered w-full max-w-xs"
                name="bookAuthor"
              >
                <option disabled selected>
                  প্রকাশনী নির্বাচন করুন
                </option>

                {author?.map(
                  (
                    data,
                    index // Removed '.name' from writer?.name?.map(...)
                  ) => (
                    <option key={index} value={data.name}>
                      {" "}
                      {/* Assuming each object has a 'name' property */}
                      {data.name}
                    </option>
                  )
                )}
              </select>
            </div>
          </div>

          {/* ---------------------------------------------------------------------------3 */}
          <div className="grid md:grid-cols-2 gap-5 mx-auto mt-10 px-5">
            <div>
              <label className="mt-2">*ক্যাটাগরি 1 :</label>
              <select
                className="select select-bordered w-full max-w-xs"
                name="category_1"
              >
                <option disabled selected>
                  বইয়ের ধরন নির্বাচন করুন
                </option>

                <option>অনুবাদ গ্রন্থ</option>
                <option>ইংরেজি বই</option>
                <option>ইসলামিক বই</option>
              </select>
            </div>

            <div>
              <label className="mt-2">*ক্যাটাগরি 2 :</label>
              <select
                className="select select-bordered w-full max-w-xs"
                name="category_2"
              >
                <option disabled selected>
                  বইয়ের ধরন নির্বাচন করুন
                </option>

                <option>উপন্যাস</option>
                <option>গল্প</option>
                <option>কবিতা</option>
                <option>প্রবন্ধ</option>
                <option>আত্মজীবনী</option>
                <option>ভ্রমন</option>
                <option>অনুবাদ</option>
              </select>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5 mx-auto mt-10 px-5">
            <div>
              <label className="mt-2">*ক্যাটাগরি 3 :</label>

              <select
                className="select select-bordered w-full max-w-xs"
                name="category_3"
              >
                <option disabled selected>
                  বইয়ের ধরন নির্বাচন করুন
                </option>
                <option>রোমান্টিক</option>
                <option>থ্রিলার</option>
                <option>হরর</option>
                <option>সায়েন্স ফিকশন</option>
                <option>কমিক্স</option>
                <option>কমেডি</option>
                <option>ক্লাসিক</option>
              </select>
            </div>
            <div>
              <label className="mt-2">*ক্যাটাগরি 4 : </label>

              <select
                className="select select-bordered w-full max-w-xs"
                name="category_4"
              >
                <option disabled selected>
                  বইয়ের ধরন নির্বাচন করুন
                </option>
                <option>জনপ্রিয়</option>
                <option>সাধারন</option>
              </select>
            </div>
          </div>

          <div className="flex gap-5 mx-auto mt-10 px-5">
            <div>
              <label className="mt-2">ভাষা : </label>
              <input
                type="text"
                placeholder="ভাষা"
                name="language"
                className="input input-bordered input-accent w-full "
              />
            </div>
            <div>
              <label className="mt-2">পৃষ্ঠা : </label>
              <input
                type="text"
                placeholder="পৃষ্ঠা"
                name="page"
                className="input input-bordered input-accent w-full "
              />
            </div>
          </div>

          <div className="flex  gap-5 mx-auto mt-10 px-5">
            <div>
              <label className="mt-2">পূর্ববর্তী মূল্য : </label>
              <input
                type="text"
                placeholder="পূর্ববর্তী মূল্য"
                name="oldPrice"
                className="input input-bordered input-accent w-full "
              />
            </div>
            <div>
              <label className="mt-2">বর্তমান মূল্য : </label>
              <input
                type="text"
                placeholder="বর্তমান মূল্য"
                name="newPrice"
                className="input input-bordered input-accent w-full "
              />
            </div>
          </div>

          <div className=" mt-10 px-5">
            <div className=" mt-10">
              <label className="mt-2">*পিডিএফ লিংক : </label> <br />
              <input
                className="input input-bordered input-accent w-full"
                placeholder="পিডিএফ লিংক যুক্ত করুন"
                name="writeBook"
                type="text"
              ></input>
            </div>
          </div>

          <div className=" mt-10 px-5">
            <div className=" mt-10">
              <label className="mt-2">*বই এর বিবরণী : </label> <br />
              <textarea
                className="border input-accent w-full"
                placeholder="বই এর সংক্ষিপ্ত বিবরণী লিখুন"
                name="bookDiscription"
                id=""
                cols="60"
                rows="5"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <input type="submit" className="btn btn-outline btn-success" />
          </div>
        </form>

        {/* ------------------ Content */}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default CreateAPost;
