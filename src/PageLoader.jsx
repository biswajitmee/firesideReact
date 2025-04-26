import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const PageLoader = ({ show, onComplete }) => {
  const loaderRef = useRef(null)

  useEffect(() => {
    if (show) {
      const pageLoaderTL = gsap.timeline({
        onComplete: () => {
          onComplete && onComplete()
        }
      })

      pageLoaderTL
        .set(loaderRef.current, { y: '100vh', display: 'block' }) // reset position
        .to(loaderRef.current, { y: '0vh', duration: 1 })
        .to(loaderRef.current, { y: '-100vh', duration: 1, delay: 0.5 })
    }
  }, [show, onComplete])

  return (
    <div
      ref={loaderRef}
      className='top-0 left-0 z-50 fixed bg-blue-800 w-screen h-screen'
      style={{ display: 'none' }} // hidden by default, shown via GSAP
    />
  )
}

export default PageLoader
