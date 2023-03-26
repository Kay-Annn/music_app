import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

const Login = () => {
  return (
    <div className='relative w-screen h-screen'>
      <div className='absolute inset-0 bg-darkOverlay flex items-center justify-center p-4'>
        <div className='w-full md:w-375 p-4 bg-lightOverlay shadow-2xl rounded-md backdrop-blur-md'>
          <div className='flex items-center justify-start p-2 gap-2 py-2 rounded-md bg-cardOverlay cursor-pointer
           hover:bg-card hover:shadow-md duration-100 ease-in-out transition-all'>
            <FcGoogle />
            Sign in with Google
          </div>
          <div className='flex items-center justify-start p-2 gap-2 py-2 rounded-md bg-cardOverlay cursor-pointer
           hover:bg-card hover:shadow-md duration-10'>
            <FaFacebook />
            Sign in with Facebook
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login