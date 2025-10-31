import React from 'react'
import { Inter } from "next/font/google";

const interDisplay = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const Navbar = () => {
  return (
    <div className={interDisplay.className}>
      <nav className="w-full p-3 flex justify-center items-center fixed z-10">
        <ul className="flex gap-3 bg-[rgb(64,63,63,0.93)] items-center text-gray-300/70 font-medium text-xl pl-2 pr-1 py-1 rounded-full">
          <li className="hover:text-gray-200 cursor-pointer">☀️</li>
          <li className="hover:text-gray-200 cursor-pointer">Work</li>
          <li className="hover:text-gray-200 cursor-pointer">Story</li>
          <li className="hover:text-gray-200 cursor-pointer">Process</li>
          <li className="hover:text-gray-200 cursor-pointer">Connect</li>
          <li className="cursor-pointer text-yellow-300 bg-[rgb(95,90,54)] hover:bg-yellow-400/30 py-1 px-3 rounded-3xl">Start project</li>
        </ul>
      </nav>
    </div>
    
  )
}

export default Navbar
