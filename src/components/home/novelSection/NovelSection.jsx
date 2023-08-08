import { useEffect, useState } from 'react';
import SectionTitle from '../../shaired/sectionTitle/SectionTitle';
import Novel from '../../../catergory/Novel/Novel';

const NovelSection = () => {
    const [catergory,setCategory]=useState([]);
    const [seeMore,setseeMore]=useState(6);

    
   const loadMore=()=>{
    setseeMore((prev)=> prev+6);
   }
    useEffect(()=>{
        fetch("https://boi-poka-server-chi.vercel.app/bookpost")
        .then(res=>res.json())
        .then(data=>{
            const popular=data.filter(books=>books.category_2==='উপন্যাস');
            setCategory(popular);
        })
    },[])
    return (
        <div className='px-8 my-8'>
            <SectionTitle heading="উপন্যাস"></SectionTitle> 
            <div className='border border-slate-700 py-6 px-8'>
            <div className='md:grid grid-cols-6 gap-8 '>
                
                {
                    catergory.slice(0,seeMore).map(bookPopular=><Novel key={bookPopular._id} bookPopular={bookPopular} ></Novel>)
                }
               
            </div>
            <div className='w-32 ms-auto text-center mt-8'>
            <button onClick={loadMore} className='text-center font-bold text-blue-400 text-lg '> See More..</button>
                </div>
            </div>
        </div>
    );
};

export default NovelSection;