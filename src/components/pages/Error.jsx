import React from 'react'
import { useNavigate } from 'react-router-dom'


export const ErrorPage = () => {

  const Navigate = useNavigate()

  const NavigateHandler = ()=>{
    Navigate('/')
  }

  return (
   <div className='mt-20 '>
     <div className='  w-2/4 mx-auto p-10   bg-gray-100 rounded shadow-lg text-center'>
        <h1 className='font-poppins text-2xl text-violet-700 uppercase font-bold'>Error 404</h1>
        <p className=' text-lg text-slate-700 font-inter'>Page not found.</p>
        <button className=' mt-3 py-2 px-8 bg-white rounded shadow-md hover:bg-violet-700 hover:text-white font-semibold text-base' onClick={NavigateHandler}>Home</button>
    </div>
   </div>
  )
}
