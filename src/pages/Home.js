import React from 'react'
import "../styles/Home.css"
import { Link } from "react-router-dom";
import burgerImage from "../assets/burger.png";
import homeFood2 from "../assets/healthy_food.png";
import Menu from "./Menu"

export default function Home() {
  return (
    <div className='bg-gradient-to-r from-pink-100 to-pink-50'> 
    <div className='flex flex-col md:flex-row space-between h-full py-12 md:py-0  mx-auto  px-4  lg:px-12 xl:px-24 items-center justify-center'>
        <div className='home-container flex flex-col justify-center items-center md:items-start space-y-6 md:w-2/5  h-1/2 p-4 md:p-auto'>
          <h1 className='flex flex-col text-5xl lg:text-7xl font-bold text-gray-700 '><span>We deliver </span><span>the taste,As </span><span>you like.</span></h1>
          <p className='text-gray-500 text-2xl lg:text-2xl font-semibold overflow-hidden overflow-ellipsis md:block hidden'>We deliver the delicious food for you.</p>
          <Link to="/Menu" className='px-8 py-4 bg-gray-800 w-60 text-center hover:bg-gray-500 hover:text-white text-xl text-white rounded-2xl font-bold'>Explore Our Menu</Link>
        </div>
        <div className='flex  md:w-3/5  justify-center object-none object-center items-center mb-8 md:mt-14 h-1/2'>
          <img src={burgerImage}></img>
        </div>
    </div>
    <div className='flex flex-col md:flex-row-reverse space-between h-full py-12 md:py-0  mx-auto  px-4  lg:px-12 xl:px-24 items-center justify-center'>
        <div className='home-container flex flex-col justify-center items-center md:items-start space-y-6 md:w-2/5  h-1/2 p-4 md:p-auto'>
          <h1 className='flex flex-col text-5xl lg:text-7xl font-bold text-gray-700'><span>Food hygiene </span><span>rating helps you</span><span>choose where to</span><span>eat out.</span></h1>
          <p className='text-gray-500 text-2xl lg:text-2xl font-semibold overflow-hidden overflow-ellipsis md:block hidden'>Welcome to our FoodHub come in & stay a while</p>
          <Link to="/Menu" className='px-8 py-4 bg-gray-800 w-60 text-center hover:bg-gray-500 hover:text-white text-xl text-white rounded-2xl font-bold'>Explore More</Link>
        </div>
        <div className='flex  md:w-3/5  justify-center object-none object-center items-center mt-0 md:mt-14 h-1/2'>
          <img src={homeFood2}></img>
        </div>
    </div>
    <Menu />
    </div>
  )
}

