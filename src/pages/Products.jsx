import React from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../data";

const Products = ({ heading }) => {
  return (
    <main className="bg-white leading-relaxed md:px-2 container">
      <div className="pg-header">
        <div className="container flex justify-between">
          <div className="">
            <h2>{heading} Products</h2>
          </div>
          <div className="">
            {/* Second breadcrumb */}
            {/* <nav className="w-full rounded-md">
              <ol className="list-reset flex">
                <li>
                  <Link
                    to="/"
                    className="text-primary transition duration-150 ease-in-out hover:text-primary-accent-300 focus:text-primary-accent-300 active:text-primary-accent-300 motion-reduce:transition-none dark:text-primary-400"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <span className="mx-2 text-neutral-400">/</span>
                </li>
                <li className="text-neutral-400">products</li>
              </ol>
            </nav> */}
          </div>
        </div>
      </div>
      <div className="container content bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {PRODUCTS.map((product) => (
            <div key={product.id}>
              
              <Link
                to={`/products/${product.id}`}
                className="product flex flex-col shadow-xl rounded-lg border-[1px] border-slate-200"
              >
                <div className="product_image h-[200px]  flex items-center text-center bg-gray-200">
                  <img
                    className="object-cover w-full max-w-full max-h-full rounded-t-lg"
                    src={product.image}
                    alt=""
                  />
                </div>
                <div className="product_body flex flex-col px-4 py-4 text-md  ">
                  <h3 className="product_text text-md font-semibold text-black">
                    {product.name}
                  </h3>
                  <p className="text-gray-500">{product.category}</p>
                  {/* <p className=" product_detail text-sm text-center pb-2 text-gray-600">
                    {product.detail}
                  </p> */}
                  <div className="flex items-center pt-2 text-semibold text-[#6246ea]">
                    ₱
                    <span className="text-md font-semibold  ">
                      {product.price}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Products;
