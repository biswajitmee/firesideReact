import React, { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger, ScrollSmoother } from 'gsap/all'
import ScrollOneSection from './component/ScrollOneSection'
import ScrollTwoSection from './component/ScrollTwoSection'
import ScrollThreeSection from './component/ScrollThreeSection'
import ScrollFourSection from './component/ScrollFourSection'
import ScrollFiveSection from './component/ScrollFiveSection'
import ScrollSixSection from './component/ScrollSixSection'
import ScrollSevenSection from './component/ScrollSevenSection'
import ScrollTwoSectionMobile from './component/ScrollTwoSectionMobile'
import ScrollThreeSectionMobile from './component/ScrollThreeSectionMobile'
import ScrollFourSectionMobile from './component/ScrollFourSectionMobile'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export default function HomePage () {
  const main = useRef()
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768) // Ensure initial check

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth <= 768
      console.log('Screen size changed:', mobile ? 'Mobile' : 'Desktop') // Debugging log
      setIsMobile(mobile)
    }

    checkScreenSize() // Initial check
    window.addEventListener('resize', checkScreenSize) // Listen for resize events

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 2,
      effects: true,
      normalizeScroll: true,
      smoothTouch: 0.9
    })

    return () => {
      smoother.kill()
    }
  }, [])

  return (
    <div id='smooth-wrapper' ref={main}>
      <div id='smooth-content'>
        <ScrollOneSection />

        {isMobile ? <ScrollTwoSectionMobile /> : <ScrollTwoSection />}
        {isMobile ? <ScrollThreeSectionMobile /> : <ScrollThreeSection />}
        {isMobile ? <ScrollFourSectionMobile /> : <ScrollFourSection />}

        {/* <ScrollFourSection /> */}
        <ScrollFiveSection />
        <ScrollSixSection />
        <ScrollSevenSection />
      </div>
    </div>
  )
}
