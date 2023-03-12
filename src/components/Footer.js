import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className='flex flex-col h-32 bg-gradient-to-r from-pink-100 to-pink-50 items-center justify-center space-y-12'>
        <div className='flex flex-row space-x-11'>
            <Link to={{pathname: "https://www.instagram.com/wholesome_manik/"}} target="_blank"><i class="fa-brands fa-instagram fa-2xl"></i></Link>
            <Link to={{pathname: "https://www.linkedin.com/in/manik-acharya-1698181b7/"}} target="_blank"><i class="fa-brands fa-linkedin fa-2xl"></i></Link>
            <Link to={{pathname: "https://twitter.com/acharyamanik7"}} target="_blank"><i class="fa-brands fa-twitter fa-2xl"></i></Link>
            <Link to={{pathname: "https://www.youtube.com/@duluwa7179"}} target="_blank"><i class="fa-brands fa-youtube fa-2xl"></i></Link>
        </div>
        <p> &copy; 2023 Manik Acharya</p>
    </div>
  )
}

export default Footer