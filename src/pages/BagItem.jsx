import React from "react";

const BagItem = () => {
  return (
    <div className="container leading-loose text-[#111111]">
      <div className="flex gap-2 min-h-screen gap-4">
        <div className="w-2/3">
          <h2>Bag</h2>
          {/* Looping */}
          <div className="card-bag flex gap-4 border-b-[1px] border-gray-200 py-7">
            <div className="card-image  ">
              <img
                className="w-[200px] h-auto object-contain"
                src="https://secure-images.nike.com/is/image/DotCom/HF4299_001?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&fmt=jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col w-full text-[18px]  leading-7 ">
              <div className="flex justify-between">
                <h1 className="">Nike Dunk Low</h1>
                <h1>$7,395.00</h1>
              </div>
              <div>
                <h3>Men's Shoes</h3>
                <h3>Photon Dust/White/Phantom/Obsidian</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3">
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
            <button className="max-w-[300px] min-w-[300px] mx-auto py-3 px-8 bg-[#6246ea] hover:opacity-80 rounded-full text-white font-semibold">Check Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BagItem;
