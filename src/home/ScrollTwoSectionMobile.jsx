import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger, CustomEase } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, CustomEase)

function ScrollTwoSectionMobile () {
  const pinref = useRef(null)
  const bgbackdiv = useRef(null)
  const imgMove = useRef(null)

  const tltext1 = useRef(null)
  const tltext2 = useRef(null)

  const box1Ref = useRef(null)
  const box2Ref = useRef(null)
  const box3Ref = useRef(null)

  const box1insidetext = useRef(null)
  const box2insidetext = useRef(null)
  const box3insidetext = useRef(null)

  const logoIcon = useRef(null)
  const firesideRef = useRef(null)

  useEffect(() => {
    const tl1 = gsap.timeline()
    tl1.fromTo(bgbackdiv.current, { scale: 0.3 }, { scale: 1, duration: 6 })

    const scaleImg = gsap.timeline()
    scaleImg.add(tl1)

    ScrollTrigger.create({
      trigger: pinref.current,
      start: 'top bottom', // Start animation when the section reaches 80% of the viewport height
      end: 'top 20%', // Extend scroll duration for slower animations
      animation: scaleImg,
      scrub: 1 // Smooth scrolling effect
    })

    // second animation start here

    const imgmoveTL = gsap.timeline()
    imgmoveTL.fromTo(
      imgMove.current,
      { x: 0 },
      {
        x: -50,
        duration: 50,
        // ease: CustomEase.create("custom", "M0,0 C0.174,0.193 0.569,0.18 0.756,0.263 0.98,0.362 0.98,0.829 1,1 "),
        ease: CustomEase.create(
          'custom',
          'M0,0,C0,0,0.14,0.033,0.185,0.048,0.224,0.061,0.298,0.091,0.335,0.109,0.371,0.127,0.441,0.168,0.475,0.192,0.508,0.216,0.57,0.268,0.6,0.297,0.632,0.329,0.692,0.4,0.72,0.437,0.747,0.474,0.796,0.551,0.82,0.592,0.845,0.638,0.893,0.734,0.915,0.783,0.938,0.836,1,1,1,1'
        )
      }
    )

    gsap.set([tltext1.current, tltext2.current], { autoAlpha: 0 })

    const text1TL = gsap.timeline()
    const text2TL = gsap.timeline()
    text1TL
      .fromTo(tltext1.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 10 })
      .to(tltext1.current, { autoAlpha: 0, duration: 10, delay: 15 })

    text2TL.fromTo(
      tltext2.current,
      { autoAlpha: 0, duration: 10 },
      { autoAlpha: 1, duration: 20 }
    )

    const collapsDiv = gsap.timeline()

    collapsDiv
      .fromTo(
        bgbackdiv.current,
        { width: '100vw', height: '96vh', left:0,  top: 0 },
        {
          width: '100vw',
          height: '44vh',
          delay: 10,
          duration: 30,
          left: 0,

          // ease: CustomEase.create("custom", "M0,0 C0.174,0.193 0.569,0.18 0.756,0.263 0.98,0.362 0.98,0.829 1,1 "),
          ease: CustomEase.create(
            'custom',
            'M0,0,C0,0,0.14,0.033,0.185,0.048,0.224,0.061,0.298,0.091,0.335,0.109,0.371,0.127,0.441,0.168,0.475,0.192,0.508,0.216,0.57,0.268,0.6,0.297,0.632,0.329,0.692,0.4,0.72,0.437,0.747,0.474,0.796,0.551,0.82,0.592,0.845,0.638,0.893,0.734,0.915,0.783,0.938,0.836,1,1,1,1'
          )
        }
      )
      .to(
        imgMove.current,
        {
          y: -50,
          duration: 30
        },
        '-=20'
      )
      .to(
        tltext2.current,
        {
          autoAlpha: 0,
          duration: 10
        },
        '-=20'
      )

      .to(
        bgbackdiv.current,
        {
          autoAlpha: 0,
          duration: 10
        },
        '-=20'
      )

    const tltext22TL = gsap.timeline()
    tltext22TL.fromTo(
      tltext2.current,
      { autoAlpha: 1 },
      { autoAlpha: 0, duration: 3 }
    )

    gsap.set(
      [
        box1Ref.current,
        box3Ref.current,
        box3Ref.current,
        box1insidetext.current,
        box3insidetext.current
      ],
      {
        autoAlpha: 0,
        scale: 1
      }
    )

    const box1TL = gsap.timeline()
    const box2TL = gsap.timeline()
    const box3TL = gsap.timeline()

    // left box
    box1TL
      .fromTo(box1Ref.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 3 })
      .to(box1insidetext.current, {
        autoAlpha: 1,
        duration: 10
      })

    // right box
    box3TL
      .fromTo(
        box3Ref.current,
        { height: 0, left:0, bottom: 0, width: '100vw', autoAlpha: 1 },
        { autoAlpha: 1, height: '49vh', duration: 15 }
      )
      .to(box3insidetext.current, {
        autoAlpha: 1,
        duration: 10
      })

    // center box expand

    gsap.set([box2insidetext.current], {
      autoAlpha: 0,
      scale: 0.9
    })

    gsap.set([logoIcon.current], {
      autoAlpha: 0,
      scale: 0.2
    })
    gsap.set([firesideRef.current], {
      autoAlpha: 0,
      scale: 0.9
    })

    box2TL
      .fromTo(
        box2Ref.current,
        {
          autoAlpha: 1, 
          width: '100vw',
          top: '50vh',  
          height: 0,
          borderRadius: '20px',
          backgroundColor: '#3c4235'
        },
        {
          autoAlpha: 1,
          width: '100vw',
          duration: 60,
          left: 0,
          right:0,
          top:0,
          bottom:0,
          zIndex: 999,
          height: '100vh',
          backgroundColor: '#3c4235',
          ease: 'power1.in',
          
        }
      )
      .to(box1Ref.current, { y: '-50vw', duration: 44, ease: 'power1.in' }, '<')
      .to(box3Ref.current, { y: '50vw', duration: 44, ease: 'power1.in' }, '<')
      .to(
        logoIcon.current,
        {
          autoAlpha: 1,
          duration: 10,
          scale: 0.8
        },
        '=-25'
      )

      .to(
        box2insidetext.current,
        {
          autoAlpha: 1,
          duration: 8,
          scale: 1.3
        },
        '=-20'
      )
      .to(
        firesideRef.current,
        {
          autoAlpha: 1,
          duration: 6,
          scale: 1.3
        },
        '=-10'
      )

      .to(box1Ref.current, { autoAlpha: 0, duration: 5 }, '-=30')
      .to(box3Ref.current, { autoAlpha: 0, duration: 5 }, '-=30')

    const delay = gsap.timeline()

    // left box
    delay.to(pinref.current, {
      delay: 10
    })

    const MasterTimeline = gsap.timeline()
    MasterTimeline.add(imgmoveTL, '-=180')
      .add(tltext22TL, '-=10')
      .add(collapsDiv, '-=140')

      .add(text1TL, '-=180')
      .add(text2TL, '-=150')

      .add(box1TL, '-=100')
      .add(box3TL, '-=80')
      .add(box2TL, '-=60')

      .add(delay)

    ScrollTrigger.create({
      trigger: pinref.current,
      pin: true, // Pin the section
      start: 'top top', // Pin when the section reaches the top of the viewport
      end: '+=1000%', // Extend pin duration to match the animations
      animation: MasterTimeline,
      scrub: 1
    })

    return () => {
      gsap.killTweensOf('*') // Kill all GSAP animations
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()) // Kill all ScrollTriggers
      gsap.set('*', { clearProps: 'all' }) // Clear GSAP-specific styles
    }
  }) //  useeffct end

  return (
    <>
      <section className='relative w-screen h-screen graybg' ref={pinref}>
        <div className='bgAnimationMobile' ref={bgbackdiv}>
          <div className='imgOverlayMobile' ref={imgMove}></div>

          <div className='top-[40vh] lg:top-[40vh] relative w-[100vw] lg:w-[100%] text-center'>
            <div className='absolute p-2 w-full h-full movingtext'>
              <h1
                ref={tltext1}
                className='font-InterTight text-4xl lg:text-6xl'
              >
                Running a dental practice can be
                <span className='font-IvyOraheadline'>
                  exhausting and isolating
                </span>
              </h1>
            </div>

            <div className='absolute bg-green-700 w-full h-full movingtext'>
              <h1
                ref={tltext2}
                className='font-InterTight text-4xl lg:text-6xl'
              >
                with <span className='font-IvyOraheadline'>endless</span> <br />
                responsiblites.
              </h1>
            </div>
          </div>
        </div>

        {/* 3 box animation */}

        <div className='titleAbsolute3Mobile' ref={box1Ref}>
          <div className='flex justify-center items-center h-full'>
            <h1 ref={box1insidetext} className='font-InterTight'>
              <span>You did not plan</span> <br />
              for<span className='font-IvyOraheadline'> this struggle.</span>
            </h1>
          </div>
        </div>

        {/* expand big div */}
        <div className='titleAbsolute33Mobile' ref={box2Ref}>
          <div className='flex justify-center items-center h-full'>
            <div className='z-0 absolute inset-0 flex justify-center items-center w-full'>
              <img
                src='bg-icon-2.avif'
                alt=''
                className='w-screen'
                ref={logoIcon}
              />
            </div>
            <div>          
              <h1
                ref={box2insidetext}
                className='font-InterTight text-fuchsia-200 text-3xl text-center leading-7'
              >
              <p> That's why </p> <p>we createdd</p> 
              </h1>
    <br />
              <h1 className='font-IvyOraheadline text-3xl leading-10 orngColor' ref={firesideRef}>
                Fireside
              </h1>
            </div>
          </div>
        </div>

        <div className='titleAbsolute333Mobile' ref={box3Ref}>
          <div className='flex justify-center items-center w-full h-full movingtext'>
            <h1
              ref={box3insidetext}
              className='font-InterTight text-fuchsia-100'
            >
              But it"s become
              <br />
              <span className='font-IvyOraheadline'>your reality</span>
            </h1>
          </div>
        </div>
      </section>
    </>
  )
}

export default ScrollTwoSectionMobile
