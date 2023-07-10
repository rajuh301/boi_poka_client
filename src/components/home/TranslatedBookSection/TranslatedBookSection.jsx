import { useEffect, useState } from 'react';
import SectionTitle from '../../shaired/sectionTitle/SectionTitle';
import { Link } from 'react-router-dom';
import TranslatedBook from '../../../catergory/TranslatedBook/TranslatedBook';

const TranslatedBookSection = () => {
    const [catergory,setCategory]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/bookpost")
        .then(res=>res.json())
        .then(data=>{
            const popular=data.filter(books=>books.category_1==='অনুবাদ গ্রন্থ');
            setCategory(popular);
        })
    },[])
    return (
        <div className='px-8 my-8'>
            <SectionTitle heading="অনুবাদ গ্রন্থ"></SectionTitle> 
            <div className='border border-slate-700 py-6 px-8'>
            <div className='md:grid grid-cols-6 gap-8 '>
                
                {
                    catergory.slice(0,6).map(bookPopular=><TranslatedBook key={bookPopular._id} bookPopular={bookPopular} ></TranslatedBook>)
                }
               
            </div>
            <div className='w-32 mx-auto text-center mt-8'>
                 <Link className='text-center border border-slate-700 p-2 '> See More..</Link>
                </div>
            </div>
        </div>
    );
};

export default TranslatedBookSection;