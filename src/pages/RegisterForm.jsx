import React from "react";
import { NavLink } from "react-router-dom";

const RegisterForm = () => {
  return (
    <main className=" bg-white">
      <div className="container">
        <div className="flex justify-center items-center min-h-screen">
          {/* Main */}
          <div className="w-[400px] px-8 py-8 rounded-xl my-6 shadow-lg">
            <form action="">
              <h2 className="font-bold">Sign Up</h2>
              <div>
                {/* Forms */}
                <div className="flex flex-col">
                  <div className="forms flex mt-8  justify-between ">
                    <label className="text-xm font-bold" htmlFor="">
                      Email
                    </label>

                    <div className="flex gap-4 items-center">
                      <p className="text-sm font-semibold">
                        Already have an account?
                      </p>
                      <NavLink
                        className="text-xm font-bold text-[#6246ea] cursor-pointer"
                        to="../login"
                      >
                        Log in
                      </NavLink>
                    </div>
                  </div>
                  <div>
                    <input
                      className="w-full rounded-lg mt-1 py-3 px-3 text-md bg-[#E8F0FE] outline-[#6246ea]"
                      type="email" placeholder="Enter Email"
                    />
                  </div>
                </div>

                {/* Form */}
                <div className="flex flex-col">
                  <div className="forms flex mt-8  justify-between mt">
                    <label className="text-xm font-bold" htmlFor="">
                      Password
                    </label>

                    <div className="flex gap-4"></div>
                  </div>
                  <div>
                    <input
                      className="w-full rounded-lg mt-1 py-3 px-3 text-md bg-[#E8F0FE] outline-[#6246ea]"
                      type="password"  placeholder="Enter Password"
                    />
                  </div>
                </div>

                <div className="flex gap-2 py-5 w-full items-center">
                  <input
                    className="bg-blue-500 "
                    type="checkbox"
                    name=""
                    id="check"
                  />
                  <label for="check" className="w-full">
                    Email me with news and updates
                  </label>
                </div>

                <button className="w-full py-3 px-3 bg-[#6246ea] text-white rounded-full">
                  Sign up
                </button>

                <div class="flex items-center justify-center gap-4 py-4">
                  <div className="w-1/3 border-t border-gray-500 "></div>
                  <span>or</span>
                  <div className="w-1/3 border-t border-gray-500 "></div>
                </div>

                <div className="flex flex-col gap-4">
                  <button className="py-3 px-3 rounded-full text-white bg-[#0866FF] flex justify-center items-center gap-2">
                    <i class="fa-brands fa-facebook text-lg"></i>
                    <span>Continue with Facebook</span>
                  </button>
                  <button className="py-3 px-3 rounded-full  text-black border-[1px] border-gray-500 flex justify-center items-center gap-2 ">
                    <i class="fa-brands fa-google text-lg text-[#6246ea]"></i>
                    <span>Continue with Google</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegisterForm;
