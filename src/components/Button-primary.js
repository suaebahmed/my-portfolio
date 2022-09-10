import React from 'react'

// bg-violet-500 hover:bg-violet-700

function ButtonPrimary(props) {
  return (
  <button className='bg-sky-500 hover:bg-sky-700 text-white text-sm font-semibold leading-5 border-2 rounded-full px-5 py-2'>
    {props.children}
  </button>
  )
}

export default ButtonPrimary;
