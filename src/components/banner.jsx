import React from 'react';
import banner from "../assets/5.jpg";

function Banner() {
  return (
    <div>
        <div className='mx-10 pt-20 md:pt-28 md:mx-32 md:flex justify-between'>
        <h1 className='text-3xl text-blue-950 mt-3 font-black text-balance md:text-4xl  md:w-96 '>Epicenter of Health Your <span className='text-blue-800'>Wellness Haven</span></h1>
        <p className='text-sm w-full text-justify  my-5 md:text-justify md:w-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque illo accusamus mollitia quidem quia perspiciatis. Consequuntur quam esse eos, rem ex libero. Porro voluptate similique impedit velit iure eaque quis?</p>
      </div>
      
       <img src= {banner} alt=""  className='w-full'/>
    </div>
  )
}

export default Banner;