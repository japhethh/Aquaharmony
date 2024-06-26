import React from "react";
import { Link } from "react-router-dom";
import formatCurrency from "../utilities/formatCurrency";

import { PRODUCTS } from "../data";

const Products = ({ heading }) => {
  return (
    <main className="bg-white leading-relaxed ">
      <div className="">
        <div className=" flex justify-between">
          <div className="container">
            <h2>{heading} Products</h2>
          </div>

          <div className=""></div>
        </div>
      </div>
      <div className=" content bg-white">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 ">
          
          {PRODUCTS.map((product, index) => (
            <div key={index}>
              <Link
                to={`/Aquaharmony/products/${product.id}`}
                className="product flex flex-col shadow-xl rounded-lg border-[1px] border-slate-200"
              >
                <div className="product_image h-[200px]  flex  text-center bg-gray-200">
                  <img
                    className="object-cover w-full max-w-full max-h-full md:rounded-t-lg"
                    src={product.image}
                    alt=""
                  />
                </div>

                <div className="product_body flex flex-col px-4 py-4 text-md  ">
                  <h3 className="product_text text-md font-semibold text-black">
                    {product.name}
                  </h3>

                  <p className="text-gray-500">{product.category}</p>

                  <div className="flex items-center pt-2 text-semibold text-[#111111]">
                    <span className="text-md font-semibold  ">
                      {formatCurrency(product.price)}
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
