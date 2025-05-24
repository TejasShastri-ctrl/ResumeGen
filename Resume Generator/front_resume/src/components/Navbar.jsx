import React from 'react'
import { Link } from 'react-router'

import { BiLogOutCircle } from "react-icons/bi";
import { GrAchievement } from "react-icons/gr";

function Navbar() {
  return (
    <div className="navbar shadow-lg bg-base-100">
      <div className="navbar-start gap-2">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu font-bold shadow-2xl menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {/* <li><a as={Link} to={"/about"}>About</a></li> */}
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/services"}>Services</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
          </ul>
        </div>
        
        <Link className='btn btn-ghost tracking-wide outline rounded-full text-2xl' to ={"/home"}><GrAchievement size={30} color='teal'/> AIRes</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu font-bold menu-horizontal px-1 h-15">
          <li className='mx-2'><Link className='bg-primary rounded-full' to={"/about"}>About</Link></li>
          <li className='mx-2'><Link className='bg-primary rounded-full' to={"/services"}>Services</Link></li>
          <li className='mx-2'><Link className='bg-primary rounded-full' to={"/contact"}>Contact</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={"/home"}><BiLogOutCircle className='bg-red-900 rounded-full' size={30} color='red'/></Link>
      </div>
    </div>
  )
}

export default Navbar