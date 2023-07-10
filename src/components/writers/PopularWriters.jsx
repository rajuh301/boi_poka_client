import writerImage from '../../assets/book.jpg'

const PopularWriters = ({PopularWriters}) => {
    const {photo,name}=PopularWriters;
    return (
            // <div className="w-full bg-white">
            //     <a href="#">
            //         <img className="rounded-t-lg w-full h-64 sm:h-80" src={photo?photo:'https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_640.jpg'} alt="" />
            //     </a>
            //     <div className="p-5 flex justify-between">
            //         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{name}</p>
            //         <p className='text-primary'><Link to={`/WriterDetails/${_id}`}><button>Details..</button></Link></p>
            //     </div>
            // </div>
            <div className="card w-[175px] bg-base-100 ">
  <img className='h-60 w-48'  src={photo? photo:writerImage} alt="Shoes" />
  
   
    <p className='text-center text-[18px]'>{name}</p>
 
</div>


        
    );
};

export default PopularWriters;