import React from 'react'

const LoadingOrder = () => {
  return (
    <div className='py-2 px-4 bg-slate-100 w-full dark:bg-gray-900 animate-pulse rounded-lg  dark:text-white  h-52'>
      <div className=' bg-slate-200 dark:bg-gray-400 my-1 h-8 md:w-[40%] rounded-md'> </div>
      <div className='grid md:grid-cols-2 gap-4 w-full'>
        <div className=' bg-slate-200 dark:bg-gray-400 my-2 h-20 rounded-lg'> </div>
        <div className=' bg-slate-200 dark:bg-gray-400 my-2 h-20 rounded-lg'> </div>
      </div>
      <div className=' bg-slate-200 my-3 dark:bg-gray-400 h-8 md:w-[40%] rounded-md'> </div>


    </div>
  )
}

export default LoadingOrder