import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function AboutHorizontalScroll () {
  const aboutHorizontal = useRef(null)
  const darkbg = useRef(null)
  const bgImgCover = useRef(null)

  const text1 = useRef(null)
  const text2 = useRef(null)

  // RoundCircleAnimation Refs
  const circleRef = useRef(null)
  const imgRefhidden = useRef(null)

  const scrollContainer = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pinning section
      ScrollTrigger.create({
        trigger: aboutHorizontal.current,
        start: 'top top',
        end: '+=1000%',
        pin: true,
        scrub: true,
        markers: true
      })

      gsap.set(darkbg.current, { opacity: 0 })
      gsap
        .timeline({
          scrollTrigger: {
            trigger: aboutHorizontal.current,
            start: 'top top',
            end: '+=100', // or '+=100vh'
            scrub: true
          }
        })
        .to(darkbg.current, { opacity: 1, duration: 6 }, '<')

      const bgImgCoverEl = bgImgCover.current
      gsap.set(bgImgCoverEl, { scale: 0.7 })

      gsap
        .timeline({
          scrollTrigger: {
            trigger: bgImgCoverEl,
            start: 'top bottom',
            end: 'top center',
            scrub: true
          }
        })
        .to(bgImgCoverEl, { scale: 1, ease: 'none' })

      const text1Tl = gsap.timeline()
      const text2Tl = gsap.timeline()

      text1Tl
        .fromTo(
          text1.current,
          { autoAlpha: 0, scale: 0.5, display: 'none' },
          { autoAlpha: 1, scale: 0.5, duration: 0.1, display: 'block' }
        )
        .to(text1.current, { scale: 1.2, duration: 5 })
        .to(text1.current, { autoAlpha: 0, duration: 10, display: 'none' })

      text2Tl
        .fromTo(
          text2.current,
          { autoAlpha: 0, scale: 0.9, display: 'none' },
          { autoAlpha: 1, scale: 0.9, duration: 0.1, display: 'block' }
        )
        .to(text2.current, { scale: 1.2, duration: 10 })
        .to(text2.current, { autoAlpha: 0, duration: 10 })
        .to(text2.current, { display: 'none' })
        .to(
          darkbg.current,
          { opacity: 0, duration: 0.1, display: 'block' },
          '<'
        )

      // const roundCircleTL = gsap.timeline()
      // roundCircleTL
      //   .fromTo(
      //     circleRef.current,
      //     { attr: { r: 0 } },
      //     {
      //       attr: {
      //         r: Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2)
      //       },
      //       duration: 20,
      //       ease: 'none'
      //     }
      //   )
      //   .to(
      //     imgRefhidden.current,
      //     { opacity: 0, duration: 5, ease: 'none' },
      //     '-=1'
      //   )

      const AbouthorizontalScrollTL = gsap.timeline({})

      AbouthorizontalScrollTL.fromTo(
        scrollContainer.current,
        { x: 0 },
        { x: '-300vw', duration: 160 }
      )

      
      // Master timeline that scrolls through both
      const horizontalTLmster = gsap.timeline()

      horizontalTLmster
        .add(text1Tl)
        .add(text2Tl)
        // .add(roundCircleTL)
        .add(AbouthorizontalScrollTL)

      ScrollTrigger.create({
        trigger: bgImgCover.current,
        start: 'bottom center',
        end: '+=4000',
        animation: horizontalTLmster,
        scrub: true
      })
    }, aboutHorizontal) // 👈 important for proper scoping

    return () => {
      ctx.revert()
    }
    // 👈 cleans up on unmount
  }, [])

  return (
    <>
      {/* Scroll before */}

      {/* Pinned Section */}
      <div className='relative'>
        <div ref={aboutHorizontal} className='z-0 absolute h-[300vh]'>
          <div
            className='z-0 fixed inset-0 bg-black/30 bgDark'
            ref={darkbg}
          ></div>

          <div className='z-20 absolute inset-0 flex flex-col justify-center items-center space-y-4 px-64 w-screen h-screen text-center'>
            <h1
              className='hidden z-20 opacity-0 text-white text-4xl'
              ref={text1}
            >
              We’re committed to understanding the unique needs of independent
              dentists and creating tools that truly support growth and success.
            </h1>

            <h1
              className='hidden z-10 opacity-0 text-white text-4xl'
              ref={text2}
            >
              We don’t wait for change to happen — ‍we design practical,
              scalable solutions that empower dentists to focus on what matters
              most: delivering exceptional care, while building
            </h1>
          </div>

          {/* RoundCircelAnimation element will be here */}

          <div
            ref={scrollContainer}
            className='absolute flex flex-row w-[300vw] h-screen scrollComtainer'
          >
            <div className='w-screen h-screen'>
              {/* <div className='absolute w-screen h-screen overflow-hidden'>
                <svg width='100%' height='100%'>
                  <defs>
                    <mask id='circleMask'>
                      <rect width='100%' height='100%' fill='black' />
                      <circle
                        ref={circleRef}
                        cx='50%'
                        cy='50%'
                        r='0'
                        fill='white'
                      />
                    </mask>
                  </defs>
                  <image
                    ref={imgRefhidden}
                    href='backgroundForrest.avif'
                    width='100%'
                    height='100%'
                    preserveAspectRatio='xMidYMid slice'
                    mask='url(#circleMask)'
                  />
                </svg>
              </div> */}
            </div>
            <div className='bg-purple-700 w-screen h-screen'>b</div>
            <div className='bg-red-700 w-screen h-screen'>c</div>
          </div>
        </div>
        <div
          className='top-36 z-50 absolute inset-0 bg-white bigBgCover'
          ref={bgImgCover}
        >
          <div className="flex justify-center items-center bg-[url('./about-horizontalBG.avif')] bg-cover w-full h-full bigImgHere">
            <h1 className='text-3xl'>
              Supported by experts who understand your journey
            </h1>
          </div>
        </div>
      </div>
      {/* Scroll after */}
      <div className='bg-red-700 h-[300vh]'>Keep Scrolling</div>
    </>
  )
}

export default AboutHorizontalScroll
