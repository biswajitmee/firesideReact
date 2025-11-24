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
    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 2,
      effects: true,
      normalizeScroll: true,
      smoothTouch: 0.4
    })

    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 300) // Adjust timing as needed

    return () => {
      clearTimeout(timer)
      smoother.kill() // Clean up ScrollSmoother on unmount
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
            <div className='p-10 text-white text-center'>Loading...</div>
          )}
        </div>
      </div>
    </>
  )
}

export default About
