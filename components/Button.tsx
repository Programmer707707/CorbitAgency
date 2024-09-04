import React from 'react'
import {BsArrowRight} from 'react-icons/bs';

const Button = () => {
  return (
    <button className='flex justify-center items-center w-full md:w-auto  gap-6 bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-2 px-4 rounded'>
      <span>Contact us</span>
      <BsArrowRight/>
    </button>
  )
}

export default Button