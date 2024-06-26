import React, { useEffect, useState,useContext } from "react";
import formatCurrency from "../utilities/formatCurrency";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";
import {StoreContext} from '../Context/StoreContext'
import {toast} from 'react-toastify';
const BagItem = () => {
  const {setItems, items} = useContext(StoreContext);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [parsedData, setParsedData] = useState([]);
  const [stateRemove, setStateRemove] = useState(-1);
  const shippingThreshold = 30;
  const [deleteItem, setDeleteItem] = useState(false);
  const [quantityItem, setQuantityItem] = useState(0);
  const [incrementBtn, setIncrementBtn] = useState(0);
  const [decrementBtn, setDecrementBtn] = useState(0);
  const [container, setContainer] = useState(-1)
  

  useEffect(() => {
    const results = localStorage.getItem("cart");
    const parsedDatas = JSON.parse(results);
    setParsedData(parsedDatas || []);
    setItems(parsedDatas)
  }, [quantityItem]);

  useEffect(() => {
    let subTotal = 0;
    parsedData.forEach((item) => {
      subTotal += parseFloat(item.price);
    });
    setSubtotal(subTotal);
    const newTotal =
      subTotal + (subTotal >= shippingThreshold ? 0 : shippingThreshold);
    setTotal(newTotal);

    setInterval(() => {
      setDeleteItem(false);
    },10000)
  }, [parsedData, shippingThreshold, deleteItem]);

  const handleRemove = () => {
    const updatedCart = parsedData.filter((_, i) => i !== stateRemove);
    setParsedData(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setItems(updatedCart)
    document.getElementById("my_modal_1").close();
    setDeleteItem(true);
    toast.error("Deleted Successfully")
    // window.location.reload();
  };

  const handleItemRemove = (index) => {
    setStateRemove(index);
    document.getElementById("my_modal_1").showModal();
    
  };

  const incrementQuantity = (index) => {
    setContainer(index)
    setIncrementBtn( 1)
    setQuantityItem(incrementBtn)
  }
  
  const decrementQuantity = (index) => {
    setContainer(index)
    setDecrementBtn(0)
    setQuantityItem(decrementBtn)

  }

  return (
    <section className="container leading-loose text-[#111111]">
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Are you sure you want to remove this?</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn mr-4" onClick={handleRemove}>
                Yes
              </button>
              <button className="btn">No</button>
            </form>
          </div>
        </div>
      </dialog>

      {/* <div className={`relative ${deleteItem ? "block": "hidden"}`}>
        <div className="fixed px-4 bg-red-500 right-20 top-32 text-white font-semibold rounded-full py-2">
        <h1>Deleted Successfully</h1>
        </div>
      </div> */}

      <div className="md:block  px-3 py-3">
        <div className="flex max-md:flex-col-reverse  w-full min-h-screen gap-4 ">
          {/* Looping */}
          <div className="md:w-2/3 w-3/3  flex-1 overflow-y-scroll h-[500px] cursor-pointer ">
            {parsedData.length > 0 ? (
              parsedData.map((item, index) => (
                <div key={index}>
                  <h2>{item.category}</h2>

                  <div className="card-bag flex gap-4 border-b-[1px] border-gray-200 py-7">
                    <div className="card-image ">
                      <img
                        className="w-[100px] max-w-[200px] h-auto object-contain"
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

                      <div className="flex justify-between items-center w-[100px]">
                        <button onClick={() => decrementQuantity(index)} className="rounded-sm  w-7 h-7 bg-[#111111] text-white">
                          -
                        </button>
                        <input
                          value={quantityItem} onChange={(e) => setQuantityItem(e.target.value)}
                          className="w-7 h-7 ring-1 text-sm ring-[#111111] text-center"
                          type="text"
                        />
                        <button onClick={() => incrementQuantity(index)} className="rounded-sm  bg-[#111111] text-white w-7 h-7">
                          +
                        </button>
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
              ))
            ) : (
              <div className="flex justify-center items-center h-60">
                <h1 className="text-xl font-bold ">No Record</h1>
              </div>
            )}
            {}
            {/* end */}
          </div>

          <div className=" md:w-2/3 w-3/3 flex-1">
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
              <button className="max-w-[300px] min-w-[300px] mx-auto max-md:hidden  py-3 px-8 bg-[#111111] hover:opacity-80 rounded-full text-white font-semibold">
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-md:block hidden fixed left-0 w-full bottom-0 py-5 px-4 border-t-[1px] bg-white border-slate-300  ">
        <button className="w-full bg-[#6246ea] text-white mx-auto py-3 px-4 rounded-full font-semibold">
          Go to Checkout
        </button>
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}

      {/* Mobile Responsive */}
    </section>
  );
};

export default BagItem;
