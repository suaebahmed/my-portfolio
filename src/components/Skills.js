import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import node from '../assets/node.png';
import mongodb from '../assets/mongo.png';
import tailwind from '../assets/tailwind.png';
import github from '../assets/github.png';

function Skills() {
  return (
    <div name='skills' className='w-full h-screen'>
        <div className='text-center'>
          <p className='text-4xl font-bold pb-4'>Experience</p>
          <p className='text-gray-400'>These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8'>
            <div className='hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={html} alt="html icon"></img>
              <p className='my-4'>HTML</p>
            </div>
            <div className='hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={css} alt="html icon"></img>
              <p className='my-4'>CSS</p>
            </div>
            <div className='hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={javascript} alt="html icon"></img>
              <p className='my-4'>JavaScript</p>
            </div>
            <div className='hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={react} alt="html icon"></img>
              <p className='my-4'>React</p>
            </div>
            <div className='hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={node} alt="html icon"></img>
              <p className='my-4'>Node</p>
            </div>
            <div className='hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={mongodb} alt="html icon"></img>
              <p className='my-4'>MongoDB</p>
            </div>
            <div className='hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={tailwind} alt="html icon"></img>
              <p className='my-4'>Tailwind</p>
            </div>
            <div className='hover:scale-110 duration-500'>
              <img className='w-20 mx-auto bg-black' src={github} alt="html icon"></img>
              <p className='my-4'>Github</p>
            </div>
        </div>
    </div>
  )
}

export default Skills;