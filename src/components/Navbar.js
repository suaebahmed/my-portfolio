import React, { useState } from 'react'
import { FaBars,FaTimes } from 'react-icons/fa';
import logo from '../logo.svg';

function Navbar() {
    const [isNav,setNav] = useState(true);
    const handleClick = () => setNav(!isNav);

  return (
    <div className='fixed w-full h-[65px] flex justify-between items-center bg-[#0a192f] text-gray-300 px-4'>
        <div>
            <img className='w-[50px]' src={logo} alt='logo'></img>
        </div>

        {/* manu */}
        <ul className='hidden md:flex justify-center items-center'>
            <li>Home</li>
            <li>Projects</li>
            <li>Technology</li>
            <li>Education</li>
            <li>About</li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden cursor-pointer z-10'>
            {isNav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* mobile manu */}
        <ul className={isNav?'hidden':'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#0a192f] text-gray-300'}>
            <li className='py-2 text-xl'>Home</li>
            <li className='py-2 text-xl'>Projects</li>
            <li className='py-2 text-xl'>Technology</li>
            <li className='py-2 text-xl'>Education</li>
            <li className='py-2 text-xl'>About</li>
        </ul>
        {/* You can add social icon absolute left center */}

    </div>
  )
}

export default Navbar;