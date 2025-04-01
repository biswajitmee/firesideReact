import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, CustomEase } from 'gsap/all';
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaYoutube, FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ScrollSevenSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const listRef = useRef<HTMLUListElement | null>(null)
  const animationRef = useRef<gsap.core.Tween | null>(null)

  const footerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current || !listRef.current) return;

      const container = containerRef.current;
      const list = listRef.current;
      const listHeight = list.offsetHeight;

      // Clone the list dynamically for infinite scrolling effect
      const clone = list.cloneNode(true) as HTMLUListElement;
      container.appendChild(clone);

      // GSAP animation setup
      animationRef.current = gsap.to(container, {
        y: `-${listHeight}px`,
        duration: 10,
        ease: "linear",
        repeat: -1,
        onComplete: () => {
          gsap.set(container, { y: 0 });
        },
      });

      // 🔹 Use matchMedia for responsive ScrollTrigger
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        // ✅ Large Screens (1024px and above)
        ScrollTrigger.create({
          trigger: footerRef.current,
          start: "top 30%", // Pin when sectionTwo reaches 30% viewport height
          end: "+=100%",
          pin: true,
          scrub: 1,
        });
      });

      mm.add("(max-width: 1023px)", () => {
        // ✅ Small Screens (below 1024px)
        ScrollTrigger.create({
          trigger: footerRef.current,
          start: "top 10%", // Pin when sectionTwo reaches 10% viewport height
          end: "+=100%",
          pin: true,
          scrub: 1,
        });
      });

    }, containerRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);


  // Pause animation on hover
  const handleMouseEnter = () => {
    animationRef.current?.pause()
  }

  // Resume animation on mouse leave
  const handleMouseLeave = () => {
    animationRef.current?.resume()
  }

  return (
    <>
      <div className='relative mt-20 lg:mt-40 rounded-3xl w-full h-screen overflow-hidden heroSection'>
        <img
          data-speed='0.8'
          src='backgroundForrest.avif'
          className='bg-top h-screen lg:h-auto object-cover'
        />

        <div className='bottom-14 lg:left-8 z-10 absolute pl-8 sm:pl-14 text-white'>
          <h1 className='font-IvyOraheadline2 text-[9.8vw] leading-10 sm:text-2xl lg:text-7xl'>
            <span className='block'>Driving growth </span>
            <span className='block font-IvyOraheadline'>in independent</span>
            <span className='block'>pediatric dentistry</span>
          </h1>
          <p className='sm:mt-12 mt-4 font-InterTight text-base sm:text-lg'>
            The first membership community for pediatric dentists, built by
            pediatric dentists.
          </p>
        </div>
      </div>

      <section className='relative'>
        <div className='topGradiant z-50 absolute bg-gradient-to-b from-white border-t-[50px] border-t-white h-80'></div>
        {/* w-screen */}
        <div className='grid grid-cols-1 lg:grid-cols-2 h-screen'>
          {/* Left Side */}
          <div className='flex justify-center items-center m-auto lg:w-[55%] lg:h-screen py-10'>
            <h1 className='font-IvyOraheadline2 text-[8.4vw] ml-6 sm:text-5xl tracking-wider sm:tracking-normal'>
              Solutions
              <span className='font-IvyOraheadline orngColor'>
                for every stage
              </span>
              of your practice
            </h1>
          </div>

          {/* Right Side: Infinite Vertical Scroller */}
          <div className='relative p-2 sm:p-10 h-screen overflow-hidden'>
            <div
              ref={containerRef}
              className='relative flex flex-col w-full h-screen text-base lg:text-[2vw]'
              onMouseEnter={handleMouseEnter} // Stop on hover
              onMouseLeave={handleMouseLeave} // Resume on hover out
            >
              <ul ref={listRef} className='flex flex-col gap-4'>
                {[
                  'Launching your practice',
                  'Creating your brand',
                  'Growing your patient list',
                  'Streamlining daily operations',
                  'Hiring and training staff',
                  'Keeping patients coming back',
                  'Adopting new pediatric techniques',
                  'Managing finances for growth',
                  'Meeting legal standards',
                  'Planning for future changes'
                ].map((item, index) => (
                  <li
                    key={index}
                    className='px-6 py-2 lg:py-4 rounded-lg font-normal text-base lg:text-[2vw]'
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='topGradiant bottom-0 z-50 absolute bg-gradient-to-t from-slate-50 w-screen h-80'></div>
      </section>

      <div className='z-50 relative rounded-3xl w-full h-screen overflow-hidden sectionOne'>
        <video
          className='object-cover w-full h-full rounded-3xl'
          autoPlay
          loop
          muted
          src="ScrollSectionNinVideo.mp4"
        >
        </video>

        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-lg rounded-2xl p-10 px-4 w-[90vw] lg:w-[60vw] bg-[#06060666]'>
          <div className='flex flex-col items-center text-center'>
            <h2 className='lg:text-[4.76vw] text-[9.8vw] font-IvyOraheadline2 text-white mb-2 py-4'>
              It starts with a conversation
            </h2>
            <p className='lg:text-lg text-base text-[#f3efec] lg:w-[38%] w-full'>
              Because running a practice doesn’t have to be a lonely journey.
            </p>
            <button className='mt-6 px-8 lg:px-10 py-2.5 lg:py-3.5 text-white lg:text-lg text-base bg-[#EF4C23] rounded-lg'>
              Join Us
            </button>
          </div>
        </div>
      </div>


      {/* footer */}
      <div
        className='-z-10 relative bg-[#4E4A46] mt-[-90vh] lg:mt-[-100vh] w-screen h-[80vh] lg:h-[70vh] sectionTwo footer'
        ref={footerRef}
      >
        <div className='gap-4 grid grid-cols-1 lg:grid-cols-3 px-6 sm:px-24 sm:py-20'>
          <div className='h-full pt-20 sm:pt-0'>
            <div>
              <div>
                <img className='sm:w-[3.81vw] w-10 m-auto sm:m-0 cursor-pointer' src="FooterLogo.png" alt="" />
              </div>
              <div className='mt-6 text-center sm:text-left'>
                <p className='sm:text-[1.091vw] text-sm text-white font-InterTight'>Because running a practice doesn’t have <br /> to be a lonely journey. </p>
              </div>
            </div>
          </div>

          <div className='h-full text-white font-IvyOraheadline2 text-center sm:text-left my-[8vw] sm:my-0 sm:ml-20'>
            <ul>
              <li className='text-[4.8vw] sm:text-[1.429vw] mt-4'>About</li>
              <li className='text-[4.8vw] sm:text-[1.429vw] mt-4'>Community</li>
              <li className='text-[4.8vw] sm:text-[1.429vw] mt-4'>Blog</li>
            </ul>
          </div>

          <div className='h-full flex justify-center text-white my-8 sm:mt-4'>
            <a className='p-[.595vw] block sm:text-[1.6rem] text-[1.4rem] px-6' href="#">
              <BiLogoInstagramAlt />
            </a>
            <a className='p-[.595vw] block sm:text-[1.6rem] text-[1.4rem]' href="#">
              <FaYoutube />
            </a>
            <a className='p-[.595vw] block sm:text-[1.6rem] text-[1.4rem] px-6' href="#">
              <FaXTwitter />
            </a>
            <a className='p-[.595vw] block sm:text-[1.6rem] text-[1.4rem]' href="#">
              <FaFacebookSquare />
            </a>
          </div>
        </div>

        <div className='grid sm:flex sm:justify-between sm:mt-[10vh] sm:px-24 text-center'>
          <div className='order-2 sm:order-1 mt-2'>
            <p className='text-white text-[4vw] sm:text-[1.071vw] font-InterTight'>Fireside, Inc.© 2025</p>
          </div>
          <div className='flex justify-center order-1 sm:order-2'>
            <a className='text-white text-[4vw] sm:text-[1.071vw] font-InterTight' href="">Privacy Policy</a>
            <a className='text-white text-[4vw] sm:text-[1.071vw] font-InterTight sm:ml-14 ml-8' href="">Accessibility</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ScrollSevenSection;
