import React from "react";
import image1 from '../images/1.png'

const BagItem = () => {
  return (
    <section className="container leading-loose text-[#111111]">
      <div className="md:block hidden px-5">
      <div className="flex  min-h-screen gap-4 ">
        <div className="w-2/3 flex-1">
          <h2>Shower</h2>
          {/* Looping */}
          <div className="card-bag flex gap-4 border-b-[1px] border-gray-200 py-7">
            <div className="card-image  ">
              <img
                className="w-[200px] h-auto object-contain"
                src={image1}
                alt=""
              />
            </div>
            <div className="flex flex-col w-full text-[18px]  leading-7 ">
              <div className="flex justify-between text-black font-semibold">
                <h1 >AquaSound 5000</h1>
                <h1 >$7,395.00</h1>
              </div>
              <div className="text-gray-500">
                <h3>Shower</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 flex-1">
          <h2>Summary</h2>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between  ">
              <h1>Subtotal</h1>
              <h1>₱7,395.00</h1>
            </div>
            <div className="flex justify-between ">
              <h1>Estimated Delivery & Handling</h1>
              <h1>₱250.00</h1>
            </div>
            <div className="flex justify-between py-5 border-b-[1px] border-t-[1px] border-gray-200">
              <h1>Total</h1>
              <h1>₱7,645.00</h1>
            </div>
            <button className="max-w-[300px] min-w-[300px] mx-auto py-3 px-8 bg-[#6246ea] hover:opacity-80 rounded-full text-white font-semibold">
              Check Out
            </button>
          </div>
        </div>
      </div>
      </div>

      {/* Mobile */}
      <div className="px-5 max-md:block hidden">
        <div className="h-32 text-center py-5">
          <h1 className="text-2xl font-semibold">Shower</h1>
          <h1>
            <span>1 item </span>|<strong> ₱7,999.00</strong>
          </h1>
        </div>
        <div className=" border-t-[1px] border-gray-200 py-7 flex gap-4">
          <div>
            <img className="max-w-[150px] " src={image1} alt="" />
          </div>
          <div className="flex flex-col justify-start max-md:w-full">
            <div className="flex justify-between max-sm:flex-col    flex-row-reverse">
            <h1>₱7,395.00</h1>
            <h1>AquaSound 5000</h1>
            </div>
            <h1 className="text-gray-500">Men's Shoes</h1>
            <div className="flex ">
            <label htmlFor="">Quantity</label>
            <select className="w-10" name="" id="">
              <option value="hello"></option>
            </select>
            </div>
            <div className="flex justify-start gap-5 text-xl font-thin py-5">
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-trash-can"></i>
            </div>
          </div>
        </div>
        <div className=" border-t-[1px] border-gray-200 py-7 gap-4">
      <div>
        <h1 className="font-semibold text-xl pb-4">Summary</h1>
        <div className="flex justify-between items-center">
          <h1>Subtotal</h1>
          <h1>₱7,395.00</h1>
        </div>
        <div className="flex justify-between items-center">
          <h1>Estimated Delivery & Handling</h1>
          <h1>₱250.00</h1>
        </div>
        <div className="flex justify-between items-center py-5">
          <h1>Total</h1>
          <h1>₱7,645.00</h1>
        </div>
      </div>
        
        </div>
      
      </div>
      {/* end */}

      <div className="max-md:block hidden fixed left-0 w-full bottom-0 py-5 px-4 border-t-[1px] bg-white border-slate-300  ">
          <button className="w-full bg-[#6246ea] text-white mx-auto py-3 px-4 rounded-full font-semibold">Go to Checkout</button>
        </div>  
      
    </section>
  );
};

export default BagItem;
