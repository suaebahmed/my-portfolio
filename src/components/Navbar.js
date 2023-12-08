import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/suaeb_logo.jpg";

function Navbar() {
  const [isNav, setNav] = useState(true);
  const handleClick = () => setNav(!isNav);

  return (
    <div className="bg-[#0a192f] h-[65px] w-full fixed flex justify-center z-10">
      <div className="max-w-screen-lg w-full h-[65px] flex justify-between items-center z-10 text-gray-300 px-4">
        <div>
          <a href="/my-portfolio">
            {/* https://picsart.com/create/editor?category=background&projectId=65738f4262b4934f969e03ea */}
            <img src={logo} alt="logo" className="h-12 inline-block" />
          </a>
        </div>
        {/* manu */}
        <ul className="hidden md:flex justify-center items-center">
          <a href="#home">
            <li>Home</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>
          <a href="#skills">
            <li>Technology</li>
          </a>
          <a href="#about">
            <li>About</li>
          </a>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden cursor-pointer z-10">
          {isNav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile manu */}
        <ul
          className={
            isNav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#0a192f] text-gray-300"
          }
        >
          <a href="#home">
            <li className="py-2 text-xl">Home</li>
          </a>
          <a href="#projects">
            <li className="py-2 text-xl">Projects</li>
          </a>
          <a href="#skills">
            <li className="py-2 text-xl">Technology</li>
          </a>
          <a href="#about">
            <li className="py-2 text-xl">About</li>
          </a>
        </ul>
        {/* You can add social icon absolute left center */}
      </div>
    </div>
  );
}

export default Navbar;
