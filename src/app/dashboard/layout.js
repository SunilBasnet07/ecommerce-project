import Dashboard from '@/components/Dashboard'
import React from 'react'

const DashboardLayout = ({ children }) => {
  return (
    <div className=' mt-14 flex h-[210svh]  gap-10 dark:bg-gray-800'>
    
      <Dashboard />
      
      

      <div className='w-[73%] relative left-[22%] h-auto'>
        {children}
      </div>



    </div>
  )
}

export default DashboardLayout