 import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

function ScrollThreeSection() {
  const pinContainer = useRef(null)
  const scrollContainerRef = useRef(null)
  const insidePin = useRef(null)
  const box1Ref = useRef(null)

  const bigImgRef1 = useRef(null)
  const bigImgRef2 = useRef(null)
  const bigImgRef3 = useRef(null)

  const lastPin = useRef(null)

  useEffect(() => {
    const box1 = box1Ref.current
    const scrollSpeedFactor = 2
    const pinSection = pinContainer.current
    const scrollContainer = scrollContainerRef.current
    const LastPin = lastPin.current
    const bigImg = bigImgRef1.current

    const totalScrollWidth =
      (scrollContainer.scrollWidth - window.innerWidth) * scrollSpeedFactor

    // **1️⃣ Scale Animation**
    const scaleTL = gsap.timeline()
    scaleTL.fromTo(
      box1,
      { scale: 0.1 },
      {
        scale: 1,
        scrollTrigger: {
          trigger: scrollContainer,
          start: 'top bottom',
          end: 'top top',
          scrub: true
        }
      }
    )

    // **2️⃣ Horizontal Scroll Animation (Starts AFTER delay)**
    const horizontalScrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: '#pinSection',
        start: 'top top',
        end: `+=${totalScrollWidth}`,
        scrub: true,
        pin: true,
        delay: 0.4
      }
    })

    horizontalScrollTL.to(scrollContainer, {
      x: -(scrollContainer.scrollWidth - window.innerWidth),
      ease: 'none'
      //delay:0.4,
    })

    // **4️⃣ Move `bigImg` Only After `horizontalScrollTL` Starts**
    const bigImgSpeedFactor = 1.2
    const bigImgTL = gsap.timeline()

    bigImgTL.fromTo(
      bigImg,
      { x: 0,  }, // Initial position
      {
        x: () => -totalScrollWidth * (1 - bigImgSpeedFactor),
        ease: 'none',
        
        scrollTrigger: {
          trigger: pinSection,
          start: 'right right',
          end: `+=${totalScrollWidth}`,
          scrub: true
        }
      }
    )

    // **5️⃣ Parallax Effects for Other Big Images**
    const parallaxElementsTL = gsap.timeline()
    const parallaxElements = [
      { element: bigImgRef2.current, speed: 1.05 },
      { element: bigImgRef3.current, speed: 1.1 }
    ]

    parallaxElements.forEach(({ element, speed }) => {
      if (element) {
        parallaxElementsTL.add(
          gsap.to(element, {
            x: () => -totalScrollWidth * (1 - speed),
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'left right',
              end: 'right left',
              scrub: true,
              containerAnimation: horizontalScrollTL
            }
          })
        )
      }
    })

    // **6️⃣ Final Pin for `LastPin`**
    const lastPinTL = gsap.timeline({
      scrollTrigger: {
        trigger: scrollContainerRef.current,
        start: 'left left',
        end: 'top top',
        pin: true
      }
    })

    // **7️⃣ Pin Inside Section (`insidePin`)**
    const insidepinTL = gsap.timeline({
      scrollTrigger: {
        trigger: insidePin.current,
        start: 'top top',
        end: '+=600',
        pin: true,
        scrub: 1
      }
    })

    // **🏆 Master Timeline: Plays Everything in Order**
    const masterTL = gsap.timeline()
    masterTL.add(scaleTL) // Scale first
    //masterTL.add(pinTL) // Hold pin for 2 seconds
    masterTL.add(horizontalScrollTL, '+=500') // Horizontal scroll starts after pin delay
    masterTL.add(bigImgTL) // Move big image
    masterTL.add(parallaxElementsTL) // Apply parallax effect
    masterTL.add(lastPinTL, '+=2000').add(insidepinTL, '-=80') // Final pins
  }, [])

  return (
    <>
      <section className='flex justify-center items-center h-screen graybg'>
        <div className='flex flex-col items-center text-center'>
          <div className='textBox'>
            <h1 className='font-IvyOraheadline2 text-7xl darkFont'>
              The first membership group designed specifically to help pediatric dentists
              <span className='font-IvyOraheadline'> like you grow</span>
            </h1>
          </div>
          <br />
          <div className='textBox2'>
            <p>
              Fireside is built for dentists, by dentists— you’ll find meaningful savings, resources, and a network of peers who understand the unique challenges you face every day.
            </p>
          </div>
        </div>
      </section>
      <div className='z-50 h-screen pinContainer' ref={pinContainer} id='pinSection'>
        <div
          className='flex flex-row h-screen scrollContainer'
          ref={scrollContainerRef}
        >
          <div className='h-screen section1'>
            <div className='flex justify-center items-center w-screen h-screen text-white text-4xl'>
              <div
                className='h-screen overflow-hidden bigImgBack'
                ref={box1Ref}
              >
                <div className='fixed h-screen bigImg' ref={bigImgRef1}></div>

                <div className='content-end w-screen h-screen'>
                  <div className='grid grid-cols-2 p-10 w-screen h-80'>
                    <div className='leftAlignDiv flex justify-start items-center p-16'>
                      <h1 className='font-IvyOraheadline2 text-[4.5rem] leading-10'>
                        Stay independent , <br />
                        <br />
                        <span className='font-IvyOraheadline'>
                          not isolated
                        </span>
                      </h1>
                    </div>

                    <div className='rightAlignDiv flex justify-end items-center p-4'>
                      <div className='backdrop-blur-md m-10 p-10 rounded-lg text-xl transparentBg'>
                        <p>
                          Get the support you need to grow your practice while
                          staying independent. We're bringing together the most
                          successful, likeminded independent practices.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='h-screen section2'>
            <div className='flex justify-center items-center w-[150vw] min-w-[150vw] h-screen text-white text-4xl bigImgBack'>
              <div className='flex flex-row w-full'>
                <div className='h-full basis-4/12'>
                  <div className='relative min-h-screen'>
                    <div className='bottom-10 left-40 absolute max-w-lg'>
                      <h1 className='font-IvyOraheadline2 font-medium text-black text-7xl leading-tight'>
                        Save money
                      </h1>
                      <h2 className='font-IvyOraheadline text-black text-7xl leading-tight'>
                        without the hassle
                      </h2>
                      <p className='mt-4 text-gray-600 text-lg'>
                        Gain access to exclusive deals and discounts that don't
                        require hours of price-shopping.
                      </p>
                      <button className='bg-[#2f3d2c] hover:bg-[#263226] mt-6 px-6 py-3 rounded-lg font-medium text-white text-lg transition'>
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
                <div className='h-screen basis-8/12'>
                  <div className='flex gap-5 bg-[#F5F1EE] p-10 w-full h-screen'>
                    <div className='flex flex-col justify-between gap-5 w-1/4 h-full'>
                      <div className='flex flex-col flex-1 justify-center bg-white shadow-lg p-6 rounded-xl'>
                        <img
                          src='/icon1.svg'
                          alt='Icon'
                          className='mb-4 w-10 h-10'
                        />
                        <h2 className='font-medium text-gray-600 text-3xl'>
                          15-20%
                        </h2>
                        <p className='text-gray-600 text-lg'>
                          Clinical Supply costs savings per year
                        </p>
                      </div>
                      <div className='flex flex-col flex-1 justify-center bg-white shadow-lg p-6 rounded-xl'>
                        <img
                          src='/icon2.svg'
                          alt='Icon'
                          className='mb-4 w-10 h-10'
                        />
                        <h2 className='font-medium text-gray-600 text-3xl'>
                          20-100%
                        </h2>
                        <p className='text-gray-600 text-lg'>
                          Payment processing savings per year
                        </p>
                      </div>
                    </div>

                    <div className='relative flex flex-1 justify-center items-center rounded-xl h-full overflow-hidden'>


                      <div
                        className='absolute h-screen bigImg3'
                        ref={bigImgRef2}
                      ></div>

                      <div className='bottom-5 left-1/2 absolute bg-white/70 backdrop-blur-md p-6 rounded-xl text-center -translate-x-1/2 transform'>
                        <h2 className='font-medium text-gray-600 text-3xl'>
                          $15,000-$50,000+
                        </h2>
                        <p className='text-gray-600 text-lg'>
                          Total Estimated Profit increase by location
                        </p>
                      </div>
                    </div>

                    <div className='flex flex-col justify-between gap-5 w-1/4 h-full'>
                      <div className='flex flex-col flex-1 justify-center bg-white shadow-lg p-6 rounded-xl'>
                        <img
                          src='/icon3.svg'
                          alt='Icon'
                          className='mb-4 w-10 h-10'
                        />
                        <h2 className='font-medium text-gray-600 text-3xl'>
                          150 hours
                        </h2>
                        <p className='text-gray-600 text-lg'>
                          Time and Labor savings per year
                        </p>
                      </div>
                      <div className='flex flex-col flex-1 justify-center bg-white shadow-lg p-6 rounded-xl'>
                        <img
                          src='/icon4.svg'
                          alt='Icon'
                          className='mb-4 w-10 h-10'
                        />
                        <h2 className='font-medium text-gray-600 text-3xl'>
                          $475/month
                        </h2>
                        <p className='text-gray-600 text-lg'>
                          Fireside Membership Fee
                          <br />
                          $125 for additional locations
                          <br />
                          All backed by risk-free guarantee
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='h-screen section1' ref={lastPin}>
            <div className='flex justify-center items-center w-screen h-screen text-white text-4xl'>
              <div className='h-screen overflow-hidden bigImgBack'>
                <div
                  className='absolute h-screen bigImg2'
                  ref={bigImgRef3}
                ></div>

                <div className='content-end w-screen h-screen'>
                  <div className='grid grid-cols-2 p-10 w-screen h-80'>
                    <div className='leftAlignDiv flex justify-start items-center p-16'>
                      <h1 className='font-IvyOraheadline2 text-[4.5rem] leading-10'>
                        Stay independent , <br />
                        <br />
                        <span className='font-IvyOraheadline'>
                          not isolated
                        </span>
                      </h1>
                    </div>

                    <div className='rightAlignDiv flex justify-end items-center p-4'>
                      <div className='backdrop-blur-md m-10 p-10 rounded-lg text-xl transparentBg'>
                        <p>
                          Get the support you need to grow your practice while
                          staying independent. We're bringing together the most
                          successful, likeminded independent practices.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className='z-0 flex justify-center items-center mt-[-70vh] w-screen h-[60vh]'
        ref={insidePin}
      >
        <div className='pt-50 max-w-[80%]'>
          <h1 className='font-IvyOraheadline2 text-[4.5rem] text-black text-4xl text-center leading-10'>
            You're ready to transform your practice,
            <br /> <br />
            <span className='font-IvyOraheadline orngColor'>
              but not sell it?
            </span>
          </h1>
          <div className='m-auto pt-14 w-2/3 text-xl text-center'>
            <p>
              Join Fireside, a warm and welcoming place where you can grow your <br />
              practice and your profits—without losing your independence.
            </p>
          </div>

        </div>
      </div>
    </>
  )
}

export default ScrollThreeSection
