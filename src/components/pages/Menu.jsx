import React from 'react'
import { NavLink } from 'react-router-dom';
import { createPortal } from 'react-dom';

export const Menu = ({flip}) => {
    const content = (
       <>
       <nav className='w-full h-auto absolute top-20 bg-gray-100  '>
            <ul className= "flex flex-col items-start justify-end gap-y-2 w-full p-4 uppercase font-semibold top-10    ">
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
       </nav>
        
       </>
    )
    const dir = document.getElementById("menu")
  return (
   createPortal(content,dir)
  )
}
