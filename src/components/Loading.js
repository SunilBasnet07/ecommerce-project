import React from 'react'

const Loading = () => {
  return (
    <div className="bg-white flex gap-2  flex-col rounded-2xl shadow-xl hover:shadow-2xl p-3  min-h-full w-full relative dark:bg-gray-900 animate-pulse">
    <div className=" bg-slate-200 rounded-lg w-full h-40 object-contain" ></div>
    <div className="h-5 w-[70%] bg-slate-200 "></div>
    <div className="h-3 w-[50%] bg-slate-200 "></div>
    <div className="h-5 w-[40%] bg-slate-200 "></div>
    <div className="h-7 w-full bg-slate-200 rounder"></div>
   
    
  </div>
  )
}

export default Loading