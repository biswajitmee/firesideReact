import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const ScrollSevenSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const listRef = useRef<HTMLUListElement | null>(null)
  const animationRef = useRef<gsap.core.Tween | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current || !listRef.current) return

      const container = containerRef.current
      const list = listRef.current
      const listHeight = list.offsetHeight

      // Clone the list dynamically for infinite scrolling effect
      const clone = list.cloneNode(true) as HTMLUListElement
      container.appendChild(clone)

      // GSAP animation setup
      animationRef.current = gsap.to(container, {
        y: `-${listHeight}px`,
        duration: 10,
        ease: 'linear',
        repeat: -1,
        onComplete: () => {
          gsap.set(container, { y: 0 })
        }
      })
    }, containerRef) // <-- context is tied to containerRef

    return () => ctx.revert() // Cleanup on unmount
  }, [])

  // Pause animation on hover
  const handleMouseEnter = () => {
    animationRef.current?.pause()
  }

  // Resume animation on mouse leave
  const handleMouseLeave = () => {
    animationRef.current?.resume()
  }

  return (
    <>
      <div className='relative lg:mt-40 rounded-3xl w-full h-screen overflow-hidden heroSection'>
        <img
          data-speed='0.8'
          src='backgroundForrest.avif'
          className='bg-top h-screen object-cover'
        />

        <div className='bottom-14 lg:left-8 z-10 absolute pl-14 text-white'>
          <h1 className='font-IvyOraheadline2 text-2xl lg:text-7xl'>
            <span className='block'>Driving growth </span>
            <span className='block font-IvyOraheadline'>in independent</span>
            <span className='block'>pediatric dentistry</span>
          </h1>
          <p className='mt-4 font-InterTight text-lg'>
            The first membership community for pediatric dentists, built by
            pediatric dentists.
          </p>
        </div>
      </div>

      <section>
        <div className='grid grid-cols-1 lg:grid-cols-2 h-screen'>
          {/* Left Side */}
          <div className='flex justify-center items-center lg:h-screen text-center'>
            <h1 className='font-IvyOraheadline font-bold text-2xl'>
              Solutions for every stage of your practice
            </h1>
          </div>

          {/* Right Side: Infinite Vertical Scroller */}
          <div className='relative p-10 h-screen overflow-hidden'>
            <div
              ref={containerRef}
              className='relative flex flex-col w-full h-screen'
              onMouseEnter={handleMouseEnter} // Stop on hover
              onMouseLeave={handleMouseLeave} // Resume on hover out
            >
              <ul ref={listRef} className='flex flex-col gap-4'>
                {[
                  'Launching your practice',
                  'Creating your brand',
                  'Growing your patient list',
                  'Streamlining daily operations',
                  'Hiring and training staff',
                  'Keeping patients coming back',
                  'Adopting new pediatric techniques',
                  'Managing finances for growth',
                  'Meeting legal standards',
                  'Planning for future changes'
                ].map((item, index) => (
                  <li
                    key={index}
                    className='px-6 py-2 lg:py-4 rounded-lg font-normal text-sm lg:text-lg'
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-red-600'></section>
    </>
  )
}

export default ScrollSevenSection
