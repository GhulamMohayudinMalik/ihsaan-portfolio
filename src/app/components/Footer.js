import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='px-16 py-4'>
            <div className="w-full p-3 flex justify-between items-center text-2xl">
                <Link className='font-medium ' href='mailto:malikihsaan.urdesigner@gmail.com'>malikihsaan.urdesigner@gmail.com
                </Link>
                <div className='socials flex gap-2'>
                    <a className='hover:-translate-y-6 -translate-y-2 rotate-4 transition-transform duration-300 ease-in-out' href='#'>
                        <img width={60} src='https://framerusercontent.com/images/8yvYtcx3cfJFOTpz7A4hI9AtiI.png?lossless=1' />
                    </a>
                    <a className='hover:-translate-y-6 -translate-y-1 rotate-10 transition-transform duration-300 ease-in-out' href={'#'}>
                        <img width={60} src='https://framerusercontent.com/images/qyHjNFaKZK3J0IgI963dEUUJ4.png' />
                    </a>
                    <a className='hover:-translate-y-6  -translate-y-2 rotate-4 transition-transform duration-300 ease-in-out' href={'#'}>
                        <img width={60} src='https://framerusercontent.com/images/23QIkTXJxWXuDvTC7jrVLxmu5cA.png' />
                    </a>
                    <a className='hover:-translate-y-6 -translate-y-1 rotate-10 transition-transform duration-300 ease-in-out' href={'#'}>
                        <img width={60} src='https://framerusercontent.com/images/RYuwqCxHlxrSfIOO7JZreY9YX9Q.png' />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
