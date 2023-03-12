import React , { useState} from 'react';
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {

  const[openLinks, setOpenLinks] = useState(false);

  function toggleMenu() {
    setOpenLinks(!openLinks)
    
  }
  
  return (
    <div className='flex flex-row sticky top-0 justify-between p-8 bg-gradient-to-r from-pink-100 to-pink-50 text-black px-12 items-center  lg:px-24'>
      <div>
        <Link to="/" className='icon text-4xl font-semibold '><span className='text-yellow-400'>Food</span><span className='text-gray-700'>hub</span></Link>
      </div>
      <div className='flex hidden xl:block  flex-row space-x-16  space-x-8 nav-items text-xl font-medium items-center'>
        <Link to="/About" className='hover:border-b-2 hover:border-yellow-500 hover:rounded-b-sm'>About Us</Link>
        <Link to="/Menu" className='hover:border-b-2 hover:border-yellow-500 hover:rounded-b-sm'>Menu</Link>
        <Link to="" className='hover:border-b-2 hover:border-yellow-500 hover:rounded-b-sm'>Reviews</Link>
        <Link to="" className='hover:border-b-2 hover:border-yellow-500 hover:rounded-b-sm'>Blog</Link>
        <Link to="/contact" className='hover:border-b-2 hover:border-yellow-500 hover:rounded-b-sm'>Contact</Link>
        <Link to="" className='px-4 py-2 bg-yellow-300 hover:bg-pink-200 text-md text-white rounded-lg font-bold'>Book Now</Link>
      </div>

      {/* Hamburger menu */}
      <button id="menu-btn" className='flex flex-col space-y-1 hamburger xl:hidden focus:outline-none' onClick={toggleMenu}>
          <span className={ openLinks ? "hidden" : "hamburger-top"}></span>
          <span className={ openLinks ? "hidden " : "hamburger-middle"}></span>
          <span className={ openLinks ? "hidden " : "hamburger-bottom"}></span>
          <span className={ openLinks ? "p-2 mb-2 bg-red-500 text-white rounded-lg ": "hidden"}>Close</span>
      </button>

      {/* Mobile menu */}
      
      <div id="menu" className={ openLinks ? "absolute flex flex-col items-center lg:hidden self-end py-8 mt-96 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md" : "hidden"}>
        <Link to="/About" className='hover:border-b-2 hover:border-gray-500'>About Us</Link>
        <Link to="/Menu" className='hover:border-b-2 hover:border-gray-500'>Menu</Link>
        <Link to="" className='hover:border-b-2 hover:border-gray-500'>Reviews Us</Link>
        <Link to="" className='hover:border-b-2 hover:border-gray-500'>Blog</Link>
        <Link to="/contact" className='hover:border-b-2 hover:border-gray-500'>Contact</Link>
        <Link to="" className='px-4 py-2 bg-yellow-300 hover:bg-pink-200 text-md text-white rounded-lg font-bold'>Book Now</Link>
      </div>
      
    </div>
  )
}
