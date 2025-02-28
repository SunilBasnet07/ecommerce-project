import LoginForm from '@/components/LoginForm'
import Image from 'next/image'
import React from 'react'
import sign from "@/assests/sign.png"

const LoginPage = () => {
  return (
    <div className='dark:bg-gray-800 bg-slate-100 flex justify-center mt-5 gap-20 items-center h-svh'>
      <div className='h-[300px] w-[300px] flex justify-center items-center'>
        <Image src={sign} alt='login' height={600} width={600} />
      </div>
      <LoginForm />

    </div>
  )
}

export default LoginPage