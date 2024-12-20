import React from 'react'
import { FaXTwitter, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa6'; 

function Footer() {
    return (
        <div className='bg-blue-950 p-3 md:px-32 md:py-20  flex text-white'>
             <div>
                <h1 className='font-bold  mb-3 text-sm'>CYBER</h1>
                <p className='text-xs w-44 text-balance md:0 md:w-full '>Lorem ipsum dolor sit amet consectetur, adipisicing elit.  <br />Ipsam autem ullam libero voluptatum sed expedita sequi <br /> dolor sapiente explicabo aliquid, nobis optio numquam <br /> reprehenderit. Eveniet nobis cupiditate magni a mollitia?</p>
                <div className='flex mt-3'>
                    <FaFacebook/>
                    <FaInstagram className='mx-3'/>
                    <FaXTwitter/>
                    <FaEnvelope className='mx-3'/>
                </div>

            </div>
            <div className='mx-8 md:mx-32'>
                <h1 className='font-bold mb-3 text-sm'>Subscribe</h1>
                <p className='text-xs'>Home</p>
                <p className='text-xs'>Services</p>
                <p className='text-xs'>Blog</p>
                <p className='text-xs'>Contact</p>
            </div>
            <div className='mr-8 md:mr-32'>
                <h1 className='font-bold mb-3 text-sm'>Hospital</h1>
                <p className='text-xs'>Health</p>
                <p className='text-xs'>Wellness</p>
                <p className='text-xs'>Solutions</p>
                <p className='text-xs'>Expertise</p>
                <p className='text-xs'>Diagnosis</p>
            </div>
            <div>
                <h1 className='font-bold mb-3 text-sm'>Hospital</h1>
                <p className='text-xs'>Health</p>
                <p className='text-xs'>Wellness</p>
                <p className='text-xs'>Solutions</p>
                <p className='text-xs'>Expertise</p>
                <p className='text-xs'>Diagnosis</p>
            </div> 
        </div>
    )
}

export default Footer;