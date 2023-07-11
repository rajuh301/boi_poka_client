import React from 'react';
import { Link } from 'react-router-dom';

const WriterDetails = () => {
    return (
        <div className='flex flex-col md:flex-row gap-x-8 p-8   '>
            <div className='md:w-[500px] ps-2 md:text-start text-center my-4'>
              <h5 className='font-bold text-[20px]'>ক্যাটেগরি</h5>
              <div className='mb-12'>
                <ul className=''>
                    <li><Link>উপন্যাস</Link></li>
                    <li><Link>গল্প</Link></li>
                    <li><Link>কবিতা</Link></li>
                    <li><Link>প্রবন্ধ</Link></li>
                    <li><Link>আত্মজীবনী</Link></li>
                    <li><Link>ভ্রমন</Link></li>
                    <li><Link>অনুবাদ</Link></li>
                    <li><Link>কমিক্স</Link></li>
               
                </ul>
              </div>
              <h5 className='font-bold text-[20px]'>বইয়ের ধরন</h5>
              <div>
                

                <ul className=''>
                    <li><Link>রোমান্টিক</Link></li>
                    <li><Link>থ্রিলার</Link></li>
                    <li><Link>হরর</Link></li>
                    <li><Link>প্রবন্ধ</Link></li>
                    <li><Link>সায়েন্স ফিকশন</Link></li>
                    <li><Link>মোটিভেশনাল</Link></li>
                    <li><Link>কমেডি</Link></li>
                    <li><Link>ক্লাসিক</Link></li>
               
                </ul>
              </div>
            </div>
            <div className=' shadow-inner'>
                <div className='flex  gap-x-8 p-8 bg-[#FEF6EB] mb-5 shadow-xl mx-2  '>
                    <div className='w-64'>
                        <img className='rounded-full w-[100px] h-[100px]' src="https://m.media-amazon.com/images/M/MV5BNTM5YmQ5ZGYtMzRiMC00ZmVkLWIzMGItYjkwMTRkZWIyMTk1XkEyXkFqcGdeQXVyNDI3NjcxMDA@._V1_.jpg" alt="" />
                        <p><span className='font-bold'>133</span> followers</p>
                        <button className=' w-[95px] h-[30px] bg-[#059BC8] mt-2 text-white'>Follow</button>
                    </div>
                    <div>
                        <h5 className='font-bold text-[20px]'>হুমায়ূন আহমেদ</h5>
                        <p>আহমেদ, হুমায়ূন (১৯৪৮-২০১২)  কথাসাহিত্যিক, নাট্যকার, চলচ্চিত্র নির্মাতা, গীতিকার, শিক্ষক। হুমায়ূন আহমেদের জন্ম নেত্রকোনা জেলার মোহনগঞ্জে তাঁর মাতামহের বাড়িতে। তাঁর পৈত্রিক বাড়ি নেত্রকোনা জেলার কেন্দুয়া উপজেলার কুতুবপুর গ্রাম। তাঁর পিতা ফয়জুর রহমান আহমেদ এবং মা আয়েশা আখতার খাতুন (বর্তমানে আয়েশা ফয়েজ নামে পরিচিত)। ফয়জুর রহমান আহমেদ পুলিশ বিভাগে চাকরি করতেন। ১৯৭১ সালে মুক্তিযুদ্ধ চলাকালে তিনি পিরোজপুর মহকুমার এসডিপিও হিসেবে কর্মরত ছিলেন </p>
                    

                    </div>

                    

                </div>
                <div className='shadow-xl mx-2 p-8 '>
                    <h5 className='font-bold text-[24px]'>হুমায়ূন আহমেদ এর বই সমূহ</h5>
                    <div className='grid md:grid-cols-4'>
                        <div className="card md:w-[200px] bg-base-100 mt-8 ">
                            <img className='h-60 md:w-64'  src="https://www.jugantor.com/assets/news_photos/2019/02/12/image-143424-1549921117.jpg" alt="Shoes" />
                            
                            
                                <p className='text-center text-[16px] font-bold'>হিমু</p>
                                <p className='text-center text-[16px]'>হুমায়ূন আহমেদ</p>
                                <p className='text-center text-[16px]'>rating (42)</p>
                                <p className='text-center text-[16px] text-[green]'>Product in stock</p>
                                <p className='text-center text-[16px]'><del> TK.120 </del> <span className='font-bold ms-2'>TK.160</span></p>
                            
                        </div>
                        <div className="card md:w-[200px] bg-base-100 mt-8 ">
                            <img className='h-60 md:w-64'  src="https://www.jugantor.com/assets/news_photos/2019/02/12/image-143424-1549921117.jpg" alt="Shoes" />
                            
                            
                                <p className='text-center text-[16px] font-bold'>হিমু</p>
                                <p className='text-center text-[16px]'>হুমায়ূন আহমেদ</p>
                                <p className='text-center text-[16px]'>rating (42)</p>
                                <p className='text-center text-[16px] text-[green]'>Product in stock</p>
                                <p className='text-center text-[16px]'><del> TK.120 </del> <span className='font-bold ms-2'>TK.160</span></p>
                            
                        </div>
                        <div className="card md:w-[200px] bg-base-100 mt-8 ">
                            <img className='h-60 md:w-64'  src="https://www.jugantor.com/assets/news_photos/2019/02/12/image-143424-1549921117.jpg" alt="Shoes" />
                            
                            
                                <p className='text-center text-[16px] font-bold'>হিমু</p>
                                <p className='text-center text-[16px]'>হুমায়ূন আহমেদ</p>
                                <p className='text-center text-[16px]'>rating (42)</p>
                                <p className='text-center text-[16px] text-[green]'>Product in stock</p>
                                <p className='text-center text-[16px]'><del> TK.120 </del> <span className='font-bold ms-2'>TK.160</span></p>
                            
                        </div>
                        <div className="card md:w-[200px] bg-base-100 mt-8 ">
                            <img className='h-60 md:w-64'  src="https://www.jugantor.com/assets/news_photos/2019/02/12/image-143424-1549921117.jpg" alt="Shoes" />
                            
                            
                                <p className='text-center text-[16px] font-bold'>হিমু</p>
                                <p className='text-center text-[16px]'>হুমায়ূন আহমেদ</p>
                                <p className='text-center text-[16px]'>rating (42)</p>
                                <p className='text-center text-[16px] text-[green]'>Product in stock</p>
                                <p className='text-center text-[16px]'><del> TK.120 </del> <span className='font-bold ms-2'>TK.160</span></p>
                            
                        </div>
                        <div className="card md:w-[200px] bg-base-100 mt-8 ">
                            <img className='h-60 md:w-64'  src="https://www.jugantor.com/assets/news_photos/2019/02/12/image-143424-1549921117.jpg" alt="Shoes" />
                            
                            
                                <p className='text-center text-[16px] font-bold'>হিমু</p>
                                <p className='text-center text-[16px]'>হুমায়ূন আহমেদ</p>
                                <p className='text-center text-[16px]'>rating (42)</p>
                                <p className='text-center text-[16px] text-[green]'>Product in stock</p>
                                <p className='text-center text-[16px]'><del> TK.120 </del> <span className='font-bold ms-2'>TK.160</span></p>
                            
                        </div>
                        <div className="card md:w-[200px] bg-base-100 mt-8 ">
                            <img className='h-60 md:w-64'  src="https://www.jugantor.com/assets/news_photos/2019/02/12/image-143424-1549921117.jpg" alt="Shoes" />
                            
                            
                                <p className='text-center text-[16px] font-bold'>হিমু</p>
                                <p className='text-center text-[16px]'>হুমায়ূন আহমেদ</p>
                                <p className='text-center text-[16px]'>rating (42)</p>
                                <p className='text-center text-[16px] text-[green]'>Product in stock</p>
                                <p className='text-center text-[16px]'><del> TK.120 </del> <span className='font-bold ms-2'>TK.160</span></p>
                            
                        </div>
                        <div className="card md:w-[200px] bg-base-100 mt-8 ">
                            <img className='h-60 md:w-64'  src="https://www.jugantor.com/assets/news_photos/2019/02/12/image-143424-1549921117.jpg" alt="Shoes" />
                            
                            
                                <p className='text-center text-[16px] font-bold'>হিমু</p>
                                <p className='text-center text-[16px]'>হুমায়ূন আহমেদ</p>
                                <p className='text-center text-[16px]'>rating (42)</p>
                                <p className='text-center text-[16px] text-[green]'>Product in stock</p>
                                <p className='text-center text-[16px]'><del> TK.120 </del> <span className='font-bold ms-2'>TK.160</span></p>
                            
                        </div>
                        <div className="card md:w-[200px] bg-base-100 mt-8 ">
                            <img className='h-60 md:w-64'  src="https://www.jugantor.com/assets/news_photos/2019/02/12/image-143424-1549921117.jpg" alt="Shoes" />
                            
                            
                                <p className='text-center text-[16px] font-bold'>হিমু</p>
                                <p className='text-center text-[16px]'>হুমায়ূন আহমেদ</p>
                                <p className='text-center text-[16px]'>rating (42)</p>
                                <p className='text-center text-[16px] text-[green]'>Product in stock</p>
                                <p className='text-center text-[16px]'><del> TK.120 </del> <span className='font-bold ms-2'>TK.160</span></p>
                            
                        </div>
                        <div className="card md:w-[200px] bg-base-100 mt-8 ">
                            <img className='h-60 md:w-64'  src="https://www.jugantor.com/assets/news_photos/2019/02/12/image-143424-1549921117.jpg" alt="Shoes" />
                            
                            
                                <p className='text-center text-[16px] font-bold'>হিমু</p>
                                <p className='text-center text-[16px]'>হুমায়ূন আহমেদ</p>
                                <p className='text-center text-[16px]'>rating (42)</p>
                                <p className='text-center text-[16px] text-[green]'>Product in stock</p>
                                <p className='text-center text-[16px]'><del> TK.120 </del> <span className='font-bold ms-2'>TK.160</span></p>
                            
                        </div>
                        <div className="card md:w-[200px] bg-base-100 mt-8 ">
                            <img className='h-60 md:w-64'  src="https://www.jugantor.com/assets/news_photos/2019/02/12/image-143424-1549921117.jpg" alt="Shoes" />
                            
                            
                                <p className='text-center text-[16px] font-bold'>হিমু</p>
                                <p className='text-center text-[16px]'>হুমায়ূন আহমেদ</p>
                                <p className='text-center text-[16px]'>rating (42)</p>
                                <p className='text-center text-[16px] text-[green]'>Product in stock</p>
                                <p className='text-center text-[16px]'><del> TK.120 </del> <span className='font-bold ms-2'>TK.160</span></p>
                            
                        </div>
                        <div className="card md:w-[200px] bg-base-100 mt-8 ">
                            <img className='h-60 md:w-64'  src="https://www.jugantor.com/assets/news_photos/2019/02/12/image-143424-1549921117.jpg" alt="Shoes" />
                            
                            
                                <p className='text-center text-[16px] font-bold'>হিমু</p>
                                <p className='text-center text-[16px]'>হুমায়ূন আহমেদ</p>
                                <p className='text-center text-[16px]'>rating (42)</p>
                                <p className='text-center text-[16px] text-[green]'>Product in stock</p>
                                <p className='text-center text-[16px]'><del> TK.120 </del> <span className='font-bold ms-2'>TK.160</span></p>
                            
                        </div>
                        
                    </div>

                </div>

            </div>
        </div>
    );
};

export default WriterDetails;