import { useEffect, useState,useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import IconLogo from "../images/iconlogo.jpeg";
import {StoreContext} from '../Context/StoreContext.jsx'


const Header = () => {
  const {setItems, items} = useContext(StoreContext);

  const [menu, setMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [countAdd, setCountAdd] = useState(0);
  const [isSticky , setIsSticky] = useState(false);


  

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    const totalCount = cartItems.length;
    setItems(cartItems);
    console.log(totalCount)
    setCountAdd(totalCount);

    const handleScrollY = () => {
      if(window.scrollY > 400){
        setIsSticky(true)
      }
      else{
        setIsSticky(false);
      }
    }


    window.addEventListener("scroll", handleScrollY);
    return () => {
      window.addEventListener("scroll", handleScrollY);
    }
  }, []);

  const menuClasses = `md:hidden ${
    menu ? "flex" : "hidden"
  } flex-col items-center gap-4 p-4 absolute bg-[#0d0d0d] z-10 transition-transform duration-1000 w-full`;

  return (
    <header className={`${isSticky ? "sticky top-0  " : ""}  bg-[#FFFFFF] z-50 w-full py-2 px-3 md:py-6 shadow-md `}>
      <div className="container">
        <div className="flex justify-between items-center bg-[#FFFFFF] text-[#111111] font-normal">
          <div className="logo">
            <Link to="/Aquaharmony/home" className="brand flex items-center gap-2">
              <img className="w-10 h-10" src={IconLogo} alt="" />
              <h2 className="max-lg:hidden ">Aqua Harmony</h2>
            </Link>
          </div>
          <div>
            <div className="hidden md:block">
              <div className="nav nav-pills py-2 flex justify-between items-center gap-6 leading-6 text-lg">
                <NavLink
                  to="/Aquaharmony/home"
                  className={(navData) =>
                    navData.isActive
                      ? " border-b-[2px] border-black py-4"
                      : "py-4"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/Aquaharmony/about"
                  className={(navData) =>
                    navData.isActive
                      ? " border-b-[2px] border-black py-4"
                      : "py-4"
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to="/Aquaharmony/products"
                  className={(navData) =>
                    navData.isActive
                      ? " border-b-[2px] border-black py-4"
                      : "py-4"
                  }
                >
                  Products
                </NavLink>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center gap-4 cursor-pointer ">
            <div className="flex items-center relative">
            <div className={`flex flex-row rounded-full max-md:rounded-md md:px-3 md:gap-3 items-center hover:bg-gray-200 bg-gray-100 md:py-2 pr-2 max-md:w-[130px]  md:w-[200px]`}>
              <i
                className="fa-solid fa-magnifying-glass w-5 h-5 max-md:p-5 text-lg rounded-full flex justify-center items-center"
                
              ></i>
              <input
                className={`px-1 outline-none bg-transparent text-lg w-full`}
                type="text"
                placeholder="Search"
              />
            </div>
            
            </div>

            <div className="md:block z-10 ">
              <NavLink
                to="/Aquaharmony/favorites"
                className={(navData) =>
                  navData.isActive ? "text-[#111111]" : ""
                }
              >
                <i className="fa-regular fa-heart text-xl h-10 w-10 flex justify-center items-center p-3 hover:bg-slate-100 rounded-full"></i>
              </NavLink>
            </div>

            <div className="md:block z-10 relative">
              <NavLink
                className={(navData) =>
                  navData.isActive ? "text-[#111111]" : ""
                }
                to="/Aquaharmony/cart"
              >
                <i className="fa-solid fa-bag-shopping text-xl h-10 w-10 flex justify-center items-center p-3 hover:bg-slate-100 rounded-full"></i>
              </NavLink>
              <div className="absolute bottom-0 right-0 rounded-full bg-red-500 text-white flex justify-center items-center text-sm w-5 h-5">
                <h1>
                  {
                  items.length > 0 ? items.length : 0}</h1>
              </div>
            </div>
            <NavLink
              to="/Aquaharmony/login"
              className={(navData) =>
                navData.isActive ? "text-[#111111]" : ""
              }
            >
              Login
            </NavLink>
            <div className="md:hidden block z-50">
              <i
                className={`${
                  menu ? "text-white" : "text-black"
                } fa-solid fa-bars text-2xl z-20 `}
                onClick={() => setMenu(!menu)}
              ></i>
            </div>
          </div>
        </div>
      </div>



      {/* Mobile Responsive */}
      <div className="flex absolute top-0 left-0 w-full leading-6 text-lg">
        <div className={menuClasses}>
          <NavLink
            to="/Aquaharmony/home"
            className={(navData) =>
              navData.isActive ? "text-[#6246ea]" : "text-white"
            }
            onClick={() => setMenu(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/Aquaharmony/about"
            className={(navData) =>
              navData.isActive ? "text-[#6246ea]" : "text-white"
            }
            onClick={() => setMenu(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/Aquaharmony/products"
            className={(navData) =>
              navData.isActive ? "text-[#6246ea]" : "text-white"
            }
            onClick={() => setMenu(false)}
          >
            Products
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
  