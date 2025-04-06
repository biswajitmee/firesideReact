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

// Prevent browser from restoring scroll position on refresh
if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
  window.scrollTo(0, 0)
}

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export default function HomePage({ onReady }) {
  const main = useRef()
  const contentRef = useRef()
  const smootherRef = useRef(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  // Responsive check
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // ScrollSmoother + ScrollToTop + Asset tracking
  useLayoutEffect(() => {
    // Create smoother instance
    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 2,
      effects: true,
      normalizeScroll: true,
      smoothTouch: 0.4
    })

    smootherRef.current = smoother

    // Always scroll to top initially
    requestAnimationFrame(() => {
      smoother.scrollTo(0, true)
    })

    // Wait for assets to load before triggering `onReady`
    const images = contentRef.current?.querySelectorAll('img') || []
    const videos = contentRef.current?.querySelectorAll('video') || []
    const totalAssets = images.length + videos.length

    if (totalAssets === 0) {
      onReady?.()
      return () => smoother.kill()
    }

    let loaded = 0
    const assetLoaded = () => {
      loaded++
      if (loaded === totalAssets) {
        requestAnimationFrame(() => {
          smoother.scrollTo(0, true)
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

    // Cleanup
    return () => {
      smoother.kill()
      smootherRef.current = null
    }
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
