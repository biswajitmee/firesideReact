import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger, ScrollSmoother } from 'gsap/all'
import ScrollOneSection from './component/scrollOneSection'
import ScrollTwoSection from './component/scrollTwoSection'
import ScrollThreeSection from './component/SscrollThreeSection'
import ScrollFourSection from './component/scrollFourSection'
import ScrollFiveSection from './component/ScrollFiveSection'
import ScrollSixSection from './component/ScrollSixSection'
import ScrollSevenSection from './component/scrollSevenSection'
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export default function HomePage() {
  const main = useRef()

  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 2,
      effects: true,
      normalizeScroll: true,  // Ensures consistent scrolling behavior
    smoothTouch: 0.1,  // Enables smooth scrolling on touch devices
    })

    return () => {
      smoother.kill()
    }
  }, [])

  return (
    <div id='smooth-wrapper' ref={main}>
      <div id='smooth-content'>
        <ScrollOneSection />
        <ScrollTwoSection/>
        <ScrollThreeSection/>
        <ScrollFourSection/>
         <ScrollFiveSection/>
       <ScrollSixSection/>
       <ScrollSevenSection/>
      </div>
    </div>
  )
}
