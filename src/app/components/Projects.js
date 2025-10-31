'use client';
import React from 'react';

const ProjectCard = ({ title, services, image, rotation = -1, note }) => {
  const rotationClass = rotation > 0 ? 'rotate-[1.5deg]' : 'rotate-[-1deg]';
  
  return (
    <div className="group cursor-pointer h-full">
      <div className="rounded-4xl bg-white p-6 h-full flex flex-col">
        {/* Image Container */}
        <div className="flex-1 ">
          <div className={`relative rounded-2xl overflow-hidden border-[6px] border-white shadow-[rgba(0,0,0,0.12)_-2px_3px_3px_0px] ${rotationClass} transition-transform ${rotation > 0 ? 'group-hover:-rotate-2' : 'group-hover:rotate-2'}
           duration-300 ease-in-out`}>
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="space-y-4">
          {/* Title and Arrow */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-[32px] font-medium leading-none tracking-tight">
              {title}
            </h3>
            <div className="w-8 h-8 shrink-0">
              {/* Arrow placeholder */}
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-2">
            <p className="text-[20px] font-medium text-black/50 leading-[135%]">
              {services}
            </p>
            
            {/* Optional Note */}
            {note && (
              <p className="text-[20px] font-bold text-black/35" style={{ fontFamily: 'Caveat, cursive' }}>
                {note}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const PortfolioGrid = () => {
  const projects = [
    {
      title: "Ruby",
      services: "Branding, Web design, Development",
      image: "https://framerusercontent.com/images/rswgGpiYFoEy9fVZhbxz01GZqW8.png?width=1758&height=1092",
      rotation: -1,
    },
    {
      title: "Stimulate",
      services: "Branding, Web design, Illustrations, Development",
      image: "https://framerusercontent.com/images/xOAD945vNzB4ZNxwOOlGFoBoI.png?width=1803&height=1500",
      rotation: 1.5
    },
    {
      title: "Caldera",
      services: "Web design, development",
      image: "https://framerusercontent.com/images/F4OUDL5iGqjO9FJhsW24INIBb1I.png?width=1758&height=1366",
      rotation: 1.5
    },
    {
      title: "Reward Point",
      services: "Web design, Illustrations",
      image: "https://framerusercontent.com/images/NhKxPMQ81nEv4q4pclRzztFygM.png?width=1752&height=1116",
      rotation: -1
    },
    {
      title: "Memex",
      services: "Brand & product refresh, Web design",
      image: "https://framerusercontent.com/images/uDK4SqDaezrDJLHUNMP6J6YsG0.png?width=1752&height=1116",
      rotation: -1
    },
    {
      title: "Pix AI",
      services: "Branding, Illustrations",
      image: "https://framerusercontent.com/images/y21PZDf5cJJ7M7LY1kjt9GpfR4.png?width=1758&height=1092",
      rotation: 1.5,
      note: "backed in O0 Design team"
    },
    {
      title: "Polpis Systems",
      services: "Web design, Visual direction",
      image: "https://framerusercontent.com/images/LxMrJIsDqmsasVRkYaCUAlGgM.png?width=1758&height=1366",
      rotation: 1.5,
      note: "backed in O0 Design team"
    },
    {
      title: "Quantia",
      services: "Web design, Visual direction, Illustrations",
      image: "https://framerusercontent.com/images/d8sgy62MVj88nD6vAjCbN7vQL5U.png?width=2400&height=1484",
      rotation: -1
    },
    {
      title: "Hily",
      services: "Branding, visual direction",
      image: "https://framerusercontent.com/images/vWFGw4TANIG6ROQXG2Jde7VkqsA.png?width=1758&height=1366",
      rotation: 1.5,
      note: "backed in O0 Design team"
    },
    {
      title: "Deepengine",
      services: "Web design, Visual direction, Illustrations",
      image: "https://framerusercontent.com/images/qkXeKMdhxFxmpQ7X9P3LCmFjfE.png?width=1758&height=1092",
      rotation: -1,
      note: "created with Heartbeat team"
    }
  ];

  const gridPositions = [
    "col-span-4 row-span-4 col-start-5",
    "col-span-2 row-span-3 col-start-2 row-start-4",
    "col-span-2 row-span-3 col-start-6 row-start-7",
    "col-span-4 row-span-4 row-start-10",
    "col-span-4 row-span-4 col-start-5 row-start-12",
    "col-span-2 row-span-3 col-start-2 row-start-17",
    "col-span-2 row-span-3 col-start-5 row-start-19",
    "col-span-4 row-span-4 col-start-2 row-start-22",
    "col-span-4 row-span-5 col-start-1 row-start-27",
    "col-span-2 row-span-3 col-start-7 row-start-26"
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-pink-50 to-blue-50 pt-24">
      <div className="max-w-[95vw] mx-auto">
        {/* Custom Grid */}
        <div className="grid grid-cols-8 grid-rows-32 gap-4 mb-12">
          {projects.map((project, index) => (
            <div key={index} className={gridPositions[index]}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
        
        {/* Bottom Section */}
        <div className="flex flex-col items-center gap-6 py-12">
          <div className="w-32 h-32">
            <img 
              src="https://framerusercontent.com/images/lzonfTwKqTrl4OVxlFlGMrdgzJc.png?width=464&height=490" 
              alt="Turtle"
              className="w-full h-full object-contain"
            />
          </div>
          
          <p className="text-4xl md:text-5xl font-black text-center uppercase tracking-tight max-w-2xl" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            New cases are on the way, <strong>slowly but surely 😅</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioGrid;