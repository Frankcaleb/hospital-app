import React from 'react';
import fifth from "../assets/plan.png";
import { FaCheck } from 'react-icons/fa6';

function Services() {
    return (
        <div>
            <div className='md:mx-32 '>
                <div className=' md:flex bg-blue-50 rounded-lg my-10 md:mx-0'>
                <div className='mx-10 md:pl-5 pt-20 md:mx-0 md:text-justify md:mt-10 '>
                    <div className='flex md:mx-0'>
                    <FaCheck size={10} className='text-blue-800 mt-2  md:block md:mx-0' />
                    <p className=' font-semibold text-blue-800 mx-3 md:mx-0  md:text-left md:px-3'>Why choose us</p>
                    </div>
                    
                    <h1 className='text-3xl text-blue-950 mt-3 mb-3 md:text-4xl md:w-96 md:mx-0'>Embrace Wellness Your Gateway</h1>
                    <p className='text-sm mb-7 text-justify md:w-80 md:mx-0'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, repellat architecto unde provident illum molestiae, laborum eos a obcaecati eum quia sed.</p>
                    <button className='hover:bg-transparent hover:ease-in-out hover:font-semibold hover:text-blue-800 bg-blue-800 rounded-full text-white py-2 px-4 mb-5 font-semibold md:px-5 md:py-2 text-sm'>Read More</button>
                </div>
                 <img src={fifth} alt="" className='mx-24 my-3 md:pl-20 md:mx-0 md:-ml-10 md:mt-10' />
                <div className='flex mx-20 -mt-5 md:flex justify-center bg-white rounded-lg md:px-5 h-32 md:mt-48 md:-ml-10 md:mx-0'>
                    <ul className='px-3 pt-7 md:px-3 md:pt-5 text-sm'>
                
                        <li>Technical Services</li>
                        <li>Wellness Solutions</li>
                        <li>Technical Solutions</li>
                        <li>Constant Checkups</li>
                    </ul>
                    <ul className='px-3 pt-7 md:px-3 md:pt-5 text-sm'>
                        <li>Good Healthcare</li>
                        <li>Health Solutions</li>
                        <li>Provide Drugs</li>
                        <li>Expert Services</li>
                    </ul>
                </div>
                </div>
            </div> 
        </div>
    )
}

export default Services;