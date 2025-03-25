 
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

function ScrollFourSectionMobile() {
  const pinCircel = useRef(null)
  const leftCircel = useRef(null)
  const rightCircel = useRef(null)
  const middleCircel = useRef(null)
  const middleCircelContent = useRef(null)
  const rectangle = useRef(null)

  useEffect(() => {
    const pinCircelPin = pinCircel.current

    const viewportHeight = document.documentElement.clientHeight
    const circleHeight = document.documentElement.clientWidth // 50vh in pixels
    const lastPosition = (viewportHeight - circleHeight) / 2 // Center position calculation



    // Calculate the total duration of all animations
    const totalAnimationTime = 14 + 1 + 20 + 1 // Sum of all durations inside timeline
    const endValue = `+=${totalAnimationTime * 100}` // Convert to pixels or adjust as needed

    const CircelPinlTL = gsap.timeline({
      scrollTrigger: {
        trigger: pinCircelPin,
        start: 'top top',
        end: endValue, // Dynamically set end value
        scrub: true,
        pin: true
      }
    })

    // Move circles within the pinned section
    CircelPinlTL.fromTo(
      leftCircel.current,
      { top: "0px", opacity: 1 },
      {  top: `${lastPosition - 20}px`, duration: 14, ease: 'power2.out', opacity: 0.1 },
      5 // Delay the start of this animation by 5 seconds
    )
      .fromTo(
        rightCircel.current,
        { bottom:"-100px", opacity: 1 },
        { bottom: `${lastPosition - 20}px`, duration: 14, ease: 'power2.out', opacity: 0.1 },
        '<' // Ensures it starts at the same time as the leftCircel animation
      )

      .fromTo(
        middleCircel.current,
        { top: lastPosition, opacity: 0, visibility: 'hidden' },
        { opacity: 1, visibility: 'visible', ease: 'power2.out', duration: 1 },
        '-=4'
      )
      .to(
        middleCircelContent.current,
        { display: 'block', opacity: 1, duration: 1 },
        '-=4'
      )
      .to(middleCircel.current, { scale: 2.5, duration: 20 }, '-=5')
      .to(
        rectangle.current,
        { display: 'block', zIndex: 20, duration: 1 },
        '-=8'
      )

      .to(middleCircel.current, { display: 'none' }, '-=5')
  }, [])

  return (
    <>
      <section
        className='relative flex justify-center items-center bg-blue-900 h-screen'
        ref={pinCircel}
      >
        <div
          className='top-0 leftBoxCircelMobile z-10 absolute flex justify-center items-center p-6 rounded-full w-full h-full overflow-hidden'
          ref={leftCircel}
        >
          <div className='flex flex-col justify-center items-center p-2 w-4/5 h-full centerDiv'>
            <h1 className='font-IvyOraheadline2 text-[#232323] text-2xl'>Solo</h1>
            <p className='mt-1 font-IvyOraheadline2 text-[#7A7876] text-lg text-center'>Retain autonomy your practice, your way.</p>
            <ul className='circelInsideMobile'>
              <li>
                <ul className='pl-2'>
                  <li >Industry confusing by design</li>
                </ul>
              </li>

              <li>
                <ul className='pl-2'>
                  <li>Pay too much or spend hours finding deals</li>
                </ul>
              </li>
              <li>
                <ul className='pl-2'>
                  <li >No Support</li>
                </ul>
              </li>
            </ul>
            <p className='font-IvyOraheadline2 text-lg text-center'>
              <span className='font-IvyOraheadline font-sm text-[#EF4C23]'>Are you doing things the right way?</span>
              <br/> No-one to bounce ideas
              off of.
            </p>
          </div>
        </div>

        <div
          className='rightBoxCircelMobile bottom-0 z-10 absolute flex justify-center items-center p-4 rounded-full'
          ref={rightCircel}
        >
          <div className='flex flex-col justify-center items-center p-2 w-4/5 h-full centerDiv'>
            <h1 className='font-IvyOraheadline2 text-[#232323] text-2xl'>DSO</h1>
            <p className='mt-2 font-IvyOraheadline2 text-[#7A7876] text-xl'>
              Best practices for greater profitability, negotiated <br /> group
              savings, corporate support.
            </p>
            <ul className='circelInsideMobile'>
              <li>
                <ul className='pl-2'>
                  <li >Intergration plan</li>
                </ul>
              </li>

              <li>
                <ul className='pl-2'>
                  <li >Staff disruption</li>
                </ul>
              </li>
              <li>
                <ul className='pl-2'>
                  <li >Lose autonomy</li>
                </ul>
              </li>
            </ul>
            <p className='font-IvyOraheadline2 text-[#EF4C23] text-2xl text-center'>
              You're selling your practice.
            </p>
          </div>
        </div>

        <div
          className='z-10 absolute flex justify-center items-center middleCircelBoxMobile'
          ref={middleCircel}
        ></div>
        <div
          className='z-10 flex flex-col justify-center items-center p-6 pt-12 centerDiv3'
          ref={middleCircelContent}
        >
          <div className='flex justify-center items-center'>
            <div>
              <img className='items-center w-12' src="/s4firsideLogo.png" alt="" />
            </div>
            <div>
              <h4 className='ml-4 font-IvyOraheadline2 text-[2.857vw] text-white'>Fireside</h4>
            </div>
          </div>
          <p className='font-IvyOraheadline2 text-[#AAA9A3] text-center'>
            Profitability and community.
          </p>
          <ul className='circelInside'>
            <li>
              <ul className='pl-2'>
                <li className='text-white text-sm'>Quick win savings + best practices</li>
              </ul>
            </li>

            <li>
              <ul className='pl-2'>
                <li className='text-white text-sm'>A place to connect</li>
              </ul>
            </li>
            <li>
              <ul className='pl-2'>
                <li className='text-white text-sm'>Ask question + get advice</li>
              </ul>
            </li>
          </ul>
          <p className='font-IvyOraheadline2 text-white text-sm text-center'>
            All while <span className='font-IvyOraheadline text-[#ef4c23]'> staying independent!</span>
          </p>
        </div>

        <div className='p-10 w-screen rectangleMobile' ref={rectangle}>
          <div className='items-center bg-[#3C4235]'>
            
            <div className='flex justify-center items-center'>
              <img className='w-[50vw]' src="/bg-red.avif" alt="" />
            </div>
            
            <div className='text-center' >
              <h3 className='font-IvyOraheadline2 text-white text-2xl text-center'>
                Lay the right foundation
                 for your practice.</h3>
              <p className='mt-8 text-white text-sm'>Whether it's setting up your practice or finding ways to save, we're here to make the process smoother and less stressful.
                <br />
                <br />
                Learn from fellow dentists, share real experiences, and find comfort knowing you're part of a community that cares.
              </p>
              <button className='bg-[#4F5348] mt-[4rem] px-8 py-4 rounded-xl font-medium text-white text-sm'>Community</button>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default ScrollFourSectionMobile;
