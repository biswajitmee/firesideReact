import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin);

function Loader({ onComplete }) {
  const circleRef = useRef(null);
  const imgRefhidden = useRef(null);
  const LogoIconRef = useRef(null);
  const loderBgRef = useRef(null);
  

  useEffect(() => {

    document.body.style.overflow = 'hidden';


    const tl = gsap.timeline();

    // Half Circle Loader Animation
    gsap.set('#halfCircle', { drawSVG: '0% 0%', stroke:"#2E3527" });

    // gsap.set(imgRefhidden.current, { opacity: 0.1 });

    

    tl.fromTo('#halfCircle', { drawSVG: '0% 0%' }, { drawSVG: '0% 100%', duration: 1, ease: 'none' });
    tl.to('#halfCircle', { drawSVG: '100% 100%', duration: 1, ease: 'none' });
    gsap.to('#halfCircle', {
      duration: 2,
      motionPath: {
        path: '#circlePath',
        align: '#circlePath',
        alignOrigin: [0.5, 0],
        autoRotate: true
      },
      ease: 'power1.in'
    });

    // Drawing Path Lines
    const tl1 = gsap.timeline();
    document.querySelectorAll('.pathline').forEach((path, index) => {
      const length = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        stroke: index < 3 ? '#2E3527' : '#EF4C23',
        fill: 'none'
      });

      const delay = index < 3 ? index * 0.1 : 0.2 + (index - 3) * 0.1;

      tl1.to(path, {
        strokeDashoffset: 0,
        duration: 1.2,
        ease: 'power2.out'
      }, delay);

      if (index >= 3) {
        tl1.to(path, { duration: 0.5, ease: 'power2.out' }, delay + 0.5);
      }
    });

    // Reveal Circle Mask
    const tl2 = gsap.timeline();
    tl2.fromTo(
      circleRef.current,
      { attr: { r: 0 } },
      {
        attr: { r: Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2) },
        duration: 1,
        ease: 'none'
      }
    );

    tl2.to(imgRefhidden.current, { opacity: 0, duration: 0.5, ease: 'none' }, '-=1');
    tl2.to(LogoIconRef.current, { opacity: 0 }, '-=1');
    tl2.to(loderBgRef.current, { opacity: 0 }, '-=0.5');

    // Master Timeline
    const masterLoaderTL = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = 'auto';
        onComplete(); // callback to hide loader
      }
    });
    masterLoaderTL.add(tl).add(tl1).add(tl2);
  }, [onComplete]);

  return (
    <>
    <div className='Loader' ref={loderBgRef}>
      {/* Spinning Half Circle Loader */}
      <div className="z-30 fixed inset-0 flex justify-center items-center mt-5 overflow-hidden">
        <div className="flex justify-center items-center w-80 h-80 logoLoader">
          <svg xmlns="http://www.w3.org/2000/svg" width="150" height="265" viewBox="0 0 265 265" fill="#EF4C23">
            <path id="circlePath" d="M 132.5,32.5 A 100,100 0 1,1 132.49,32.5" strokeWidth="40" fill="none" transform="rotate(120,132.5,132.5)" />
            <path id="halfCircle" d="M 32.5,132.5 A 100,100 0 0,1 232.5,132.5" strokeWidth="65"  fill="none" />
          </svg>
        </div>
      </div>

      {/* Path Drawing Lines */}
      <div className="z-20 fixed inset-0 flex justify-center items-center overflow-hidden">
        <div className="flex justify-center items-center w-80 h-80 logoLoader">
          <svg xmlns="http://www.w3.org/2000/svg" width="150" height="329" viewBox="0 0 296 329" fill="none" ref={LogoIconRef}>
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <path className="pathline" d="M164 296C91.4251 296 32.5 237.075 32.5 164.5C32.5 91.9251 91.4251 33 164 33" strokeWidth="65" />
                <path className="pathline" d="M163.938 296C127.237 296 97.438 266.201 97.438 229.5C97.438 192.799 127.237 163 163.938 163" strokeWidth="65" />
                <path className="pathline" d="M163.886 296.027C218.562 296.027 262.906 251.801 262.906 197.125C262.906 142.449 218.582 98.125 163.906 98.125" strokeWidth="65" />
              </React.Fragment>
            ))}
          </svg>
        </div>
      </div>

      {/* Circle Mask Reveal */}
      <div className="z-50 fixed inset-0 w-screen h-screen overflow-hidden">
        <svg width="100%" height="100%">
          <defs>
            <mask id="circleMask">
              <rect width="100%" height="100%" fill="black" />
              <circle ref={circleRef} cx="50%" cy="50%" r="0" fill="white" />
            </mask>
          </defs>
         
          <image
            ref={imgRefhidden}
            href="backgroundForrest.avif"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#circleMask)"
          />
        </svg>
      </div>

      </div>
    </>
  );
}

export default Loader;
