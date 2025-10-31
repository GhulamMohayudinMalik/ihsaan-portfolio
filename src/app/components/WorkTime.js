'use client';
import {React } from 'react';

import { useState } from 'react';

const LogoCard = ({ image, name, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="flex flex-col items-center gap-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative w-40 h-32 transition-transform duration-300 hover:scale-105">
        {/* Shadow layer */}
        <div 
          className="absolute inset-0 rounded-lg"
          style={{
            filter: 'drop-shadow(0px 3px 2px rgba(0, 0, 0, 0.2)) drop-shadow(0px 6px 5px rgba(0, 0, 0, 0.15))',
            transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
            transition: 'transform 0.3s ease'
          }}
        >
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        
        {/* Shine effect overlay */}
        <div 
          className="absolute inset-0 rounded-lg overflow-hidden"
          style={{
            maskImage: `url(${image})`,
            maskSize: 'cover',
            maskPosition: 'center',
            maskRepeat: 'no-repeat',
            WebkitMaskImage: `url(${image})`,
            WebkitMaskSize: 'cover',
            WebkitMaskPosition: 'center',
            WebkitMaskRepeat: 'no-repeat'
          }}
        >
          <img 
            src={image} 
            alt=""
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-linear(132deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 2.96%, rgba(255, 255, 255, 0.5) 17%, rgba(255, 255, 255, 0) 22%)',
              transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)',
              transition: 'transform 0.6s ease'
            }}
          />
        </div>
      </div>
      
      <p className="text-xl font-medium text-black/50 text-center">
        {name}
      </p>
    </div>
  );
};

export default function LogosSection() {
  const companies = [
    {
      name: 'Halo Lab',
      image: 'https://framerusercontent.com/images/eBYztVt0PnYp0ytP1w4rDOS1tk.png'
    },
    {
      name: 'Heartbeat',
      image: 'https://framerusercontent.com/images/yHxJg0SzWYXGsay8YaXqNltgKRQ.png'
    },
    {
      name: 'Ooze',
      image: 'https://framerusercontent.com/images/osAM0zgw9tmXnVl1tkOFgnew0w.png'
    },
    {
      name: 'O0 design',
      image: 'https://framerusercontent.com/images/1lgnv5CqSRxGqZ3821ZUBZQXE.png'
    },
    {
      name: 'Clerk',
      image: 'https://framerusercontent.com/images/Rg6clVbphoJGYoYMG0l8kSF3pf4.png'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-linear-to-b from-gray-50 to-white py-20 px-8">
      <div className="max-[90vw] mx-auto">
        {/* Header text */}
        <div className="text-center mb-16">
          <p 
            className="text-3xl font-bold text-black/40 inline-block"
            style={{
              fontFamily: 'Caveat, cursive',
              transform: 'rotate(4deg)',
              letterSpacing: '-1px',
              lineHeight: '0.96'
            }}
          >
            Every experience in my life is important and has taught me a lot
          </p>
        </div>

        {/* Logo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-start justify-items-center">
          {companies.map((company, index) => (
            <LogoCard
              key={company.name}
              name={company.name}
              image={company.image}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </div>
  );
}