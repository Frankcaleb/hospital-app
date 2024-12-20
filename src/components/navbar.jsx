import React from 'react';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';
import { useState } from 'react';
import { Link } from "react-router-dom";


function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className=' fixed w-full flex justify-between items-center border-b-blue-50 bg-gradient-to-r from-white to-blue-50  px-10 md:px-32 h-20'>

      <h1 className='font-bold text-2xl text-blue-950'>CYBER</h1>
      <ul className='hidden md:flex mt-2 '>
        <li className='px-4 font-semibold'>Home</li>
        <li className='px-4 font-semibold'>Services</li>
        <li className='px-4 font-semibold'>Blog</li>
        <li className='px-4 font-semibold'>Contact</li>
      </ul>
      <Link to="/appointments">
        <button className='hidden md:block hover:bg-transparent hover:ease-in-out hover:font-semibold hover:text-blue-800 bg-blue-800 rounded-full px-3 py-2 text-white'>Get Appointment</button>
      </Link>
      <div onClick={handleNav} className=' mt-2 md:hidden hover:cursor-pointer'>
        {!nav ? <FaXmark size={20} /> : <FaBarsStaggered size={20} />}
      </div>

      <div className={!nav ? 'fixed left-[0] top-0 bg-white w-[60%] h-full px-5 rounded-lg md:hidden' : 'fixed left-[-100%] top-0 bg-white w-[60%] h-full px-5 transition'}>
        <h1 className='font-bold text-2xl text-blue-950 mt-10 px-3'>CYBER</h1>
        <ul className='uppercase pt-5'>
          <li className='m-4 border-b border-b-blue-900 '>Home</li>
          <li className='m-4 border-b border-b-blue-900'>Services</li>
          <li className='m-4 border-b border-b-blue-900 '>Blog</li>
          <li className='m-4'>Contact</li>
        </ul>
        <Link to="/appointments">
          <button className='font-semibold border rounded-full p-2 bg-blue-800 text-white m-4'>Get Appointment</button>
        </Link>
      </div>

    </div>
  )
}

export default Navbar;