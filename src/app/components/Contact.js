'use client';
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


      {/* <button
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
      </button> */}

      {/* <button
  className="relative flex items-center justify-center w-[600px] h-[200px] overflow-hidden rounded-[128px]
    bg-gradient-to-b from-[#e6e6e6] to-[#a6a6a6]
    shadow-[inset_0_-8px_3px_rgb(200,200,200),inset_0_8px_2px_rgb(255,255,255),0_10px_0_rgb(140,140,140),0_18px_25px_rgba(0,0,0,0.4)]
    rotate-3 transform-[perspective(900px)_rotateX(15deg)_rotateY(-3deg)]
    transition-all duration-500 hover:transform-[perspective(900px)_rotateX(8deg)_rotateY(-1deg)_translateY(2px)]
    hover:shadow-[inset_0_-5px_2px_rgb(180,180,180),inset_0_6px_2px_rgb(255,255,255),0_8px_0_rgb(120,120,120),0_16px_30px_rgba(0,0,0,0.5)]
    active:transform-[perspective(900px)_rotateX(2deg)_translateY(6px)]
    active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.5),0_2px_0_rgb(60,60,60)]"
>
  <div
    className="absolute inset-2 rounded-[110px] bg-black
      shadow-[0_5px_0_4px_rgb(0,0,0),0_16px_8px_rgba(0,0,0,0.4),0_24px_12px_rgba(0,0,0,0.4),0_64px_128px_rgba(0,0,0,0.25)]
      transform-[translateZ(20px)]"
  >
    <div
      className="absolute inset-0 rounded-[110px] bg-gradient-to-b from-[#424242] to-[#2b2b2b]
      shadow-[inset_0_-3px_1px_rgba(255,255,255,0.1),inset_0_12px_6px_rgba(0,0,0,0.2)]
      flex items-center justify-center"
    >
      <span
        className="text-[128px] font-medium tracking-[-2px]
        font-['Inter','sans-serif']
        bg-gradient-to-b from-white/90 to-white bg-clip-text text-transparent select-none
        drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        Connect
      </span>
    </div>
  </div>

  <div
    className="absolute inset-0 rounded-[128px]
    bg-[radial-gradient(circle_at_center,rgba(255,230,120,0.8)_0%,rgba(255,220,0,0.3)_30%,transparent_70%)]
    blur-[60px] opacity-0 transition-opacity duration-500 hover:opacity-100 pointer-events-none"
  ></div>

  <div
    className="absolute inset-0 rounded-[128px]
    bg-[radial-gradient(circle_at_center,rgba(255,255,180,0.4)_0%,rgba(255,200,0,0.2)_40%,transparent_90%)]
    blur-[90px] opacity-0 transition-opacity duration-500 hover:opacity-80 pointer-events-none"
  ></div>
</button> */}

{/* <div className="relative inline-block">
  <div
    className="absolute inset-0 bg-gradient-to-r
    from-[rgba(254,238,134,0.5)] via-[rgba(255,213,0,0.9)] to-[rgba(255,239,133,0.6)]
    rounded-[128px] blur-3xl opacity-0 
    transition-opacity duration-500 group-hover:opacity-100
    scale-110"
  ></div>
  <div
    className="absolute inset-0 bg-gradient-to-r
    from-[rgba(254,238,134,0.5)] via-[#ffd900] to-[rgba(255,239,133,0.5)]
    rounded-[128px] blur-2xl opacity-0
    transition-opacity duration-500 group-hover:opacity-100
    scale-105"
  ></div>

  <button
    className="group relative flex items-center justify-center w-[600px] h-[200px] overflow-visible rounded-[128px]
      bg-gradient-to-b from-[#e6e6e6] to-[#a6a6a6]
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
        className="absolute inset-0 rounded-[110px] bg-gradient-to-b from-[#424242] to-[#2b2b2b]
        shadow-[inset_0_-3px_1px_rgba(255,255,255,0.1),inset_0_12px_6px_rgba(0,0,0,0.2)]
        flex items-center justify-center"
      >
        <span
          className="text-[128px] font-medium tracking-[-2px]
          font-['Inter','sans-serif']
          bg-gradient-to-b from-white/90 to-white bg-clip-text text-transparent select-none
          drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
        >
          Connect
        </span>
      </div>
    </div>
  </button>
</div> */}

