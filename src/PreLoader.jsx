import React, { useEffect } from 'react'
import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin)

function PreLoader() {
  useEffect(() => {
    const tl = gsap.timeline()

    gsap.set('#halfCircle', { drawSVG: '0% 0%' })

    // Animate the half-circle from 0% to 100%
    tl.fromTo(
      '#halfCircle',
      { drawSVG: '0% 0%' }, // Start from nothing
      { drawSVG: '0% 100%', duration: 1, ease: 'none', } // Draw to full half-circle
    )

    // Animate the half-circle from 100% back to 0%
    tl.to('#halfCircle', { drawSVG: '100% 100%', duration: 1, ease: 'none', })

    // Move along the full-circle path
    gsap.to('#halfCircle', {
      duration: 2,
      motionPath: {
        path: '#circlePath',
        align: '#circlePath',
        alignOrigin: [0.5, 0],
        autoRotate: true
      },
      ease: "power1.in",
      
    })
  }, [])

  return (
    <div className="left-0 z-50 absolute inset-0 flex justify-center items-center bg-black overflow-hidden">
      <div className="flex justify-center items-center w-80 h-80 logoLoader">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="265"
          height="265"
          viewBox="0 0 265 265"
          fill="none"
        >
          {/* Full Circle Path */}
          <path 
            id="circlePath"
            d="M 132.5,32.5 A 100,100 0 1,1 132.49,32.5"
            strokeWidth="50"    
            fill="none"
             transform="rotate(150,132.5,132.5)"
          />

          {/* Moving Half Circle (Animated with DrawSVG) */}
          <path
            id="halfCircle"
            d="M 32.5,132.5 A 100,100 0 0,1 232.5,132.5"
            strokeWidth="50"
            stroke="#2E3527"
            fill="none"
          />
        </svg>




        
      </div>
    </div>
  )
}

export default PreLoader
