import React from "react";
import { Link } from "react-router-dom";
import IconLogo from "../images/iconlogo.jpeg";
const LoginForm = () => {
  return (
    <main className=" bg-white min-h-screen flex justify-around items-center ">
      <div className="flex justify-around  max-md:flex-col-reverse items-center  container ">
        {/*Form  */}
        <div className="w-[350px] h-[350px] ">
          <form
            action=""
            className="rounded-md shadow-lg flex flex-col gap-4  w-full py-10 px-5 border-[1px] border-slate-100"
          >
            <div className="flex flex-col ">
              <label className="font-semibold">Email</label>
              <input
                className="py-4 mb-4 px-4 bg-slate-100 rounded-lg outline-[#6246EA] text-md"
                type="email"
                placeholder="Enter your Email"
              />
              <label className="font-semibold">Password</label>
              <input
                className="py-4 px-4 bg-slate-100 rounded-lg outline-[#111111] text-md"
                type="password"
                placeholder="Enter your Password"
              />
            </div>
            <button className="w-full bg-[#111111] py-3 rounded-full text-white font-bold">
              Login
            </button>
            <p>Forgot Password?</p>
            {/* divided */}
            <Link
              className=" mx-auto bg-gray-100 rounded-full text-[#white] font-semibold py-3 px-7"
              to="/Aquaharmony/register"
            >
              Sign up
            </Link>
          </form>
        </div>

        <div className="flex justify-between max-lg:justify-center items-center gap-2 ">
          <img className="w-10 h-10 max-lg:hidden " src={IconLogo} alt="" />
          <h1 className="md:text-[38px] font-bold text-[25px] max-md:py-7  ">
            Aqua Harmony
          </h1>
        </div>
      </div>
    </main>
  );
};

export default LoginForm;
