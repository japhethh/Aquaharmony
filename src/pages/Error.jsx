import React from 'react'
import { Link } from 'react-router-dom'


const Error = () => {
  return (
    <div className="h-screen w-full container  flex justify-center items-center " >
      <div className="flex flex-col gap-3 "> 
      <h1 className="text-2xl font-semibold ">404 not found 💀</h1>
      <Link className="bg-black text-white text-center rounded-full py-3 px-5 " to="/" >Back Home</Link>
      </div>
    </div>
  )
}

export default Error