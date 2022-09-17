import React from 'react';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';

function Footer() {
  return (
    <div className=''>
        <div className='text-center text-[rgb(10,24,49)] text-2xl font-bold'>Suaeb Ahmed</div>
        <div className='flex justify-center space-x-5 m-4 text-[rgb(10,24,49)]'>
             <BsLinkedin className='fill-[#020024] text-4xl cursor-pointer w-8'  />
             <BsTwitter className='fill-[#020024] text-4xl cursor-pointer' />
             <FaFacebookSquare className='fill-[#020024] text-4xl cursor-pointer' />
        </div>
        <div className='text-center text-ms text-gray-600'>Copyright <span>&copy;</span> Sueab - All Rights Reversed</div>
    </div>
  )
}

export default Footer;