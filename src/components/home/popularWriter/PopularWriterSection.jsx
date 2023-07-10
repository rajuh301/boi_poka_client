import React from 'react';

import { useEffect, useState } from 'react';
import PopularWriters from '../../writers/PopularWriters';
import SectionTitle from '../../shaired/sectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

const PopularWriterSection = () => {
    const [catergory,setCategory]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/writer")
        .then(res=>res.json())
        .then(data=>{
            const popular=data.filter(writers=>writers.category==='জনপ্ৰিয়');
            setCategory(popular);
        })
    },[])
    return (
        <div className='px-8'>
            <SectionTitle heading="জনপ্রিয় লেখক"></SectionTitle>
            <div className='border border-slate-700 py-6 px-8'>
            <div className='md:grid grid-cols-6 gap-8 '>
                
                {
                    catergory.slice(0,6).map(writerPopular=><PopularWriters key={writerPopular._id} PopularWriters={writerPopular} ></PopularWriters>)
                }
                
               
            </div>
            <div className='w-32 mx-auto text-center mt-8'>
                 <Link className='text-center border border-slate-700 p-2 '> See More..</Link>
                </div>
            </div>
        </div>
    );
};

export default PopularWriterSection;