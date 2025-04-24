import React, { useEffect, useState } from 'react'
import AboutSectionOne from './AboutSectionOne'
import AboutSectionTwo from './AboutSectionTwo'
import AboutSectionThree from './AboutSectionThree'

import { gsap } from 'gsap'
import { ScrollSmoother } from 'gsap/all'

gsap.registerPlugin(ScrollSmoother)

function About () {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleLoad = () => {
      ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 2,
        effects: true,
        normalizeScroll: true,
        smoothTouch: 0.4
      })
      setIsLoaded(true)
    }

    // If already loaded (like via navigation), call directly
    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <>
      <div id='smooth-wrapper'>
        <div id='smooth-content'>
          {isLoaded ? (
            <>
              <AboutSectionOne />
              <AboutSectionTwo />
              <AboutSectionThree />
            </>
          ) : (
            <div className='p-10 text-white text-center'>Loading About Page...</div>
          )}
        </div>
      </div>
    </>
  )
}

export default About
