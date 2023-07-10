import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SecondNav = () => {

    const [writer, setWriter] = useState()

    useEffect(() => {
        fetch('http://localhost:5000/writer')
            .then(res => res.json())
            .then(data => setWriter(data))
    }, [])


    // -------------------------- find Spsic writer books------------------

    const [books, setBooks] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/bookpost')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])


    const findBooks = (wd) => {

        const writerName = wd.name;

        const booksss = books.filter(book => book.bookWriter === writerName);

        console.log(booksss)
    };


    // -------------------------- find Spsic writer books------------------






    return (

        <div>
            <div className='md:flex lg:flex grid grid-cols-4 md:justify-between bg-[#201212] text-white md:px-48 lg:px-64 md:gap-0 lg:gap-0 gap-2 text-center md:py-4 lg:py-4 '>


                {/* -------------------------------------- Writer--------------------------- */}

                <Link onClick={() => window.my_modal_4.showModal()}>লেখক</Link>

                <dialog id="my_modal_4" className="modal">
                    <form method="dialog" className="modal-box w-12/12 max-w-5xl">
                        <h3 className="font-bold text-lg">লেখকগণ</h3>

                        <div className='grid grid-cols-4'>


                            {writer?.map(wd => (
                                <p key={wd.id}>
                                    <button onClick={() => findBooks(wd)}>
                                        {wd.name}
                                    </button>
                                </p>
                            ))}



                        </div>

                        <div className="modal-action">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn">Close</button>
                        </div>
                    </form>
                </dialog>

                {/* -------------------------------------- Writer--------------------------- */}






                <Link>প্রকশনি</Link>
                <Link>আনুবাদ গ্রন্থ</Link>
                <Link>ইংরেজি বই</Link>
                <Link>ইসলামী বই</Link>
                <Link>অন্যনো</Link>
                <Link>অডিও</Link>
                <Link>ভিডিও</Link>

            </div>

            {/* <p>
                {writer?.map(wd => (
                    <p key={wd.id}>
                        <button onClick={() => findBooks(wd)}>
                            {wd.name}
                        </button>
                    </p>
                ))}</p> */}

        </div>
    );
};

export default SecondNav;