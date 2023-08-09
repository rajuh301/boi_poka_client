import { useEffect, useState } from 'react';
import SectionTitle from '../../shaired/sectionTitle/SectionTitle';
import ScienceFictionBook from '../../../catergory/scienceFictionBook/ScienceFictionBook';

const ScienceFictionSection = () => {
    const [catergory,setCategory]=useState([]);
    const [seeMore,setseeMore]=useState(6);

    
    const loadMore=()=>{
     setseeMore((prev)=> prev+6);
    }
    useEffect(()=>{
        fetch("http://localhost:5000/bookpost")
        .then(res=>res.json())
        .then(data=>{
            const popular=data.filter(books=>books.category_3==='সায়েন্স ফিকশন');
            setCategory(popular);
        })
    },[])
    return (
        <div className='px-8 my-8'>
            <SectionTitle heading="সায়েন্স ফিকশন"></SectionTitle> 
            <div className='border border-slate-700 py-6 px-8'>
            <div className='md:grid grid-cols-6 gap-8 '>
                
                {
                    catergory.slice(0,seeMore).map(bookPopular=><ScienceFictionBook key={bookPopular._id} bookPopular={bookPopular} ></ScienceFictionBook>)
                }
               
            </div>
            <div className='w-32 ms-auto text-center mt-8'>
            <button onClick={loadMore} className='text-center font-bold text-blue-400 text-lg '> See More..</button>
                </div>
            </div>
        </div>
    );
};

export default ScienceFictionSection;