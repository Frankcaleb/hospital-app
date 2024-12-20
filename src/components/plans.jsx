import React from 'react'
import { FaCheck } from 'react-icons/fa6';
import {motion} from "framer-motion";
function Plans() {
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
     className='mx-16 mt-20 md:mx-32'>
            <div className='flex justify-center mx-24 md:mx-0'>
                <FaCheck size={10} className='text-blue-800 mt-2 mx-4 hidden md:block md:mx-0' />
                <p className='text-center font-semibold text-blue-800 md:mx-0  md:text-left md:px-3'>Pricing plans</p>
            </div>

            <h1 className='text-3xl md:text-4xl text-blue-950 mt-1 mb-5 text-center'>Empowering wellness one <br /> patient at a time</h1>
            <div className=' md:flex justify-center mt-10'>
                <div className='hover:ease-in-out hover:shadow-2xl mx-16 text-center md:text-left md:bg-white p-2 rounded shadow md:mx-0'>
                    <p className='font-semibold text-sm mx-3'>Quick Care</p>
                    <p className='text-3xl text-blue-400 m-3'>$19 <span className='text-sm text-blue-400'>monthly</span></p>
                    <p className='font-semibold text-sm mb-3 mx-3 '>Lorem, ipsum dolor sit amet <br /> consectetur</p>
                    <ul className='text-sm mb-3 mx-3'>
                        <li className='md:py-1'>Healthcare</li>
                        <li className='md:py-1'>Expert Care</li>
                        <li className='md:py-1'>Good Care</li>
                        <li className='md:py-1'>Clean Up</li>
                        <li className='md:py-1'>Diagnosis</li>
                    </ul>
                    <button className='hover:ease-in-out hover:bg-blue-800 hover:text-white hover:font-semibold border rounded-full border-blue-800 text-blue-800 px-7 py-1 text-sm text-center mx-11 mt-3 mb-3'>Get Now</button>
                </div>
                <div className='hover:ease-in-out hover:shadow-2xl mx-16 text-center my-10 md:my-0 md:text-left md:bg-white p-2 md:mx-5 rounded shadow'>
                    <p className='font-semibold text-sm mx-3'>Wellness Work</p>
                    <p className='text-3xl text-blue-400 m-3'>$89 <span className='text-sm text-blue-400'>monthly</span></p>
                    <p className='font-semibold text-sm mb-3 mx-3'>Lorem, ipsum dolor sit amet <br /> consectetur</p>
                    <ul className='text-sm mb-3 mx-3'>
                        <li className='md:py-1'>Healthcare</li>
                        <li className='md:py-1'>Expert Care</li>
                        <li className='md:py-1'>Good Care</li>
                        <li className='md:py-1'>Clean Up</li>
                        <li className='md:py-1'>Diagnosis</li>
                    </ul>
                    <button className='hover:ease-in-out hover:bg-blue-800 hover:text-white hover:font-semibold border rounded-full border-blue-800 text-blue-800 px-7 py-1 text-sm text-center mx-11 mt-3 mb-3'>Get Now</button>
                </div>
                <div className='hover:ease-in-out hover:shadow-2xl mx-16 text-center md:text-left md:mx-0 md:bg-white p-2 md:mr-5 rounded shadow'>
                    <p className='font-semibold text-sm mx-3'>Health Spot</p>
                    <p className='text-3xl text-blue-400 m-3'>$49 <span className='text-sm text-blue-400'>monthly</span></p>
                    <p className='font-semibold text-sm mb-3 mx-3'>Lorem, ipsum dolor sit amet <br /> consectetur</p>
                    <ul className='text-sm mb-3 mx-3'>
                        <li className='md:py-1'>Healthcare</li>
                        <li className='md:py-1'>Expert Care</li>
                        <li className='md:py-1'>Good Care</li>
                        <li className='md:py-1'>Clean Up</li>
                        <li className='md:py-1'>Diagnosis</li>
                    </ul>
                    <button className='hover:ease-in-out hover:bg-blue-800 hover:text-white hover:font-semibold border rounded-full border-blue-800 text-blue-800 px-7 py-1 text-sm text-center mx-11 mt-3 mb-3'>Get Now</button>
                </div>
                <div className='hover:ease-in-out hover:shadow-2xl mx-16 text-center my-10 md:my-0 md:mx-0 md:text-left md:bg-white p-2 rounded-lg shadow'>
                    <p className='font-semibold text-sm mx-3'>Medical Ease</p>
                    <p className='text-3xl text-blue-400 m-3'>$19 <span className='text-sm text-blue-400'>monthly</span></p>
                    <p className='font-semibold text-sm mb-3 mx-3'>Lorem, ipsum dolor sit amet <br /> consectetur</p>
                    <ul className='text-sm mb-3 mx-3'>
                        <li className='md:py-1'>Healthcare</li>
                        <li className='md:py-1'>Expert Care</li>
                        <li className='md:py-1'>Good Care</li>
                        <li className='md:py-1'>Clean Up</li>
                        <li className='md:py-1'>Diagnosis</li>
                    </ul>
                    <button className='hover:ease-in-out hover:bg-blue-800 hover:text-white hover:font-semibold border rounded-full border-blue-800 text-blue-800 px-7 py-1 text-sm text-center mx-11 mt-3 mb-3'>Get Now</button>
                </div>
            </div>
        </motion.div>
    )
}

export default Plans;