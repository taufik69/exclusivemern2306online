import React, { useState, useRef, useEffect } from "react";
import { BsCart } from "react-icons/bs";
import { FaRegHeart, FaUser } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import { ImCancelCircle } from "react-icons/im";
import { IoMdStarOutline } from "react-icons/io";
import { LuShoppingBag, LuUser } from "react-icons/lu";
import { RiLogoutCircleLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const navItem = [
    {
      id: 1,
      item: "Home",
    },

    {
      id: 2,
      item: "Contact",
    },

    {
      id: 3,
      item: "About",
    },

    {
      id: 4,
      item: "SignUp",
    },
  ];
  const [account, setAccount] = useState(false);

  const handleAccount = () => {
    setAccount(!account);
  };

  return (
    <div className="pt-10 pb-4 border-b-[1.5px] border-b-text_black7D8184">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[24px] font-bold font-inter text-text_black000000 cursor-pointer hover:text-black_363738">
              Exclusive
            </h1>
          </div>
          <div>
            <ul className="flex items-center gap-x-[48px]">
              {navItem?.map((nav) => (
                <li key={nav.id} className="menuUnderLine">
                  <NavLink
                    to={`/${nav.item}`}
                    className={({ isPending, isActive }) =>
                      isPending
                        ? "text-black text-[17px] font-normal font-popins"
                        : isActive
                        ? "text-red-500 text-[17px] font-normal font-popins"
                        : "text-black text-[17px] font-normal font-popins"
                    }
                  >
                    {nav.item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="basis-1/3  relative  flex items-center justify-between">
            <div>
              <input
                type="text"
                className="py-2 bg-white_F5F5F5 rounded px-8  "
                placeholder="What are you looking for?"
              />
              <span className="absolute top-1/2 -translate-y-1/2 text-xl right-[41%]">
                <FcSearch />
              </span>
            </div>
            <div className="flex items-center gap-x-[20px] relative">
              <span className="text-text_black7D8184 text-2xl cursor-pointer">
                <FaRegHeart />
              </span>
              <span className="text-text_black7D8184 text-2xl amount cursor-pointer">
                <BsCart />
              </span>
              <span
                className="text-text_whiteFAFAFA text-xl rounded-full bg-redDB4444 p-2 cursor-pointer relative"
                onClick={handleAccount}
              >
                <FaUser />
              </span>
              {account && (
                <div
                  className={`absolute right-[0%] top-[150%] z-30 bg-[rgba(0,0,0,0.68)] w-[600px] flex flex-col gap-y-5 py-7 rounded `}
                >
                  <div className="flex items-center gap-x-2 hover:bg-white_F5F5F5 hover:py-3 transition-all hover:text-text_black000000 text-white_F5F5F5 pl-5 hover:cursor-pointer">
                    <span className=" text-3xl ">
                      <LuUser />
                    </span>
                    <h3 className="text-xl font-normal font-popins ">
                      Manage My Account
                    </h3>
                  </div>
                  <div className="flex items-center gap-x-2 hover:bg-white_F5F5F5 hover:py-3 transition-all  hover:text-text_black000000 text-text_whiteFAFAFA pl-5 hover:cursor-pointer">
                    <span className=" text-3xl">
                      <LuShoppingBag />
                    </span>
                    <h3 className="text-xl font-normal font-popins">
                      My Order
                    </h3>
                  </div>
                  <div className="flex items-center gap-x-2 hover:bg-white_F5F5F5 hover:py-3 transition-all  hover:text-text_black000000 text-text_whiteFAFAFA pl-5 hover:cursor-pointer">
                    <span className=" text-3xl">
                      <ImCancelCircle />
                    </span>
                    <h3 className=" text-xl font-normal font-popins">
                      My Cancellations
                    </h3>
                  </div>
                  <div className="flex items-center gap-x-2 hover:bg-white_F5F5F5 hover:py-3 transition-all  hover:text-text_black000000 text-text_whiteFAFAFA pl-5 hover:cursor-pointer">
                    <span className=" text-3xl">
                      <IoMdStarOutline />
                    </span>
                    <h3 className="text-xl font-normal font-popins">
                      My Reviews
                    </h3>
                  </div>
                  <div className="flex items-center gap-x-2 hover:bg-white_F5F5F5 hover:py-3 transition-all  hover:text-text_black000000 text-text_whiteFAFAFA pl-5 hover:cursor-pointer">
                    <span className="text-3xl">
                      <RiLogoutCircleLine />
                    </span>
                    <h3 className="text-xl font-normal font-popins">Logout</h3>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
