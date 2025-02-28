'use client'
import { useEffect, useState } from 'react'

const AboutPage = () => {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  function onChangeValue(e) {
    const value = parseInt(e.target.value);
    setCount(value)

  }
  console.log("hellow world");
  useEffect(()=>{
console.log("hello world from useEffect")
  },[])

  return (
    <div className='h-screen flex justify-center max-w-screen-2xl mt-16 items-center gap-4'>
      <input onChange={onChangeValue} type='text' className='border px-2 py-1 ' />

      <p>{count}</p>
      <button onClick={increment} className='px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded'>+</button>
      <button onClick={decrement} className='px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded'>-</button>


    </div>
  )
}

export default AboutPage