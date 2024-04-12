import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import IconLogo from "../images/iconlogo.jpeg";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false)

  // Conditional class application for the menu
  const menuClasses = `md:hidden ${
    menu ? "flex" : "hidden"
  } flex-col items-center gap-4 p-4 absolute  bg-[#0d0d0d] z-10 transition-transform duration-1000 w-full`;

  return (
    <header className="bg-[#FFFFFF] relative w-full py-3 px-3 sm:py-8 ">
      <div className="container">
        <div className="flex justify-between items-center  bg-[#FFFFFF]  text-[#111111] font-normal">
          <div className="logo">
            <Link to="/" className="brand flex items-center gap-2">
              <img className="w-10 h-10" src={IconLogo} alt="" />
              <h2 className="max-lg:hidden ">Aqua Harmony</h2>
            </Link>
          </div>
          <div>
            <div className="hidden md:block">
              <div className="nav nav-pills py-4  flex justify-between items-center gap-6 leading-6 text-lg">
                <NavLink
                  to="/"
                  className={(navData) =>
                    navData.isActive
                      ? " border-b-[2px] border-black py-4"
                      : "py-4"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="about"
                  className={(navData) =>
                    navData.isActive
                      ? " border-b-[2px] border-black py-4"
                      : "py-4"
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to="products"
                  className={(navData) =>
                    navData.isActive
                      ? " border-b-[2px] border-black py-4"
                      : "py-4"
                  }
                >
                  Products
                </NavLink>
                {/* <NavLink
                  to="posts"
                  className={(navData) =>
                    navData.isActive
                      ? " border-b-[2px] border-black py-4"
                      : "py-4"
                  }
                >
                  Posts
                </NavLink> */}
              </div>
            </div>
          </div>

          {/* right header */}
          <div className="flex justify-between items-center gap-4 cursor-pointer ">
            <div className="flex flex-row rounded-full md:px-3 md:gap-3 items-center hover:bg-gray-200 bg-gray-100 md:py-2 pr-2 max-md:w-[120px] max-w-[200px] ">
              <i class="fa-solid fa-magnifying-glass w-5 h-5 max-md:p-5 text-lg rounded-full flex justify-center items-center" onClick={() => setOpenSearch(true)}></i>
              <input
                className={`px-1 outline-none bg-transparent text-lg w-full  ${openSearch ? "block": "hidden"}`}
                type="text"
                placeholder="Search"
              />
            </div>

            <div className="md:block hidden z-50 ">
              <NavLink to="favorites"
                className={(navData) =>
                  navData.isActive ? "text-[#6246ea]" : ""
                }
              >
                <i class="fa-regular fa-heart text-xl h-10 w-10 flex justify-center items-center p-3 hover:bg-slate-100 rounded-full" ></i>
              </NavLink>
            </div>

            <div className="md:block  z-10">
            <NavLink
                className={(navData) =>
                  navData.isActive ? "text-[#6246ea]" : ""
                }  to="cart" >
                <i class="fa-solid fa-bag-shopping text-xl h-10 w-10 flex justify-center items-center p-3 hover:bg-slate-100 rounded-full"></i>
              </NavLink>
            </div>
            <NavLink
              to="login"
              className={(navData) =>
                navData.isActive ? "text-[#6246ea]" : ""
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
      <div className="flex absolute top-0 left-0 w-full leading-6 text-lg">
        <div className={menuClasses}>
          <NavLink
            to="/"
            className={(navData) =>
              navData.isActive ? "text-[#6246ea]" : "text-white"
            }
            onClick={() => setMenu(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            className={(navData) =>
              navData.isActive ? "text-[#6246ea]" : "text-white"
            }
            onClick={() => setMenu(false)}
          >
            About
          </NavLink>
          <NavLink
            to="products"
            className={(navData) =>
              navData.isActive ? "text-[#6246ea]" : "text-white"
            }
            onClick={() => setMenu(false)}
          >
            Products
          </NavLink>
          {/* <NavLink
            to="posts"
            className={(navData) =>
              navData.isActive ? "text-[#6246ea]" : "text-white"
            }
            onClick={() => setMenu(false)}
          >
            Posts
          </NavLink> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
