import React from 'react'
import healthyFood from "../assets/healthy_food.png"

function About() {
  return (
    <div className='flex flex-col items-center space-y-12 pt-4 bg-gradient-to-r from-pink-100 to-pink-50 h-full px-4 py-12 md:px-12 lg:px-24'>
        <div className='flex justify-center items-center h-1/2'>
            <img src={healthyFood} className="w-96"></img>
        </div>
        <div className='flex flex-col space-y-4 items-center h-1/2'>
        <h2 className='font-bold text-4xl text-gray-700'>About Us</h2>
        <p className='font-semibold text-2xl text-gray-800'>
        Foodhub is a website that provides healthy food options to its users. It focuses on promoting a healthy lifestyle through the provision of nutritious and well-balanced meals. The website offers a wide variety of meals to choose from, including options for different dietary restrictions and preferences such as gluten-free, vegetarian, and low-carb. Foodhub prioritizes the use of fresh, high-quality ingredients in all of its dishes to ensure that customers receive the maximum nutritional benefit. In addition, the website also provides information and resources about healthy eating habits and lifestyle choices to help customers achieve their health and wellness goals. Overall, Foodhub is a comprehensive platform that supports and encourages healthy eating habits.
        </p>
        </div>
    </div>
  )
}

export default About