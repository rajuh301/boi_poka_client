import React, { useEffect, useState } from "react";
import Navbar from "../shaired/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../shaired/Footer";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
const img_hosting_token = import.meta.env.VITE_Image_Uplode_token;


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


  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;



  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('image', data.image[0]);

    fetch(img_hosting_url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;


          const {
            bookName,
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
          } = data





          const newItem = { bookName, bookImage: imgURL, bookWriter, bookAuthor, category_1, category_2, category_3, category_4, rating:1, newPrice, oldPrice, language, page, bookDiscription, writeBook };
          console.log(newItem)
          axiosSecure.post('/bookpost', newItem)
            .then((data) => {
              if (data.data.insertedId) {
                reset();
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Book added successfully',
                  showConfirmButton: false,
                  timer: 1500,
                });

                navigate("/admin", { replace: true });
              }
            });
        }
      });
  }

  // ------------------------------------------ update System----------
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

        <form className="md:w-[700px] mx-auto mb-8" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="font-bold text-3xl text-center mt-8 border-b-2 w-72 pb-2 mx-auto">
            বই পোস্ট করুন{" "}
          </h2>
          <div className="flex gap-5 mx-auto mt-10 justify-center px-5">
            <div>
              <label className="mt-2">*বই এর নাম : </label>
              <input
                type="text"
                placeholder="বই এর নাম লিখুন"
                {...register("bookName", { required: true, maxLength: 120 })}
                className="input input-bordered input-accent w-full max-w-xs"
              />
            </div>


            <div className="form-control w-full my-4">
              <label className="label">
                <span className="label-text">কভার ইমেজ :</span>
              </label>
              <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
            </div>


          </div>

          {/* --------------------------------------------------------------------------------------2 */}
          <div className="grid md:grid-cols-2 gap-5 mx-auto justify-center mt-10 px-5">
            <div>
              <label className="mt-2">*লেখক সিলেক্ট করুন : </label>

              <select {...register("bookWriter", { required: true })}
                className="select select-bordered w-full max-w-xs"

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

              <select {...register("bookAuthor", { required: true })}
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
              <select {...register("category_1", { required: true })}
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
              <select {...register("category_2", { required: true })}
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

              <select {...register("category_3", { required: true })}
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

              <select {...register("category_4", { required: true })}
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
              <input {...register("language", { required: true })}
                type="text"
                placeholder="ভাষা"
                className="input input-bordered input-accent w-full "
              />
            </div>

            <div>
              <label className="mt-2">পৃষ্ঠা : </label>
              <input {...register("page", { required: true })}
                type="text"
                placeholder="পৃষ্ঠা"
                className="input input-bordered input-accent w-full "
              />
            </div>
          </div>

          <div className="flex  gap-5 mx-auto mt-10 px-5">
            <div>
              <label className="mt-2">পূর্ববর্তী মূল্য : </label>
              <input {...register("oldPrice", { required: true })}
                type="text"
                placeholder="পূর্ববর্তী মূল্য"
                className="input input-bordered input-accent w-full "
              />
            </div>
            <div>
              <label className="mt-2">বর্তমান মূল্য : </label>
              <input {...register("newPrice", { required: true })}
                type="text"
                placeholder="বর্তমান মূল্য"
                className="input input-bordered input-accent w-full "
              />
            </div>
          </div>

          <div className=" mt-10 px-5">
            <div className=" mt-10">
              <label className="mt-2">*পিডিএফ লিংক : </label> <br />
              <input {...register("writeBook", { required: true })}
                className="input input-bordered input-accent w-full"
                placeholder="পিডিএফ লিংক যুক্ত করুন"
                type="text"
              ></input>
            </div>
          </div>

          <div className=" mt-10 px-5">
            <div className=" mt-10">
              <label className="mt-2">*বই এর বিবরণী : </label> <br />
              <textarea {...register("bookDiscription", { required: true })}
                className="border input-accent w-full"
                placeholder="বই এর সংক্ষিপ্ত বিবরণী লিখুন"
                id=""
                cols="60"
                rows="5"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <input className="btn mt-4 btn-outline " type="submit" value="বই যোগ করুন" />
          </div>
        </form>

        {/* ------------------ Content */}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default CreateAPost;
