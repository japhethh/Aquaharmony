import React, { useEffect, useState } from "react";
import formatCurrency from "../utilities/formatCurrency";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";

const BagItem = () => {
  const [parsedData, setParsedData] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [stateRemove,setStateRemove] = useState(-1);
  const shippingThreshold = 30;

  useEffect(() => {
    const results = localStorage.getItem("cart");
    const parsedDatas = JSON.parse(results);
    setParsedData(parsedDatas || []);
  }, []);

  // UseEffect
  useEffect(() => {
    let subTotal = 0;
    parsedData.forEach((item) => {
      subTotal += parseFloat(item.price);
    });
    setSubtotal(subTotal);
    setTotal(subTotal);

    if (subTotal >= shippingThreshold) {
      setTotal(subTotal);
    } else {
      setTotal(subTotal);
    }
  }, [parsedData]);
  // end useEffect

  const handleRemove = () => {
    
    const updatedCart = parsedData.filter((_, i) => i !== stateRemove);
    console.log(updatedCart);
    setParsedData(updatedCart);
    window.location.reload();
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleItemRemove = (index) => {
    document.getElementById("my_modal_1").showModal()
    setStateRemove(index)
  };

  return (
    <section className="container leading-loose text-[#111111]">
      <div className="md:block hidden px-5">
        <div className="flex  min-h-screen gap-4 ">
          {/* Looping */}
          <div className="w-2/3 flex-1 overflow-y-scroll h-[500px] cursor-pointer ">
            {parsedData.map((item, index) => (
              <div key={index}>
                <h2>{item.category}</h2>

                <div className="card-bag flex gap-4 border-b-[1px] border-gray-200 py-7">
                  <div className="card-image  ">
                    <img
                      className="w-[200px] h-auto object-contain"
                      src={item.image}
                      alt=""
                    />
                  </div>

                  <div className="flex flex-col w-full text-[18px]  leading-7 ">
                    <div className="flex justify-between text-black font-semibold">
                      <h1>{item.name}</h1>
                      <h1>{formatCurrency(item.price)}</h1>
                    </div>

                    <div className="text-gray-500">
                      <h3>Shower</h3>
                    </div>

                    <div className="flex justify-start gap-4 items-start py-5 ">
                      <IoIosHeartEmpty className="text-2xl cursor-pointer" />
                      <IoTrashOutline 
                        className="text-2xl cursor-pointer "
                        onClick={() => handleItemRemove(index)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* end */}
          </div>

          <div className="w-1/3 flex-1">
            <h2>Summary</h2>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <h1>Subtotal</h1>
                <h1>{formatCurrency(subtotal)}</h1>
              </div>
              <div className="flex justify-between">
                <h1>Estimated Delivery & Handling</h1>
                <h1>{formatCurrency(shippingThreshold)}</h1>
              </div>
              <div className="flex justify-between py-5 border-b-[1px] border-t-[1px] border-gray-200">
                <h1>Total</h1>
                <h1>{formatCurrency(total)}</h1>
              </div>
              <button className="max-w-[300px] min-w-[300px] mx-auto py-3 px-8 bg-[#6246ea] hover:opacity-80 rounded-full text-white font-semibold">
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="px-5 max-md:block hidden">{/* Mobile content */}</div>
      {/* end */}

      <div className="max-md:block hidden fixed left-0 w-full bottom-0 py-5 px-4 border-t-[1px] bg-white border-slate-300  ">
        <button className="w-full bg-[#6246ea] text-white mx-auto py-3 px-4 rounded-full font-semibold">
          Go to Checkout
        </button>
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog ">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn mr-4" onClick={() => handleRemove()}>Delete</button>
              <button className="btn">Close</button>- 
            </form>
          </div>
        </div>
      </dialog>
    </section>
  );
};

export default BagItem;
