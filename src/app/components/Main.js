import React from 'react'
import Alphabet from './Alphabet'

const Home = () => {

  const fullName = [
    'MALIK'.split(''),
    'IHSAAN'.split('')
  ];

  return (
    <div>
      <main className="flex flex-col h-screen justify-end">
        <h2 className="text-4xl px-8 py-6 text-gray-600/70">
          Howdy! Meet your trusted design partner, <br />crafting strong brands for SaaS and Web3.
        </h2>
        <h1 className="font-black text-[13.2rem] flex justify-center transform-[scaleY(1.8)] uppercase">
          
          {fullName.map((segment, index) => (
            <div key={index} className='flex px-8'>
              {segment.map((letter, idx) => (
                <Alphabet key={idx} letter={letter} delay={idx * 0.1} />
              ))}
            </div>
          ))}
        </h1>
      </main>
    </div>
  )
}

export default Home
