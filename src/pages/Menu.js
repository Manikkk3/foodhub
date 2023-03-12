import React from 'react'
import Menulist from "../helper/menuList";
import Card from "../components/Card"

function Menu() {

  const cards = Menulist.map(item => {
    return(
      <Card 
        key={item.id}
        item={item}
      />
    )
  })
  return ( 
    <div className='flex flex-col  px-12 py-12 lg:px-24 h-full bg-gradient-to-r from-pink-100 to-pink-50 pt-12 space-y-10  space-y-12'>
       <div>
        <h1 className='font-bold text-4xl md:text-7xl text-gray-800 '>Check our delicious menu</h1>
       </div>
       <div className='grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {cards}
       </div>
    </div>
  )
}

export default Menu