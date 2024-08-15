import React from 'react'
import car1 from '../assets/car1.jpg'
import car2 from '../assets/car2.jpg'
import car3 from '../assets/car3.jpg'
import car4 from '../assets/car4.jpg'

export const Experience = () => {
    const techs = [
        {
            id:1,
            src:car1,
            title:"HTML",
            style:'shadow-orange-500',
        },
        {
            id:2,
            src:car2,
            title:"CSS",
            style:'shadow-blue-500',
        },
        {
            id:3,
            src:car3,
            title:"JS",
            style:'shadow-yellow-500',
        },

    ]
  return (
   <div name="experience" className="h-screen w-full bg-gradient-to-b from-black to-gray-800">
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
        <div>
            <p className="text-4xl font-bold inline">Experiecnce</p>
            <p className="py-6">These are the technoglogies i have worked with</p>
        </div>
        <div className="w-full grid sm:grid-cols-3 grid-cols-2 gap-8 text-center px-12 sm:px-0">
            {
               techs.map(({id,src,title,style})=>(
                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} className="w-20 mx-auto"/>
                <p className="mt-4 ">{title}</p>
            </div>

               )) 
            }
            
        </div>
    </div>
   </div>
  )
}

export default Experience;