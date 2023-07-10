import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const SocialBar = () => {
    return (
        <div className='flex justify-end bg-[#343434] py-3 '>
            <p><FaFacebookF className='w-[23px] h-[23px] text-white me-6'></FaFacebookF></p>
            <p><FaTwitter className='w-[23px] h-[23px] text-white me-6' ></FaTwitter></p>
            <p><FaLinkedinIn className='w-[23px] h-[23px] text-white me-6'></FaLinkedinIn></p>
            <p><FaInstagram className='w-[23px] h-[23px] text-white me-5'></FaInstagram></p>
        </div>
    );
};

export default SocialBar;