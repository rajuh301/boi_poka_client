
import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Removed useLocation
import Navbar from "../shaired/Navbar";
import Footer from "../shaired/Footer";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
const img_hosting_token = import.meta.env.VITE_Image_Uplode_token;

const CreateWriter = () => {

  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;




  const navigate = useNavigate();

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
          const { name, category, bio } = data;
          const newItem = { name, category, bio, photo: imgURL };

          axiosSecure.post('/writer', newItem)
            .then((data) => {
              if (data.data.insertedId) {
                reset();
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Writer added successfully',
                  showConfirmButton: false,
                  timer: 1500,
                });

                navigate("/admin", { replace: true });
              }
            });
        }
      });

  };
  // --------------------------------------------



  return (
    <div>
      <Navbar></Navbar>

      <div className="flex">
        <div className="w-52 block h-full bg-slate-700 text-white px-5 py-64 ">
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


        <div className="md:mx-auto mt-5 border p-5 my-5">

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text font-semibold">লেখক এর নাম*</span>
              </label>
              <input type="text" placeholder="লেখক এর নাম"
                {...register("name", { required: true, maxLength: 120 })}
                className="input input-bordered w-full " />
            </div>

            <div className="form-control w-full my-4">
              <label className="label">
                <span className="label-text">লেখক এর ফটো*</span>
              </label>
              <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
            </div>


            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text font-semibold">লেখক পরিচিতি</span>
              </label>
              <select {...register("category", { required: true })}
                className="select select-bordered w-full max-w-xs"
                name="category"
              >
                <option disabled selected>
                  পরিচিতি নির্বাচন করুন
                </option>
                <option>সাধারণ</option>
                <option>জনপ্ৰিয়</option>
              </select>
            </div>


            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text font-semibold">লেখক এর জীবন বৃত্তান্ত দিন*</span>
              </label>
              <input type="text" placeholder="লেখক এর নাম"
                {...register("bio", { required: true, maxLength: 1200 })}
                className="input input-bordered w-full " />
            </div>



            <input className="btn mt-4 btn-outline  " type="submit" value="লেখক যোগ করুন" />
          </form>

        </div>

        {/* ------------------ Content */}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default CreateWriter;
