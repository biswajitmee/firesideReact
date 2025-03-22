import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

function ScrollOneSection() {
  const videoSection = useRef(null);
  const textAnimationPin = useRef(null);

  const firstDiv = useRef(null);
  const secondDiv = useRef(null);
  const thirdDiv = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // ✅ Set initial states
      gsap.set([firstDiv.current, secondDiv.current], { autoAlpha: 0, scale: 0.8 });
      gsap.set(thirdDiv.current, { autoAlpha: 0, scale: 1.2 });

      // ✅ Timeline animations
      const firstDivTimeline = gsap.timeline()
        .fromTo(firstDiv.current, { autoAlpha: 0, scale: 0.8 }, { autoAlpha: 1, scale: 1, duration:3, ease: 'power1.in' })
        .to(firstDiv.current, { autoAlpha: 0, duration: 1 }, '+=2'); // Fade out after delay

      const secondDivTimeline = gsap.timeline()
        .fromTo(secondDiv.current, { autoAlpha: 0, scale: 0.8 }, { autoAlpha: 1, scale: 1, duration:3, ease: 'power1.in' })
        .to(secondDiv.current, { autoAlpha: 0, duration: 1 }, '+=2'); // Fade out after delay

      const thirdDivTimeline = gsap.timeline()
        .fromTo(thirdDiv.current, { autoAlpha: 0, scale: 1.9 }, { autoAlpha: 1, scale: 1.2, duration:3, ease: 'power1.in' });

      // ✅ Master Timeline for ScrollTrigger
      const masterTimeline = gsap.timeline();
      masterTimeline
        .add(firstDivTimeline)
        .add(secondDivTimeline, '+=1') // Start after first text fades out
        .add(thirdDivTimeline, '-=4'); // Start after second text fades out

      ScrollTrigger.create({
        trigger: textAnimationPin.current,
        pin: true,
        start: 'top top',
        end: '+=350%',
        animation: masterTimeline,
        scrub: 1.5, // Adjusted for smoother scrolling
      });
    }, videoSection);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ✅ Hero Section with Video */}
      <div className="z-50 relative w-full h-screen overflow-hidden heroSection" ref={videoSection}>
        <video className="top-0 left-0 absolute w-full h-full object-cover" src="/hero-section-video.mp4" autoPlay muted loop />

        <div className="bottom-14 left-8 z-10 absolute pl-4 text-white">
          <h1 className="font-InterTight text-4xl lg:text-7xl">
            <span className="block">Want more</span>
            <span className="block">for your practice?</span>
            <span className="block font-IvyOraheadline">
              Join us by <span className="orngColor"> the Fireside.</span>
            </span>
          </h1>
          <p className="mt-4 font-InterTight text-lg">
            The first membership community for pediatric dentists, built by pediatric dentists.
          </p>
        </div>
      </div>

      {/* ✅ Text Animation Section */}
      <section className="z-40 relative w-full h-screen margintop graybg" ref={textAnimationPin}>
        <div className="z-50 relative w-full h-screen">
          {/* First Text */}
          <div className="left-[10vw] lg:left-[28vw] z-50 absolute inset-0 flex justify-center items-center w-[80vw] lg:w-[44vw] text-xs lg:text-3xl">
            <h1 className="font-IvyOraheadline2 text-3xl lg:text-5xl text-center leading-10" ref={firstDiv}>
              Building the largest network of independent pediatric dentists
            </h1>
          </div>

          {/* Second Text */}
          <div className="left-[10vw] lg:left-[28vw] z-50 absolute inset-0 flex justify-center items-center w-[80vw] lg:w-[44vw] text-xs lg:text-3xl">
            <h1 className="font-IvyOraheadline2 text-3xl lg:text-5xl text-center heading" ref={secondDiv}>
              with unmatched buying power
            </h1>
          </div>

          {/* Third Image */}
          <div className="z-0 absolute inset-0 flex justify-center items-center w-screen" ref={thirdDiv}>
            <img src="/bg-icon.avif" alt="Background Icon" width={300} height={300} />
          </div>
        </div>
      </section>
    </>
  );
}

export default ScrollOneSection;
