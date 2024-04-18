import React from "react";
import { Link, NavLink } from "react-router-dom";
import homemain from '../images/homemain.jpg';
import HomeGirl from '../images/HomeGirl.jpg';
import HomeMainGirl from '../images/HomeMainGirl.jpg';
import Products from "./Products.jsx";
import Header from '../components/Header.jsx'


const Home = () => {
  return (
    <>
    <main className="bg-white min-h-screen container">
      
      <div className="md:px-6 px-5">
        <img className=" rounded-xl " src={homemain} alt="" />
      </div>
        
        {/* Body */}
        <div className="w-full text-center py-10  flex flex-col cursor-pointer">
          <Link to="/Aquaharmony/products" >
          <h1 className="text-lg ">Feel the unreal</h1>
          <h1 className="text-[50px] font-extrabold">Aqua Harmony</h1>
          <h1 className="text-lg py-4">The next generation of Shower technology is here</h1>
          <button className="py-3 px-8 my-2  rounded-full text-white bg-black mx-auto hover:opacity-80">Shop Now</button>
          </Link>
        </div>
    
      <Products heading="Latest"/>
    </main>
    </>
  );
};

export default Home;
