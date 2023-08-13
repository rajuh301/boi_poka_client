import React, { useEffect, useState } from 'react';
import Navbar from '../shaired/Navbar';
import Footer from '../shaired/Footer';
import { Link, Outlet } from 'react-router-dom';
import Swal from 'sweetalert2';


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

    const [datas, setDatas] = useState([])

    const handleBook = () => {
        setDatas(books)
    }

    const handleWriter = () => {
        setDatas(writer)
    }

    const handleAuthor = () => {
        setDatas(author)
    }

    // ------------------------ Manag Data ----------------

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // Delete from different endpoints one by one
                Promise.all([
                    fetch(`http://localhost:5000/deleteBook/${_id}`, {
                        method: 'DELETE'
                    }),
                    fetch(`http://localhost:5000/deleteAuthor/${_id}`, {
                        method: 'DELETE'
                    }),
                    fetch(`http://localhost:5000/deleteWriter/${_id}`, {
                        method: 'DELETE'
                    })
                ])
                    .then(responses => {
                        return Promise.all(responses.map(response => response.json()));
                    })
                    .then(dataArray => {
                        const totalDeletedCount = dataArray.reduce((total, data) => total + data.deletedCount, 0);
                        if (totalDeletedCount > 0) {
                            // Successful deletion
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            );
                            // Perform any necessary UI updates or data refetching
                        } else {
                            Swal.fire(
                                'Error',
                                'Failed to delete the item.',
                                'error'
                            );
                        }
                    })
                    .catch(error => {
                        console.error('Delete request error:', error);
                        Swal.fire(
                            'Error',
                            'An error occurred while deleting the item.',
                            'error'
                        );
                    });
            }
        });
    };



    return (
        <div>
            <Navbar></Navbar>



            <div className='flex'>
                <div className='w-52 block h-full bg-slate-700 text-white px-5 py-64 sticky'>

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



                        {datas ?
                            datas.map(da => <div
                                key={da._id}
                            ><div>

                                    <div className="overflow-x-auto">
                                        <table className="table border shadow rounded-lg bg-slate-700 text-white my-2">
                                            {/* head */}
                                            <thead>

                                            </thead>
                                            <tbody>
                                                {/* row 1 */}
                                                <tr className='content-between'>
                                                    <th>

                                                    </th>
                                                    <td>
                                                        <div className="flex items-center space-x-3">
                                                            <div className="avatar">
                                                                <div className="mask mask-squircle w-12 h-12">
                                                                    <img src={da?.bookImage || da?.photo || ''} alt="Avatar Tailwind CSS Component" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="font-bold">{da?.bookName || da?.name || da.name}</div>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {da?.bookWriter}
                                                        <br />
                                                    </td>
                                                    <td>{da?.bookAuthor || da?.category}</td>
                                                    <th className='content-end'>
                                                        <button onClick={() => handleDelete(da._id)} className="btn btn-ghost btn-xs hover:bg-red-400">Delete</button>
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