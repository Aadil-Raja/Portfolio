import React,{useState} from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll';

function NavBar() {
    const [nav,setNav]=useState(false);
    const Links = [
        { id: 1, link: 'home' },
        { id: 2, link: 'about' },
        { id: 3, link: 'portfolio' },
        { id: 4, link: 'experience' }
        
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 text-white fixed bg-black px-4">
            <h1 className="text-5xl font-signature">Welcome</h1>
            <ul className="hidden md:flex">
                {
                Links.map(({ id, link }) => {
                    return (
                        <li key={id} className="px-4 cursor-pointer capitalize text-gray-500 hover:scale-105 duration-200">
                           <Link to={link} smooth duration={500} >{link}</Link>
                            
                        </li>
                    );
                })
                
                }
            </ul>
     
        </div>
    );
}

export default NavBar;
