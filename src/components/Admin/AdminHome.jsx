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
        fetch('https://boi-poka-server-chi.vercel.app/users')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])



    useEffect(() => {
        fetch('https://boi-poka-server-chi.vercel.app/bookpost')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])


    useEffect(() => {
        fetch('https://boi-poka-server-chi.vercel.app/writer')
            .then(res => res.json())
            .then(data => setWriter(data))
    }, [])


    useEffect(() => {
        fetch('https://boi-poka-server-chi.vercel.app/author')
            .then(res => res.json())
            .then(data => setAuthor(data))
    }, [])





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

                <div className="stats shadow mx-auto h-32 mt-10">

                    <div className="stat place-items-center">
                        <div className="stat-title">Total Author</div>
                        <div className="stat-value">{author?.length}</div>
                        <div className="stat-desc">From January 1st to February 1st</div>
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
                        <div className="stat-desc">From January 1st to February 1st</div>
                    </div>

                </div>
                {/* ----------- Data */}

            </div>



            <Footer></Footer>
        </div>
    );
};

export default AdminHome;