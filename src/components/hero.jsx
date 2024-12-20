import React from 'react';
import first from "../assets/2.jpg";
import second from "../assets/3.png";
import third from "../assets/4.jpg";
import { FaCheck } from 'react-icons/fa6';
import {motion} from "framer-motion";

function Hero() {
    return (
        <motion.div
        initial={{
            opacity:0
        }}
        whileInView={{
            opacity: 1,
            scale:1,
            transition: {
                duration: 3
            }
        }}
        viewport={{
            once: true
        }}
        >
            <div className='mx-10 mt-20 md:mx-32 md:mt-16'>
            <div className='flex md:mx-0'>
                    <FaCheck size={10} className='text-blue-800 mt-2 md:block md:mx-0' />
                    <p className=' font-semibold text-blue-800 mx-3  md:mx-0  md:text-left md:px-3'>Our Services</p>
                    </div>
                 <h1 className='text-3xl text-blue-950 text-balance mt-3 md:text-left md:text-4xl md:mr-96 '>Harbor Health Anchored in Care and Commitment</h1>
                 
            <div className=' mx-5 my-8 md:flex justify-center md:mt-16 '>
                <div className='hover:ease-in-out hover:shadow-xl bg-white border border-white rounded-lg cursor-pointer shadow mx-5 md:mx-0'>
                    <img src={first} alt="" className='w-full rounded-t-lg md:w-72' />
                    <h1 className='text-center font-bold text-blue-950 py-2'>Inspire Health Hub</h1>
                    <p className='w-full text-sm px-4 mb-5 text-justify md:w-72'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea asperiores voluptas quibusdam adipisci nobis, repellendus fuga nisi.</p>
                </div>
                <div className='hover:ease-in-out hover:shadow-xl bg-white border border-white rounded-lg cursor-pointer shadow mx-5 my-8 md:mx-5 md:my-0'>
                    <img src={second} alt="" className='w-full rounded-t-lg md:w-72' />
                    <h1 className='text-center font-bold text-blue-950 py-2'>Wellness Solutions</h1>
                    <p className='w-full text-sm px-4 mb-5 text-justify md:w-72'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea asperiores voluptas quibusdam adipisci nobis, repellendus fuga nisi.</p>
                </div>
                <div className='hover:ease-in-out hover:shadow-xl bg-white border border-white rounded-lg cursor-pointer shadow mx-5 md:mx-0 md:my-0'>
                    <img src={third} alt="" className='w-full rounded-t-lg md:w-72' />
                    <h1 className='text-center font-bold text-blue-950 py-2'>Healing Healthcare</h1>
                    <p className='w-full text-sm px-4 mb-5 text-justify md:w-72'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea asperiores voluptas quibusdam adipisci nobis, repellendus fuga nisi.</p>
                </div>
            </div> 
            </div>
        </motion.div>
    )
}

export default Hero;