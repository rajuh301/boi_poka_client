import React from "react";
import Navbar from "../shaired/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../shaired/Footer";
import Swal from "sweetalert2";

const CreateAuthor = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/admin";

  const handleAddauthor = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const bio = form.bio.value;

    const addWriter = { name, bio };
    console.log(addWriter);

    fetch("http://localhost:5000/author", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addWriter),
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

  return (
    <div>
      <Navbar></Navbar>

      <div className="flex ">
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

        <div className="mx-auto">
          <form onSubmit={handleAddauthor} className="my-5">
            <label htmlFor="name">* প্রকোশক এর নাম</label>
            <br />
            <input
              type="text"
              placeholder="নাম লিখুন"
              name="name"
              className="input input-bordered input-accent w-full max-w-xs"
            />

            <br />
            <br />

            <label htmlFor="name">* প্রকোশক এর বৃত্তান্ত দিন</label>
            <br />
            <textarea
              className="border rounded py-2 px-2"
              placeholder="বৃত্তান্ত লিখুন"
              name="bio"
              id=""
              cols="60"
              rows="5"
            ></textarea>

            <br />

            <input type="submit" className="btn btn-success" />
          </form>
        </div>

        {/* ------------------ Content */}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default CreateAuthor;
