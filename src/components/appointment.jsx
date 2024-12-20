import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';


const Appointment = () => {
  const schema = yup.object().shape({
    firstName: yup.string("Must be alphabet").required("First name is Required"),
    lastName: yup.string("Must be alphabet").required("Last name is Required"),
    email: yup.string().email("Not a valid email").required("Email is Required"),
    age: yup.number("Must be numbers").positive("No negative number").integer("Intergers Only").required("Age is Required"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);

  }
  return (
    <div className='bg-white'>
      <h1 className='font-semibold text-blue-950 text-center text-xl py-8'>Book an Appointment!</h1>
      <form className='ml-12 md:ml-[465px]' onSubmit={handleSubmit(onSubmit)}>
        <p className='text-blue-950 font-semibold'>Name</p>
        <input type="text" name="firstName" id="" className=' p-1 w-48 bg-blue-100 rounded-sm text-sm text-gray-600 font-semibold' {...register("firstName")} />
        <input type="text" name="lastName" id="" className=' p-1 w-48 bg-blue-100 rounded-sm ml-1 text-sm text-gray-600 font-semibold' {...register("lastName")} />
        <div className='flex text-sm'>
          <p>First Name</p>
          <p className='ml-[138px]'>Last Name</p>
        </div>
        <div className='flex text-sm text-red-600'>
          <p>{errors.firstName?.message}</p>
          <p className='ml-[138px]'>{errors.lastName?.message}</p>
        </div>
        <p className='text-blue-950 font-semibold pt-3 pb-1'>Email Address</p>
        <input type="email" name="email" id="" className=' p-1 w-96 bg-blue-100 rounded-sm text-sm text-gray-600 font-semibold' {...register("email")} />
        <p className='flex text-sm text-red-600'>{errors.email?.message}</p>
        <p className='text-blue-950 font-semibold pt-3 pb-1'>Age</p>
        <input type="number" name="age" id="" className=' p-1 w-96 bg-blue-100 rounded-sm text-sm text-gray-600 font-semibold' {...register("age")} />
        <p className='flex text-sm text-red-600'>{errors.age?.message}</p>
        <p className='text-blue-950 font-semibold pt-3'>When would you like your appointment</p>
        <input type="date" name="appointment" id="" className='p-1 w-96 bg-blue-100 rounded-sm text-sm text-gray-600 font-semibold ' required />
        <p className='text-blue-950 font-semibold pt-3'>Session</p>
        <select name="session" id="" className='p-1 w-96 bg-blue-100 rounded-sm text-sm text-gray-600 font-semibold' required >
          <option value="Choose">Choose One...</option>
          <option value="Morning">Morning</option>
          <option value="Evening">Evening</option>
        </select>
        <p className='text-blue-950 font-semibold pt-3'>Doctor you want to book</p>
        <select name="doctor" id="" className='p-1 w-96 bg-blue-100 rounded-sm text-sm text-gray-600 font-semibold ' required {...register("doctor")}>
          <option value="Choose">Choose One...</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Dentist">Dentist</option>
          <option value="Ophthamologist">Ophthamologist</option>
          <option value="Oncologist">Oncologist</option>
          <option value="Optician">Optician</option>
          <option value="Neurologist">Neurologist</option>
          <option value="Hematologist">Hematologist</option>
          <option value="Gynecologist">Gynecologist</option>
          <option value="Pediatrician">Pediatrician</option>
          <option value="Dentist">Psychiatrist</option>
          <option value="Endocrinologist">Endocrinologist</option>
        </select> <br />
        <button type="submit" className='bg-blue-950 text-white font-semibold py-2 px-[125px] rounded-sm mt-4 hover:text-blue-950 hover:border hover:border-blue-950 hover:bg-transparent hover:ease-in-out'>Book Appointment</button>
        <p className='text-sm font-bold text-blue-950 mx-24 hover:cursor-pointer hover:ease-in-out hover:text-purple-800'>Have an appointment already?</p>
      </form>
    </div>
  )
}

export default Appointment;