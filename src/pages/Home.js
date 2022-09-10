import React from 'react'
import { FaDownload } from 'react-icons/fa';
import About from '../components/About';
import Navbar from '../components/Navbar';
// import ButtonPrimary from '../components/Button-primary';

function Home() {
  return (
    <>
      <Navbar></Navbar>
      {/* container */}
      <div className='w-full h-screen'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-pink-600'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6]'>Sueab Ahmed</h1>
          <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0]'>I'm a Full-Stack Developer.</h2>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a full stack web developer specializing in data structure and algorithms. Currently, I'm focused on building responsive full-stack web applications.</p>
          <div>
              <button className='bg-sky-500 hover:bg-sky-700 text-white border-2 rounded px-6 py-3 flex justify-center'>
                Get Resume
                <span className='hover:rotate-[360deg] ml-2 duration-300'>
                  <FaDownload />
                </span>
              </button>
          </div>
        </div>
      </div>
      {/*  */}
      <About></About>
      {/* --- technology section --- */}
      <section>
          
      </section>

    </>
  )
}

export default Home;
