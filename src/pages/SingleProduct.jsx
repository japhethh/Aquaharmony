import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { PRODUCTS } from "../data.jsx";

const SingleProduct = () => {
  const navigate = useNavigate();
  const { productId } = useParams();

  // get product
  const retrieveProduct = PRODUCTS.find(
    (product) => product.id === parseInt(productId)
  );

  const { id, name, price, image, detail, category } = retrieveProduct;
  console.log("product id ", productId);
  console.log("product id ", retrieveProduct);
  return (
    <main className="bg-white min-h-screen leading-relaxed px-5">
      <div className="md:block hidden">
        <div className="pg-header">
          <div className="container flex flex-col-reverse md:flex-row">
            <div className="">
              {/* Second breadcrumb */}
              <nav className="w-full rounded-md">
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
                  <li className="text-neutral-400">
                    <Link to="/products">products</Link>
                  </li>
                  <span className="mx-2 text-neutral-400">/</span>
                  <li className="text-neutral-400">{name}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className="container flex justify-between items-start py-8 ">
          {/* Left */}
          <div className="w-2/3 flex-1 ">
            <div className="flex justify-end  ">
              <img
                src={image}
                className="w-[400px] h-auto  rounded-md object-contain"
              />
            </div>
          </div>
          {/* Right */}
          <div className="w-1/3 flex-1 ">
            <div className="w-[350px] mx-auto">
              <div className=" ">
                <h2 className="md:text-2xl mt-4 text-md text-black font-semibold">{name}</h2>
                <p className="text-black font-medium">{category}</p>
                <p className="price mb-6 text-[#6246ea] pt-1 text-lg ">
                  ₱{price}
                </p>
              </div>

              <div className=" flex flex-col   gap-4 my-4">
                <button
                  className="rounded-full  w-full mx-auto py-4  px-7 text-white bg-[#6246ea] text-lg hover:opacity-80"
                  onClick={() => navigate(-1)}
                >
                  Add Bag
                </button>
                <button className="rounded-full w-full mx-auto py-4 px-7 bg-white border-[2px] border-violet-200 text-[#6246ea] text-lg flex gap-2 justify-center items-center hover:border-[#6246ea]">
                  <span>Favorite</span>
                  <i class="fa-regular fa-heart"></i>
                </button>
              </div>
              <div className="py-8">
                <p className="text-md text-[#111111]">{detail}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className=" md:hidden block" >
        <div className="flex flex-col mt-12 px-4  font-semibold ">
          <h1 className="text-2xl">{name}</h1>
          <h1 className="text-md">{category}</h1>
          <h1 className="text-lg py-4 text-[#6246ea]">₱{price}</h1>
        </div>
        <div>
          <img 
            src={image}
            class="mb-5 "
            alt=""
          />
        </div>
        <div className=" flex flex-col   gap-4 px-4 ">
          <button
            className="rounded-full  w-full mx-auto py-4  px-7 text-white bg-[#6246ea] text-lg hover:opacity-80"
            onClick={() => navigate(-1)}
          >
            Add Bag
          </button>
          <button className="rounded-full w-full mx-auto py-4 px-7 bg-white border-[2px] border-violet-200 text-[#6246ea] text-lg flex gap-2 justify-center items-center hover:border-[#6246ea]">
            <span>Favorite</span>
            <i class="fa-regular fa-heart"></i>
          </button>
        </div>
        <div className="py-8 ">
          <p className="text-md text-[#111111]">{detail}</p>
        </div>
      </div>
      {/* end */}

    </main>
  );
};

export default SingleProduct;
