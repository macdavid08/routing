import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "./Menu";

export const NavLinks = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <>
      <div className=" w-full flex items-center justify-between p-4 relative">
        <div className="flex items-center space-x-2">
          <span className="  bg-violet-600 p-3 rounded-full text-white">
            <svg
              className=" w-7 font-bold md:w-10 xl:w-16 "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </span>
          <h2 className=" font-poppins text-xl  text-violet-800 font-bold uppercase md:text-xl xl:text-3xl  ">
            <NavLink to={"/"}>HomePage</NavLink>
          </h2>
        </div>
        <div className="hidden lg:flex">
          <ul className="  flex items-center justify-between lg:space-x-5 uppercase font-semibold">
            <li>
              <NavLink
                to={"/product"}
                className={({ isActive }) => {
                  return isActive ? "text-violet-700" : "";
                }}
              >
                Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) => {
                  return isActive ? "text-violet-700" : "";
                }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className={({ isActive }) => {
                  return isActive ? "text-violet-700" : "";
                }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="lg:hidden z-auto" onClick={handleToggle}>
          {!toggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
      {toggle ? <Menu   flip={toggle} change={handleToggle} /> : null}
      </div>
      
    </>
  );
};
