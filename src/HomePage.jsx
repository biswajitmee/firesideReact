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
import ScrollSixSectionMobile from './component/ScrollSixSectionMobile'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export default function HomePage({ onReady }) {
  const main = useRef()
  const contentRef = useRef()
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 2,
      effects: true,
      normalizeScroll: true,
      smoothTouch: 0.4
    })

    return () => {
      smoother.kill()
    }
  }, [])

  // ✅ Track image & video load
  useEffect(() => {
    const images = contentRef.current?.querySelectorAll('img') || []
    const videos = contentRef.current?.querySelectorAll('video') || []
    const totalAssets = images.length + videos.length

    if (totalAssets === 0) {
      onReady?.()
      return
    }

    let loaded = 0
    const assetLoaded = () => {
      loaded++
      if (loaded === totalAssets) {
        // Wait one frame
        requestAnimationFrame(() => {
          onReady?.()
        })
      }
    }

    images.forEach((img) => {
      if (img.complete) assetLoaded()
      else img.addEventListener('load', assetLoaded)
    })

    videos.forEach((video) => {
      if (video.readyState >= 3) assetLoaded()
      else video.addEventListener('loadeddata', assetLoaded)
    })
  }, [onReady])

  return (
    <div id="smooth-wrapper" ref={main}>
      <div id="smooth-content" ref={contentRef}>
        <ScrollOneSection />
        {isMobile ? <ScrollTwoSectionMobile /> : <ScrollTwoSection />}
        {isMobile ? <ScrollThreeSectionMobile /> : <ScrollThreeSection />}
        {isMobile ? <ScrollFourSectionMobile /> : <ScrollFourSection />}
        <ScrollFiveSection />
        {isMobile ? <ScrollSixSectionMobile /> : <ScrollSixSection />}
        <ScrollSevenSection />
      </div>
    </div>
  )
}