<div className="flex items-center justify-center p-16">
      <div className="relative inline-block group">
        {/* Glow layers - positioned outside */}
        <div
          className="absolute inset-0 rounded-[128px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(254,238,134,0.8), rgba(255,213,0,1), rgba(255,239,133,0.8))',
            filter: 'blur(60px)',
            transform: 'scale(1.3)',
          }}
        ></div>
        <div
          className="absolute inset-0 rounded-[128px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(254,238,134,0.7), #ffd900, rgba(255,239,133,0.7))',
            filter: 'blur(45px)',
            transform: 'scale(1.2)',
          }}
        ></div>
        <div
          className="absolute inset-0 rounded-[128px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, rgba(255,213,0,0.9), rgba(255,213,0,0.3), transparent)',
            filter: 'blur(35px)',
            transform: 'scale(1.15)',
          }}
        ></div>

        <button
          className="relative flex items-center justify-center w-[600px] h-[200px] rounded-[128px] transition-all duration-500"
          style={{
            background: 'linear-gradient(to bottom, #e6e6e6, #a6a6a6)',
            boxShadow: `
              inset 0 -8px 3px rgb(200,200,200),
              inset 0 8px 2px rgb(255,255,255),
              0 10px 0 rgb(140,140,140),
              0 18px 25px rgba(0,0,0,0.4)
            `,
            transform: 'perspective(900px) rotateX(15deg) rotateY(-3deg) rotate(3deg)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'perspective(900px) rotateX(8deg) rotateY(-1deg) translateY(2px) rotate(3deg)';
            e.currentTarget.style.boxShadow = `
              inset 0 -5px 2px rgb(180,180,180),
              inset 0 6px 2px rgb(255,255,255),
              0 8px 0 rgb(120,120,120),
              0 16px 30px rgba(0,0,0,0.5)
            `;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'perspective(900px) rotateX(15deg) rotateY(-3deg) rotate(3deg)';
            e.currentTarget.style.boxShadow = `
              inset 0 -8px 3px rgb(200,200,200),
              inset 0 8px 2px rgb(255,255,255),
              0 10px 0 rgb(140,140,140),
              0 18px 25px rgba(0,0,0,0.4)
            `;
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = 'perspective(900px) rotateX(2deg) translateY(6px) rotate(3deg)';
            e.currentTarget.style.boxShadow = `
              inset 0 2px 4px rgba(0,0,0,0.5),
              0 2px 0 rgb(60,60,60)
            `;
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = 'perspective(900px) rotateX(8deg) rotateY(-1deg) translateY(2px) rotate(3deg)';
            e.currentTarget.style.boxShadow = `
              inset 0 -5px 2px rgb(180,180,180),
              inset 0 6px 2px rgb(255,255,255),
              0 8px 0 rgb(120,120,120),
              0 16px 30px rgba(0,0,0,0.5)
            `;
          }}
        >
          <div
            className="absolute rounded-[110px] bg-black"
            style={{
              inset: '8px',
              boxShadow: `
                0 5px 0 4px rgb(0,0,0),
                0 16px 8px rgba(0,0,0,0.4),
                0 24px 12px rgba(0,0,0,0.4),
                0 64px 128px rgba(0,0,0,0.25)
              `,
            }}
          >
            <div
              className="absolute inset-0 rounded-[110px] flex items-center justify-center"
              style={{
                background: 'linear-gradient(to bottom, #424242, #2b2b2b)',
                boxShadow: `
                  inset 0 -3px 1px rgba(255,255,255,0.1),
                  inset 0 12px 6px rgba(0,0,0,0.2)
                `,
              }}
            >
              <span
                className="text-[128px] font-medium tracking-[-2px] select-none"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  background: 'linear-gradient(to bottom, rgba(255,255,255,0.9), white)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.6))',
                }}
              >
                Connect
              </span>
            </div>
          </div>
        </button>
      </div>
    </div>
    </div>
  );
};

export default Contact;
