import React from 'react'
import logo from "../assets/logo.png"
import search from '../assets/search.png'
import menu from "../assets/menu.png"

const Navbar = () => {
  return (
    <section className='mt-7 py-5 px-6'>
        <div className=' flex flex-row justify-around  items-center'>
        <img src={logo} alt="logo"
        className='w-[124px] h-[124px] ' />
        
        <ul className=' flex flex-row gap-8 text-[14px] font-semibold  justify-center items-center text-gray-500 uppercase mr-3' 
        style={{letterSpacing: "1.4px"}}>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Menu</li>
        </ul>
        
        <div style={{letterSpacing: "1.4px"}}  class="relative w-1/2 flex flex-row">
            <input type="text" placeholder="SEARCH" class="w-full py pl-2 pr-10 text-[14px] text-gray-600 border-b-2 border-gray-300 focus:outline-none focus:border-gray-400 placeholder-gray-400"/>
            <img src={search} alt="search icon" class="absolute w-6 h-6 right-3 top-1/2 transform -translate-y-1/2"/>
        </div>

        <h2 className='text-[16px]  uppercase font-bold' style={{letterSpacing: "1.4px"}}>My basket</h2>

        <img src={menu} alt="menu"
        className='w-6 h-6 ' />
        </div>

    </section>
  )
}

export default Navbar