import React from 'react';
import ProfilePicture from '../assets/ProfilePicture.jpg'
import { MdKeyboardArrowRight } from "react-icons/md";

export const Home = () => {
  return (
<div  name="home" className="h-screen w-full text-white bg-gradient-to-b from-black to-gray-800"> 
    <div className="max-w-screen-lg mx-auto flex flex-col
    items-center justify-center h-full px-4 md:flex-row">
        
        <div>
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Juinor @ FAST University</h2>
            <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                Porfolio
                <MdKeyboardArrowRight/>
            </button>
        </div>
        <div>
           
        </div>
        <div>
          <img
            src={ProfilePicture}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
    </div>
    
</div>
  )
}

export default Home;