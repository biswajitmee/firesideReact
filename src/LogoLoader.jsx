import React, { useEffect } from 'react'
import gsap from 'gsap'

function LogoLoader () {
  useEffect(() => {
    const paths = document.querySelectorAll('.pathline')

    

    // First timeline: Animate the first 3 paths with gray stroke
    paths.forEach((path, index) => {
      if (index < 3) {
        const length = path.getTotalLength()
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
          stroke: '#2E3527', // Gray color
          fill: 'none'
        })

        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1.2,
          ease: 'power2.out',
          delay: index * 0.1 // Staggered animation for the first 3 paths
        })
      }
    })

    // Second timeline: Animate the next 3 paths with main color, starting after 0.2 seconds
    paths.forEach((path, index) => {
      if (index >= 3) {
        const length = path.getTotalLength()
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
          stroke: '#EF4C23', // Main color
          fill: 'none'
        })

        // Start second timeline 0.2 seconds after the first timeline starts
        const delayTime = 0.2 + (index - 3) * 0.1 // Delay 0.2s after first set, then stagger

        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1.2,
          ease: 'power2.out',
          delay: delayTime
        })

        gsap.to(path, {
          // fill: '#EF4C23',
          duration: 0.5,
          ease: 'power2.out',
          delay: delayTime + 0.5 // Fill starts 0.5 seconds after stroke animation completes
        })
      }
    })
  }, [])

  return (
    <div className='absolute inset-0 flex justify-center items-center bg-black overflow-hidden'>
      <div className='flex justify-center items-center w-80 h-80 logoLoader'>

  

        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='150'
          height='329'
          viewBox='0 0 296 329'
          fill='none'
        >
          {/* First three paths (Gray Stroke Animation) */}
          <path className='pathline'
            d='M164 296C91.4251 296 32.5 237.075 32.5 164.5C32.5 91.9251 91.4251 33 164 33'
            strokeWidth='65'
          />
          <path className='pathline'
            d='M163.938 296C127.237 296 97.438 266.201 97.438 229.5C97.438 192.799 127.237 163 163.938 163'
            strokeWidth='65'
          />
          <path className='pathline'
            d='M163.886 296.027C218.562 296.027 262.906 251.801 262.906 197.125C262.906 142.449 218.582 98.125 163.906 98.125'
            strokeWidth='65'
          />

          {/* Next three paths (Main Color Animation) */}
          <path className='pathline'
            d='M164 296C91.4251 296 32.5 237.075 32.5 164.5C32.5 91.9251 91.4251 33 164 33'
            strokeWidth='65'
          />
          <path className='pathline'
            d='M163.938 296C127.237 296 97.438 266.201 97.438 229.5C97.438 192.799 127.237 163 163.938 163'
            strokeWidth='65'
          />
          <path className='pathline'
            d='M163.886 296.027C218.562 296.027 262.906 251.801 262.906 197.125C262.906 142.449 218.582 98.125 163.906 98.125'
            strokeWidth='65'
          />
        </svg>
      </div>
    </div>
  )
}

export default LogoLoader
