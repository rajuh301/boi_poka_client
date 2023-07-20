import React from 'react';
import { useEffect, useState } from 'react';
import SectionTitle from '../../shaired/sectionTitle/SectionTitle';
import { Link } from 'react-router-dom';
import PopularBook from '../../../catergory/popularBooks/PopularBook';
const PopularBookSection = () => {
    const [catergory,setCategory]=useState([]);
    const [seeMore,setseeMore]=useState(6);

    
   const loadMore=()=>{
    setseeMore((prev)=> prev+6);
   }
    useEffect(()=>{
        fetch("http://localhost:5000/bookpost")
        .then(res=>res.json())
        .then(data=>{
            const popular=data.filter(books=>books.category_4==='জনপ্রিয়');
            setCategory(popular);
        })
    },[])
    return (
        <div className='px-8 my-8'>
            <SectionTitle heading="জনপ্রিয় বই"></SectionTitle> 
            <div className='border border-slate-700 py-6 px-8'>
            <div className='md:grid grid-cols-6 gap-8 '>
                
                {
                    catergory.slice(0,seeMore).map(bookPopular=><PopularBook key={bookPopular._id} bookPopular={bookPopular} ></PopularBook>)
                }
               
            </div>
            <div className='w-32 ms-auto text-center mt-8'>
            <button onClick={loadMore} className='text-center font-bold text-blue-400 text-lg '> See More..</button>
                </div>
            </div>
        </div>
    );
};

export default PopularBookSection;