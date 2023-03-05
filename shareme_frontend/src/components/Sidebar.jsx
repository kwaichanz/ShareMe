import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { RiHomeFill } from 'react-icons/ri'
import { IoIosArrowForward } from 'react-icons/io'

import logo from '../assets/logo.png'

const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 hover:text-black transtition-all duration-200 ease-in-out capitalize'

const Sidebar = ({ user, closeToggle }) => {

  const handleCloseSideBar = () => {
    if (closeToggle) closeToggle(false);
  }

  return (
    <div className='flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar'>
      <div className="flex flex-col">
        <Link
          to="/"
          className='flex px-5 gap-2 my-6 pt-1 w-190 items-center'
          onClick={handleCloseSideBar}
        >
          <img src={logo} alt="logo" className='w-full' />
        </Link>
      </div>
      <div className='flex flex-col gap-5'>
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}
        >

        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar