import React, { useEffect, useState } from 'react';
import Navbar from '../shaired/Navbar';
import Footer from '../shaired/Footer';
import { Link, Outlet } from 'react-router-dom';


const AdminHome = () => {

    const [user, setUser] = useState();
    const [books, setBooks] = useState();
    const [writer, setWriter] = useState();
    const [author, setAuthor] = useState();


    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])



    useEffect(() => {
        fetch('http://localhost:5000/bookpost')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])


    useEffect(() => {
        fetch('http://localhost:5000/writer')
            .then(res => res.json())
            .then(data => setWriter(data))
    }, [])


    useEffect(() => {
        fetch('http://localhost:5000/author')
            .then(res => res.json())
            .then(data => setAuthor(data))
    }, [])


    // ------------------------ Manag Data ----------------
    const [bookss, setBookss] = useState(null)
    const [writers, setWriters] = useState(null)
    const [authors, setAuthors] = useState(null)

    const handleBook = () => {
        setBookss(books)

    }

    const handleWriter = () => {
        setWriters(writer)

    }

    const handleAuthor = () => {
        setAuthors(author)
    }

    // ------------------------ Manag Data ----------------




    return (
        <div>
            <Navbar></Navbar>



            <div className='flex'>
                <div className='w-52 block h-full bg-slate-700 text-white px-5 py-64 '>

                    <Link to="/createwriter" className='hover:text-green-800 duration-200'>লেখক তৈরি করুন</Link>
                    <br />
                    <br />
                    <Link to='/createauthor' className='hover:text-green-800 duration-200'>প্রকাশনী তৈরি করুন</Link>
                    <br />
                    <br />
                    <Link to="/createapost" className='hover:text-green-800 duration-200'>বই পোস্ট করুন</Link>
                </div>


                {/* ----------- Data */}
                <div>



                    <div className="stats shadow mx-auto h-32 mt-10">

                        <div className="stat place-items-center">
                            <div className="stat-title">Total Author</div>
                            <div className="stat-value">{author?.length}</div>

                        </div>

                        <div className="stat place-items-center">
                            <div className="stat-title">Total Users</div>
                            <div className="stat-value text-secondary">{user?.length}</div>
                            <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                        </div>

                        <div className="stat place-items-center">
                            <div className="stat-title">Total Books</div>
                            <div className="stat-value text-secondary">{books?.length}</div>
                            <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                        </div>

                        <div className="stat place-items-center">
                            <div className="stat-title">Total Writer</div>
                            <div className="stat-value">{writer?.length}</div>

                        </div>

                        {/* ----------------------- Manag Data -------------- */}

                        <div className="stat place-items-center bg-yellow-400">
                            <button onClick={handleWriter} className="stat-title btn btn-outline btn-outline">Writer</button>
                        </div>

                        <div className="stat place-items-center bg-yellow-400">
                            <button onClick={handleBook} className="stat-title btn btn-outline btn-outline">Books</button>
                        </div>

                        <div className="stat place-items-center bg-yellow-400">
                            <button onClick={handleAuthor} className="stat-title btn btn-outline btn-outline">Author</button>
                        </div>

                        {/* ----------------------- Manag Data -------------- */}

                    </div>
                    {/* -----------------------------Show Manag Data-------------------------  */}
                    <div className='ml-10 mt-10'>

                        {bookss ?
                            bookss.map(book => <div
                                key={book._id}
                            ><div>

                                    <div className="overflow-x-auto">
                                        <table className="table border bg-green-400 my-2">
                                            {/* head */}
                                            <thead>

                                            </thead>
                                            <tbody>
                                                {/* row 1 */}
                                                <tr>
                                                    <th>

                                                    </th>
                                                    <td>
                                                        <div className="flex items-center space-x-3">
                                                            <div className="avatar">
                                                                <div className="mask mask-squircle w-12 h-12">
                                                                    <img src={book?.bookImage} alt="Avatar Tailwind CSS Component" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="font-bold">{book?.bookName}</div>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {book?.bookWriter}
                                                        <br />
                                                    </td>
                                                    <td>{book?.bookAuthor}</td>
                                                    <th>
                                                        <button className="btn btn-ghost btn-xs">details</button>
                                                    </th>
                                                </tr>

                                            </tbody>


                                        </table>
                                    </div>

                                </div>

                            </div>) : ""
                        }
                        {/* ------------------------------------------------- Writer--------------------- */}

                        {writers ?
                            writers.map(write => <div
                                key={write._id}
                            ><div>

                                    <div className="overflow-x-auto">
                                        <table className="table border bg-green-400">
                                            {/* head */}
                                            <thead>
                                                {/* <tr>
            <th>

            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
        </tr> */}
                                            </thead>
                                            <tbody>
                                                {/* row 1 */}
                                                <tr>
                                                    <th>

                                                    </th>
                                                    <td>
                                                        <div className="flex items-center space-x-3">
                                                            <div className="avatar">
                                                                <div className="mask mask-squircle w-12 h-12">
                                                                    <img src={write?.photo} alt="Avatar Tailwind CSS Component" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="font-bold">{write?.name}</div>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {write?.category}
                                                        <br />
                                                    </td>

                                                    <th>
                                                        <button className="btn btn-ghost btn-xs">Delete</button>
                                                    </th>
                                                </tr>

                                            </tbody>


                                        </table>
                                    </div>

                                </div>

                            </div>) : ""
                        }
                        {/* --------------------------------- Author---------------- */}


                        {authors ?
                            authors.map(author => <div
                                key={author._id}
                            ><div>

                                    <div className="overflow-x-auto">
                                        <table className="table border bg-green-400">
                                            {/* head */}
                                            <thead>
                                                {/* <tr>
            <th>

            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
        </tr> */}
                                            </thead>
                                            <tbody>
                                                {/* row 1 */}
                                                <tr>
                                                    <th>

                                                    </th>
                                                    <td>
                                                        <div className="flex items-center space-x-3">
                                                            <div className="avatar">

                                                            </div>
                                                            <div>
                                                                <div className="font-bold">{author?.name}</div>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>

                                                        <br />
                                                    </td>

                                                    <th>
                                                        <button className="btn btn-ghost btn-xs">Delete</button>
                                                    </th>
                                                </tr>

                                            </tbody>


                                        </table>
                                    </div>

                                </div>

                            </div>) : ""
                        }

                        {/* -----------------------------Show Manag Data--------------------------  */}




                    </div>



                </div>
                {/* ----------- Data */}
            </div>

            <Footer></Footer>
        </div>
    );
};

export default AdminHome;