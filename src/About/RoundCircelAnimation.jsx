import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function RoundCircleAnimation() {
  const circleRef = useRef(null)
  const videoRef = useRef(null)
  const wrapperRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
     
     
      const roundCircleTL = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top top',
          end: '100%',
          scrub: true,
        }
      })

      roundCircleTL.fromTo(
        circleRef.current,
        { attr: { r: 0 } },
        {
          attr: {
            r: Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2)
          },
          duration: 2,
          ease: 'none'
        }
      ).to(videoRef.current, {
        opacity: 0,
        duration: 0,
        ease: 'none'
      })


      
    }, wrapperRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      {/* SVG mask definition */}
      <svg width="0" height="0">
        <defs>
          <mask id="circleMask" maskUnits="userSpaceOnUse" x="0" y="0" width={window.innerWidth} height={window.innerHeight}>
            <rect width={window.innerWidth} height={window.innerHeight} fill="black" />
            <circle ref={circleRef} cx={window.innerWidth / 2} cy={window.innerHeight / 2} r="0" fill="white" />
          </mask>
        </defs>
      </svg>

      <div className='relative bg-blue-800 h-screen'>
        

        <div
          ref={wrapperRef}
          className='z-50 absolute w-screen h-screen overflow-hidden circelAnimationWrapper'
          style={{
            WebkitMask: 'url(#circleMask)',
            mask: 'url(#circleMask)',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskSize: '100% 100%',
            maskSize: '100% 100%',
          }}
        >
          <video
            ref={videoRef}
            src='hero-section-video.mp4'
            autoPlay
            muted
            loop
            playsInline
            className='w-full h-full object-cover'
          />
        </div>
      </div>

      <div className='w-screen h-screen'></div>
    </>
  )
}

export default RoundCircleAnimation
