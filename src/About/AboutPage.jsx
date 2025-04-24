import React, { useEffect } from 'react'
import AboutSectionOne from './AboutSectionOne'
import AboutSectionTwo from './AboutSectionTwo'
import AboutSectionThree from './AboutSectionThree'

import { gsap } from 'gsap'
import { ScrollSmoother } from 'gsap/all'

gsap.registerPlugin(ScrollSmoother)

function About () {
  useEffect(() => {
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 2,
      effects: true,
      normalizeScroll: true,
      smoothTouch: 0.4
    })
  })

  return (
    <>
      <div id='smooth-wrapper'>
        <div id='smooth-content'>
          <AboutSectionOne />
          <AboutSectionTwo />
          <AboutSectionThree />
        </div>
      </div>
    </>
  )
}

export default About
