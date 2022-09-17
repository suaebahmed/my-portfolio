import React from 'react';
import { VscGithubAlt } from 'react-icons/vsc';
import { FiExternalLink } from 'react-icons/fi';
import workimg from '../assets/realestate.jpg';

function ProjectItem() {
  return (
    <div>
        <img className='w-[250px] mx-auto' src={workimg} alt='working'></img>
        <h1 className='text-2xl font-samibold'>Project Name</h1>
        <div className='flex justify-center m-3'>
            <div className='text-xs font-semibold text-white bg-[#020024] h-4 px-2 rounded-full m-2'>HTML</div>
            <div className='text-xs font-semibold text-white bg-[#020024] h-4 px-2 rounded-full m-2'>CSS</div>
            <div className='text-xs font-semibold text-white bg-[#020024] h-4 px-2 rounded-full m-2'>React JS</div>
        </div>
        <div className='flex justify-center'>
            <VscGithubAlt className='mx-2 cursor-pointer'></VscGithubAlt>
            <FiExternalLink className='mx-2 cursor-pointer'></FiExternalLink>
        </div>
    </div>
  )
}

export default ProjectItem;