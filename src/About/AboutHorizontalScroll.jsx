import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function AboutHorizontalScroll () {
  const aboutHorizontal = useRef(null)
  const darkbg = useRef(null)
  const addDarkBG = useRef(null)

  const bgImgCover = useRef(null)


  const leftText = useRef(null)
  const rightText = useRef(null)

  const text1 = useRef(null)
  const text2 = useRef(null)

  const ScrollContainerRef = useRef(null)
  const bigImgRef1 = useRef(null)
  const bigImgRef2 = useRef(null)
  const bigImgRef3 = useRef(null)
  const box1Ref = useRef(null)

  // RoundCircleAnimation Refs
  const circleRef = useRef(null)
  const videoRef = useRef(null)

  const imgRefhidden = useRef(null)

  const scrollSpeedFactor = 4

  useEffect(() => {
    const ctx = gsap.context(() => {
      const ScrollContainer = ScrollContainerRef.current;
      const bgImgCoverEl = bgImgCover.current;

      gsap.set(darkbg.current, { opacity: 0 });
      gsap.set(addDarkBG.current, { autoAlpha: 0 });

      // Pin section
      ScrollTrigger.create({
        trigger: aboutHorizontal.current,
        start: 'top top',
        end: '+=1895%',
        pin: true,
        scrub: true,
        markers: true,
      });

      // Dark background fade inwho understand your journey

      gsap.timeline({
        scrollTrigger: {
          trigger: aboutHorizontal.current,
          start: 'top top',
          end: '+=100',
          scrub: true,
        },
      }).to(darkbg.current, { opacity: 1, duration: 6 }, '<');

      // Background image scale animation
      gsap.set(bgImgCoverEl, { scale: 0.7 });
      gsap.timeline({
        scrollTrigger: {
          trigger: bgImgCoverEl,
          start: 'top top+=80%',
          end: 'top center',
          scrub: true,
        },
      }).to(bgImgCoverEl, { scale: 1, ease: 'none' });

      // Text 1 animation
      const text1Tl = gsap.timeline();
      text1Tl
        .fromTo(
          text1.current,
          { autoAlpha: 0, scale: 0.9, display: 'none' },
          { autoAlpha: 1, scale: 0.9, duration: 6, display: 'block' }
        )
        .to(text1.current, { scale: 1.2, duration: 5 })
        .to(text1.current, { autoAlpha: 0, duration: 10, display: 'none' });

      // Text 2 animation
      const text2Tl = gsap.timeline();
      text2Tl
        .fromTo(
          text2.current,
          { autoAlpha: 0, scale: 0.9, display: 'none' },
          { autoAlpha: 1, scale: 0.9, duration: 0.1, display: 'block' }
        )
        .to(text2.current, { scale: 1.2, duration: 10 })
        .to(text2.current, { autoAlpha: 0, duration: 10 })
        .to(text2.current, { display: 'none' })
        .to(darkbg.current, { opacity: 0, duration: 0.1 }, '<')
        .to(addDarkBG.current, { autoAlpha: 1, duration: 0.1 }, '<');

      // Round circle mask animation
      const roundCircleTL = gsap.timeline();
      roundCircleTL
        .fromTo(
          circleRef.current,
          { attr: { r: 0 } },
          {
            attr: {
              r: Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2),
            },
            duration: 60,
            ease: 'none',
          }
        ).fromTo(leftText.current,
          {autoAlpha:0, duration:2},{autoAlpha:1, duration:2}
        ).fromTo(rightText.current,
          {autoAlpha:0, duration:2},{autoAlpha:1, duration:2},'<'
        )
        // .to(videoRef.current, { opacity: 0, duration: 0 });

      const totalScrollWidth =
        (ScrollContainer.scrollWidth - window.innerWidth) * scrollSpeedFactor;

      // Horizontal scroll animation
      const horizontalScrollTL = gsap.timeline({
        scrollTrigger: {
          trigger: ScrollContainer,
          start: 'top top',
          end: `+=${totalScrollWidth}`,
          scrub: true,
        },
      });

      horizontalScrollTL.to(ScrollContainer, {
        x: '-200vw',
        ease: 'none',
      }, '+=0.20');

      // Parallax effect on additional images
      const parallaxElements = [
        { element: bigImgRef2.current, speed: 1.05 },
        { element: bigImgRef3.current, speed: 1.1 },
      ];

      parallaxElements.forEach(({ element, speed }) => {
        if (element) {
          gsap.to(element, {
            x: () => -totalScrollWidth * (1 - speed),
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'left right',
              end: 'right left',
              scrub: true,
              containerAnimation: horizontalScrollTL,
            },
          });
        }
      });

      // Master timeline
      const masterTL = gsap.timeline();
      masterTL
        .add(text1Tl)
        .add(text2Tl)
        .add(roundCircleTL)
        .add(horizontalScrollTL);

      ScrollTrigger.create({
        trigger: bgImgCover.current,
        start: 'bottom center',
        end: '+=4000',
        animation: masterTL,
        scrub: true,
      });

    }, aboutHorizontal);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Scroll before */}

      {/* Pinned Section */}
      <div className='relative'>
      <div
          className='z-50 absolute inset-0 bg-white bigBgCover'
          ref={bgImgCover}
        >
          <div className="flex justify-center items-center bg-[url('./about-horizontalBG.avif')] bg-red-700 bg-cover lg:px-64 w-full h-full text-center lg:bigImgHere">
            <div>
              <h1 className='font-IvyOraheadline2 text-white text-xl lg:text-7xl'>
                Supported by experts <br />
                <span className='font-IvyOraheadline'>
                  who understand your journey
                </span>
              </h1>
              <h2 className='lg:px-40 lg:py-14 text-white text-xl text-center'>
                Our founders and advisors, suppliers are practicing pediatric
                dentists who know exactly what it takes to grow a
                practice—because they’ve been in your shoes.
              </h2>

              <div class='justify-items-center gap-4 md:gap-4 grid grid-cols-3 md:grid-cols-5'>
                <div class='flex justify-center items-center bg-red-200 w-24 h-24'>
                  1
                </div>
                <div class='flex justify-center items-center bg-green-200 w-24 h-24'>
                  2
                </div>
                <div class='flex justify-center items-center bg-blue-200 w-24 h-24'>
                  3
                </div>

                <div class='flex justify-center gap-4 col-span-3 md:col-span-1'>
                  <div class='flex justify-center items-center bg-yellow-200 w-24 h-24'>
                    4
                  </div>
                  <div class='flex justify-center items-center bg-purple-200 w-24 h-24'>
                    5
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div ref={aboutHorizontal} className='z-0 absolute mt-[-100vh] h-[300vh]'>
          <div
            className='z-0 fixed inset-0 bg-black/30 bgDark'
            ref={darkbg}
          ></div>

          <div className='z-20 absolute inset-0 flex flex-col justify-center items-center px-64 w-screen h-screen text-center'>
            <h1
              className='hidden z-20 opacity-0 font-IvyOraheadline2 text-white text-5xl'
              ref={text1}
            >
              We’re committed to understanding the unique needs of independent
              dentists and creating tools that truly support growth and success.
            </h1>

            <h1
              className='hidden z-10 opacity-0 px-10 font-IvyOraheadline2 text-white text-5xl text-center leading-snug'
              ref={text2}
            >
              We don’t wait for change to happen — ‍we design practical,
              scalable solutions that empower dentists to focus on what matters
              most: delivering exceptional care, while building
            </h1>
          </div>

          {/* RoundCircelAnimation element will be here */}

          <div
            className='flex flex-row h-screen scrollContainerAbout'
            ref={ScrollContainerRef}
          >
            <div className='relative h-screen section1'>
              <svg width='0' height='0'>
                <defs>
                  <mask
                    id='circleMask'
                    maskUnits='userSpaceOnUse'
                    x='0'
                    y='0'
                    width={window.innerWidth}
                    height={window.innerHeight}
                  >
                    <rect
                      width={window.innerWidth}
                      height={window.innerHeight}
                      fill='black'
                    />
                    <circle
                      ref={circleRef}
                      cx={window.innerWidth / 2}
                      cy={window.innerHeight / 2}
                      r='0'
                      fill='white'
                    />
                  </mask>
                </defs>
              </svg>

              <div className='relative bg-[#3C4235] h-screen' ref={addDarkBG}>
                <div
                  className='z-50 absolute w-screen h-screen overflow-hidden circelAnimationWrapper'
                  style={{
                    WebkitMask: 'url(#circleMask)',
                    mask: 'url(#circleMask)',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                    WebkitMaskSize: '100% 100%',
                    maskSize: '100% 100%'
                  }}
                >
                  <div className='absolute w-screen h-screen text-7xl text-center'>
                    <div className='content-end w-screen h-screen'>
                      <div className='grid grid-cols-2 p-10 w-screen h-96'>
                        <div className='flex justify-start items-center p-16'>
                          <h1 className='font-IvyOraheadline2 text-[4.5rem] text-white text-left leading-13' ref={leftText}>
                            Driving growth
                            <br />
                            <span className='font-IvyOraheadline'>
                              in independent
                            </span>
                            <br />
                            pediatric dentistry
                          </h1>
                        </div>

                        <div className='flex justify-end items-center p-4'>
                          <div className='backdrop-blur-lg m-10 p-10 rounded-lg text-white text-xl text-left transparentBg'  ref={rightText}>
                            <p>
                              We’re shaping the future of independent pediatric
                              practices by offering dentists access to the
                              tools, community, and knowledge they need to
                              succeed.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <video
                    ref={videoRef}
                    src='aboutVideoBG.mp4'
                    autoPlay
                    muted
                    loop
                    playsInline
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>

              <div className='w-screen h-screen'></div>
            </div>
            <div className='w-screen h-screen'>
              <div className='m-auto w-[80vw]'>
                <div className='flex justify-center items-center h-screen text-white text-4xl'>
                  <div className='flex flex-row w-full'>
                    <div className='h-full basis-6/12'>
                      <div className='relative min-h-screen'>
                        <div className='bottom-10 absolute max-w-lg'>
                          <h1 className='font-IvyOraheadline2 font-medium text-black text-7xl leading-tight'>
                            Save money
                          </h1>
                          <h2 className='font-IvyOraheadline text-black text-7xl leading-tight'>
                            without the hassle
                          </h2>
                          <p className='mt-4 text-gray-600 text-lg'>
                            Gain access to exclusive deals and discounts that
                            don't require hours of price-shopping.
                          </p>
                          <button className='bg-[#2f3d2c] hover:bg-[#263226] mt-6 px-6 py-3 rounded-lg font-medium text-white text-lg transition'>
                            Learn more
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className='h-screen basis-6/12'>
                      <div className='relative flex flex-1 justify-center items-center m-auto rounded-xl h-full overflow-hidden'>
                        <div className='absolute rounded-3xl w-full h-[80vh] overflow-hidden'>
                          <div
                            className='overflow-hidden About-bigImg2'
                            ref={bigImgRef2}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='h-screen section1'>
              <div className='flex justify-center items-center w-[screen] h-screen text-white text-4xl'>
                <div className='h-screen overflow-hidden bigImgBack'>
                  <div
                    className='absolute w-sc w-screen h-screen About-bigImg33'
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
                            staying independent. We're bringing together the
                            most successful, likeminded independent practices.
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

      </div>
      {/* Scroll after */}
      <div className='h-[1900vh]'>Keep Scrolling</div>
      {/* <div className='bg-yellow-400 h-[305vh]'>Keep Scrolling</div> */}
    </>
  )
}

export default AboutHorizontalScroll
