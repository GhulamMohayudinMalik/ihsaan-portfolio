import React from "react";
import Link from "next/link";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const Contact = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center ">
      <div className={caveat.className}>
        <p className="text-3xl font-semibold p-12 text-gray-500/70 -rotate-8">
          Tap this 'tiny' button to <br /> highlight your product =)
        </p>
      </div>


      <button
        className="relative flex items-center justify-center w-[600px] h-[200px] overflow-hidden rounded-[128px]
  bg-linear-to-b from-[#e6e6e6] to-[#a6a6a6]
  shadow-[inset_0_-8px_3px_rgb(200,200,200),inset_0_8px_2px_rgb(255,255,255),0_10px_0_rgb(140,140,140),0_18px_25px_rgba(0,0,0,0.4)]
  rotate-3 transform-[perspective(900px)_rotateX(15deg)_rotateY(-3deg)]
  transition-all duration-500 hover:transform-[perspective(900px)_rotateX(8deg)_rotateY(-1deg)_translateY(2px)]
  hover:shadow-[inset_0_-5px_2px_rgb(180,180,180),inset_0_6px_2px_rgb(255,255,255),0_8px_0_rgb(120,120,120),0_16px_30px_rgba(0,0,0,0.5)]
  active:transform-[perspective(900px)_rotateX(2deg)_translateY(6px)]
  active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.5),0_2px_0_rgb(60,60,60)]">

        <div
          className="absolute inset-2 rounded-[110px] bg-black
    shadow-[0_5px_0_4px_rgb(0,0,0),0_16px_8px_rgba(0,0,0,0.4),0_24px_12px_rgba(0,0,0,0.4),0_64px_128px_rgba(0,0,0,0.25)]
    transform-[translateZ(20px)]">
      
          <div
            className="absolute inset-0 rounded-[110px] bg-linear-to-b from-[#424242] to-[#2b2b2b]
      shadow-[inset_0_-3px_1px_rgba(255,255,255,0.1),inset_0_12px_6px_rgba(0,0,0,0.2)]
      flex items-center justify-center"
          >
            <span
              className="text-[128px] font-medium tracking-[-2px]
        font-['Inter','sans-serif']
        bg-linear-to-b from-white/90 to-white bg-clip-text text-transparent select-none
        drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
            >
              Connect
            </span>
          </div>
        </div>

        <div
          className="absolute inset-0 bg-linear-to-l
    from-[rgba(254,238,134,0.5)] via-[rgba(255,213,0,0.9)] to-[rgba(255,239,133,0.6)]
    rounded-[600%/900%] blur-2xl opacity-0 rotate-[5deg] origin-center
    transition-opacity duration-500 hover:opacity-100"
        ></div>
        <div
          className="absolute inset-0 bg-linear-to-l
    from-[rgba(254,238,134,0.5)] via-[#ffd900] to-[rgba(255,239,133,0.5)]
    rounded-[1600%/2800%] blur-2xl opacity-0 rotate-[4deg] origin-center
    transition-opacity duration-500 hover:opacity-100"
        ></div>
      </button>
    </div>
  );
};

export default Contact;
