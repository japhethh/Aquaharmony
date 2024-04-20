import React from 'react'
import { Link } from 'react-router-dom'


const Error = () => {
  return (
    <div className="h-screen w-full container  flex justify-center items-center " >
      <div className="flex flex-col gap-3 text-sm "> 
      <h1 className="text-lg  "><strong>404</strong> <span className="">|</span> This page could not be found. 💀</h1>
      <Link className="bg-black text-white mx-auto text-center rounded-full py-3 px-5 " to="/Aquaharmony/home" >Back Home</Link>
      </div>
    </div>
  )
}

export default Error