import React from 'react'
import About from "../assets/6.jpg"
import { FaPhone, FaCheck } from 'react-icons/fa6';
import { BsCheckCircle } from 'react-icons/bs';

function Contact() {
    return (
        <div className='bg-blue-100 '>
            <div className='py-5 mx-10 mt-20 md:mx-32 md:flex'>
                <div>
                    <div className='flex md:mx-0'>
                        <FaCheck size={10} className='text-blue-800 mt-2  md:block md:mx-0' />
                        <p className='text-center font-semibold text-blue-800 mx-3 md:mx-0  md:text-left md:px-3'>About Us</p>
                    </div>

                    <h1 className='text-3xl md:text-left md:text-4xl text-blue-950 mt-3'>Harbor Health Anchored </h1>
                    <h1 className='text-3xl  md:text-left md:text-4xl text-blue-950 mb-2'>in Care And Commitment</h1>
                    <p className='text-balance text-sm my-4 md:text-left md:w-96'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt perferendis deleniti tempore sequi nihil asperiores.</p>
                    <div className='flex md:mx-0'>
                        <BsCheckCircle size={15} className='text-blue-800 mt-1 mr-4 md:block' />
                        <p className='text-center text-sm font-semibold text-blue-950 md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                    <div className='flex md:mx-0'>
                        <BsCheckCircle size={15} className='text-blue-800 mt-1 mr-4 md:block' />
                        <p className='text-center text-sm font-semibold text-blue-950 md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                    <div className='flex md:mx-0'>
                        <BsCheckCircle size={15} className='text-blue-800 mt-1 mr-4 md:block' />
                        <p className='text-center text-sm font-semibold text-blue-950 md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>

                    <p className='text-sm mt-5 md:text-left'>Message Us</p>
                    <div className='flex mt-1 md:mx-0'>
                        <FaPhone className='text-blue-950 mt-1' />
                        <p className=' text-blue-950 font-semibold text-center mx-3 md:text-left'> +234-567-890</p>
                    </div>

                </div>
                <img src={About} alt="" className='py-5 md:ml-64 md:my-0' />
            </div>
        </div>

    )
}

export default Contact;