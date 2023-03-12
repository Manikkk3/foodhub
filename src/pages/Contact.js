import React from 'react'
import contact_img from "../assets/contact_image.jpg"

function Contact() {
  return (
    <div className='  bg-gradient-to-r from-pink-100 to-pink-50  px-auto justify-center'>
        {/* <div className='w-1/3 '>
        <img src={contact_img} className="h-screen"></img>
        </div> */}
        <div className=' flex flex-col px-4 md:px-8 lg:px-60 py-24 mx-4 md:mx-8  '>
            <h1 className='font-bold text-4xl text-gray-700 flex items-center justify-center'>Contact Us</h1>
            <form method='POST' className='flex flex-col p-4 my-8'>
                <label htmlFor='name'>Full Name</label>
                <input type="text"name='name' placeholder="Enter full name..." className='focus:outline-none border-b-2 border-gray-700 placeholder-gray-700 bg-transparent'></input>

                <label htmlFor='email' className='pt-10'>Email</label>
                <input type="mail" name="email" placeholder="Enter email..." className='focus:outline-none border-b-2 border-gray-700 placeholder-gray-700 bg-transparent'></input>

                <label htmlFor='message' className='pt-10'>Message</label>
                <textarea rows="6" placeholder="Enter message..." name="message" className='focus:outline-none border-b-2 border-gray-700 placeholder-gray-700 bg-transparent'></textarea>

                <button className='bg-gradient-to-r from-pink-400 to-pink-200 text-white font-bold  w-48 py-4 mt-12 rounded-lg hover:from-pink-600 hover:to-pink-700'>Send Message</button>
            </form>
        </div>
        
    </div>
  )
}

export default Contact