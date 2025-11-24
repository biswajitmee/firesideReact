import React, { useEffect, useRef ,useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import AboutHorizontalScroll from './AboutHorizontalScroll'
import AboutHorizontalScrollMobile from './AboutHorizontalScrollMobile'

gsap.registerPlugin(ScrollTrigger)

function AboutSectionThreeMobile () {
  const [isMobile, setIsMobile] = useState(false)


  const wrapperAboutPin = useRef(null)

  const card1 = useRef(null)
  const card2 = useRef(null)
  const card3 = useRef(null)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()

    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])


  useEffect(() => {
    if (!wrapperAboutPin.current || isMobile) return

    gsap.set(card1.current, { y: 0, zIndex: 10 })
    gsap.set(card2.current, { y: 400, zIndex: 20 })
    gsap.set(card3.current, { y: 800, zIndex: 30 })

    const cardMasterTL = gsap.timeline()
    const card2TL = gsap.timeline()
    const card3TL = gsap.timeline()

    card2TL.fromTo(card2.current, { y: 400 }, { y: 90, duration: 1 })
    card3TL.fromTo(card3.current, { y: 800 }, { y: 190, duration: 2 }, '-=2')

    cardMasterTL.add(card2TL).add(card3TL, '<')

    const wrapperAbout = wrapperAboutPin.current
    if (!wrapperAbout) return
    const triggerInstance = ScrollTrigger.create({
      trigger: wrapperAbout,
      start: 'top top+=10%',
      end: '+=100%',
      pin: true,
      pinSpacing: true,
      animation: cardMasterTL,
      scrub: true
    })

    return () => {
      triggerInstance.kill() // Clean up ScrollTrigger on unmount
    }
  }, [])

  return (
    <>
      <div className='bg-white m-auto rounded-3xl'>
        <div className='pt-32 pb-16 text-[#232323] text-center'>
          <h2 className='mx-auto w-64 sm:w-full font-IvyOraheadline2 text-[9.8vw] sm:text-[4.762vw] leading-9 sm:leading-none tracking-tight'>
            Dive deeper into{' '}
            <span className='font-IvyOraheadline'>Fireside</span>
          </h2>
          <p className='m-auto mt-2 sm:mt-6 p-3 sm:w-[42rem] font-InterTight text-sm sm:text-lg'>
            At our core, we are a group of like-minded dentists and resourceful
            supporters who believe in nurturing each other’s growth and success.
          </p>
        </div>

        <div
          className='relative m-auto w-[80%] h-[50vh]'
          ref={wrapperAboutPin}
        >
          <div
            className='z-10 absolute sm:flex items-end bg-white shadow-2xl p-10 lg:px-16 lg:py-14 rounded-3xl text-center sm:text-start card'
            ref={card1}
          >
            <div>
              <h5 className='font-IvyOraheadline2 font-light text-[#232323] sm:text-[2.857vw] text-xl'>
                Successful pediatric dental practices
              </h5>
              <p className='m-auto sm:m-0 mt-4 sm:pt-10 w-full sm:w-[82%] text-gray-500 sm:text-[1.19vw] text-xs sm:leading-7'>
                Pediatric dentists across the country are exchanging insights,
                resources, and real-world support in the Fireside
                community—together building practices that thrive.
              </p>
            </div>
            <div className='mt-8'>
              <img
                className='m-auto w-12 sm:w-16'
                src='./aboutPage_tooth_img.png'
                alt=''
              />
            </div>
          </div>

          <div
            className='z-20 absolute sm:flex items-end bg-white shadow-2xl p-10 lg:px-16 lg:py-14 rounded-3xl text-center sm:text-start card'
            ref={card2}
          >
            <div>
              <h5 className='font-IvyOraheadline2 font-light text-[#232323] sm:text-[2.857vw] text-xl'>
                Exclusive vendor partnerships
              </h5>
              <p className='m-auto sm:m-0 mt-4 sm:pt-10 w-full sm:w-[82%] text-gray-500 sm:text-[1.19vw] text-xs sm:leading-7'>
                Save time and money with vendor partnerships that bring you
                discounts and deals, allowing you to focus on growth without the
                hassle of endless price-shopping.
              </p>
            </div>
            <div className='mt-8'>
              <img
                className='m-auto w-10 sm:w-16'
                src='./aboutPage_Discount_img.png'
                alt=''
              />
            </div>
          </div>

          <div
            className='z-30 absolute sm:flex items-end bg-white shadow-2xl p-10 lg:px-16 lg:py-14 rounded-3xl text-center sm:text-start card'
            ref={card3}
          >
            <div>
              <h5 className='font-IvyOraheadline2 font-light text-[#232323] sm:text-[2.857vw] text-xl'>
                Countless success stories
              </h5>
              <p className='m-auto sm:m-0 mt-4 sm:pt-10 w-full sm:w-[82%] text-gray-500 sm:text-[1.19vw] text-xs sm:leading-7'>
                Hear from dentists who’ve reignited their passion for the
                profession, finding the support and joy they’d been missing
                along the way.
              </p>
            </div>
            <div className='mt-8'>
              <img
                className='m-auto w-10 sm:w-16'
                src='./aboutPage_MedicalKit_img.png'
                alt=''
              />
            </div>
          </div>
        </div>

         
        {/* <AboutHorizontalScroll /> */}
        {/* <AboutHorizontalScrollMobile/>  load when mobile */}

        {isMobile ? <AboutHorizontalScrollMobile /> : <AboutHorizontalScroll />}


      </div>
      <div className='bg-yellow-500 h-screen'> new section here</div>
      <div className='bg-green-500 h-screen'> new section here</div>
    </>
  )
}

export default AboutSectionThreeMobile
