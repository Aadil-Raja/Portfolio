import React from 'react'
import car1 from '../assets/car1.jpg'
import car2 from '../assets/car2.jpg'
import car3 from '../assets/car3.jpg'
import car4 from '../assets/car4.jpg'

export const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: car1
        },
        {
            id: 2,
            src: car2
        },
        {
            id: 3,
            src: car3
        },
        {
            id: 4,
            src: car4
        },
    ]

    return (
        <div name="portfolio" className="h-screen w-full text-white bg-gradient-to-b from-black to-gray-800">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"> 
                <div className="pb-8">
                    <p className="text-4xl font-bold inline">Portfolio</p>
                    <p className="py-6">Check out my work right here</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img src={src} alt={`Portfolio ${id}`} className="rounded-md duration-200 hover:scale-105"/>
                            <div className="flex items-center justify-center">
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
