'use client'
import dynamic from 'next/dynamic'
import { Inter } from 'next/font/google'

const interDisplay = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// dynamic import for client-only rendering
const ClientVideo = dynamic(() => Promise.resolve(({ src }) => (
  <div class="relative w-[58w] h-[88vh] overflow-hidden rounded-lg">
    <video
      src={src}
      loop
      muted
      playsInline
      autoPlay
      className="w-full h-full object-cover"
    />
  </div>
)), { ssr: false })

export default function Story() {
  return (
    <div className={`w-full mx-auto px-6 py-16 ${interDisplay.className}`}>
      <div className="mb-16">
        <h1 className="text-6xl md:text-7xl lg:text-8xl uppercase font-black leading-[0.96] tracking-tighter">
          I don't have dark <br /> secrets, only <br className="md:hidden" /> bright ones
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
        <div className="md:col-span-2 space-y-6 flex flex-col justify-end p-12">
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-black/50 font-medium">
            Growing up in Ukraine, my journey into design started… on the streets =) As a teen, art and graffiti sparked my visual storytelling passion, architecture degree gave me foundation, and digital design showed new creative depths.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-black/50 font-medium">
            Five years later, my wife and I moved to Porto. Here, with the ocean breeze, I craft web and brand solutions for tech companies to shine.
          </p>
        </div>

        {/* Video 1 */}
        <div className="md:col-span-3">
          <div className="relative w-full aspect-4/3 bg-gray-200 rounded-lg overflow-hidden">
            <ClientVideo src="https://framerusercontent.com/assets/dr1IAhMSSIk8zw4P6KIvDIM.mp4" />
          </div>
        </div>

        {/* Video 2 */}
        <div className="md:col-span-3">
          <div className="relative w-full aspect-4/3 bg-gray-200 rounded-lg overflow-hidden">
            <ClientVideo src="https://framerusercontent.com/assets/dhV1eLrahQxiKJRLAv1mNxa6l20.mp4" />
          </div>
        </div>

        <div className="md:col-span-2 space-y-6 flex flex-col justify-end p-12">
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-black/50 font-medium">
            partner up with dynamic founders reinventing tomorrow, from YC startups to enterprises and bootstrapped guys.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-black/50 font-medium">
            My mission: to craft unique, consistent, mature identities for SaaS and Web3 products, boosting user engagement, investor confidence, revenue, and industry respect — a design others will benchmark.
          </p>
        </div>
      </div>
    </div>
  )
}
