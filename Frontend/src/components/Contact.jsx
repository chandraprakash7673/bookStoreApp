import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import Login from './Login'

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="rounded-2xl shadow-2xl ">
          <div className="w-[600]">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost relative left-9/10 top-2">✕</Link>
              <h3 className='font-bold text-lg mx-2 p-4' >Contact</h3>
              <div className='mt-4 space-y-2 px-4'>
                <span>Name</span>
                <br />
                <input type="text"
                  placeholder='Enter your fullname'
                  className="w-80 px-4 py-2 bg-gray-100 rounded-md focus:outline-none "
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
              </div>
              {/*Email */}
              <div className='mt-4 space-y-2 px-4'>
                <span>Email</span>
                <br />
                <input type="email"
                  placeholder='Enter your email'
                  className='w-80 px-4 py-2 bg-gray-100 rounded-md focus:outline-none '
                  {...register("email", { required: true })} />
                <br />
                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
              </div>
              { /*Password */}
              <div className='mt-4 space-y-2 px-4'>
                <span>Message</span>
                <br />
                <textarea placeholder='Enter your message' className='w-80 px-4 py-2 bg-gray-100 rounded-md outline-none '
                  {...register("message", { required: true })}
                />
                <br />
                {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
              </div>
              {/* Button */}
              <div className='flex justify-around mt-4 p-4'>
                <button className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700'>Submit</button>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
