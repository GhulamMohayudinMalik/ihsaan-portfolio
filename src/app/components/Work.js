import React from 'react'
import { Caveat } from "next/font/google";
import Projects from './Projects';

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const Work = () => {
  return (
    <div className='my-40 pt-40'>
        <div className='relative flex flex-col justify-center items-center'>
            <div className={caveat.className}>

            <p className="absolute text-3xl font-semibold p-12 text-gray-500/70 -rotate-8 -top-20">from 2020 'til today</p>
            </div>
            <div className='text-7xl uppercase font-black transform-[scaleY(1.3)] p-12'>My latest work</div>
        </div>
              <Projects />  
        
    </div>
  )
}

export default Work



