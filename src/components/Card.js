import React from 'react';
import "../styles/Menu.css";
import Menufood from "../assets/menuFood1.jpg"

function Card(props) {
  return (
    <div className='card flex flex-col flex-nowrap bg-white  mx-auto overflow-x-auto rounded-lg'>
        <div className=''>
            {/* <img src={`../assets/${props.item.img}`} alr=""></img> */}
            <img src={props.item.img} className="w-full"></img>
        </div>
        <div className='flex flex-col py-4 px-4 space-y-2'>
            <h3 className='overflow-hidden overflow-ellipsis font-bold text-2xl text-gray-800'>{props.item.title}</h3>
            <p className='mt-auto text-xl font-bold text-yellow-400'><span>$</span>{props.item.price}</p>
        </div>

    </div>
  )
}

export default Card