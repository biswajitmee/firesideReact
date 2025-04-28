// import React, { useEffect, useRef } from 'react'
// import { gsap } from 'gsap'

// const PageLoader = ({ show, onComplete }) => {
//   const loaderRef = useRef(null)

//   useEffect(() => {
//     if (show) {
//       const pageLoaderTL = gsap.timeline({
//         onComplete: () => {
//           onComplete && onComplete()
//         }
//       })

//       pageLoaderTL
//         .set(loaderRef.current, { y: '100vh', display: 'block' , width:'100vw', height:'100vh', overflow:'hidden'}) // reset position
//         .to(loaderRef.current, { y: '0vh', duration: 1 , backgroundColor:'green'})
//         .to(loaderRef.current, { y: '-100vh', duration: 1, delay: 0.5 , })
//         .to(loaderRef.current, {display:'none',})
//     }
//   }, [show, onComplete])

//   return (
//     <div
//       ref={loaderRef}
//       className='hidden top-0 left-0 z-10 fixed bg-yellow-500 w-screen h-screen overflow-hidden'
//       style={{ display: 'none' }} // hidden by default, shown via GSAP 
//     />
//   )
// }

// export default PageLoader


// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';

// const PageLoader = ({ onComplete }) => {
//   const loaderRef = useRef(null);

//   useEffect(() => {
//     const pageLoaderTL = gsap.timeline({
//       onComplete: () => {
//         onComplete && onComplete();
//       }
//     });

//     pageLoaderTL
//       .set(loaderRef.current, { y: '100vh', display: 'block', width: '100vw', height: '100vh', overflow: 'hidden', position: 'fixed', top: 0, left: 0, zIndex: 9999 })
//       .to(loaderRef.current, { y: '0vh', duration: 1, backgroundColor: '#3C4235',ease: "power4.out", })
//       .to(loaderRef.current, { y: '-100vh', duration: 1, delay: 0.5 ,})
//       .set(loaderRef.current, { display: 'none' });
//   }, [onComplete]);

//   return (
//     <div
//       ref={loaderRef}
//       className='hidden bg-[#3C4235] w-screen h-screen overflow-hidden'
//       style={{ display: 'none' }}
//     />
//   );
// };

// export default PageLoader;

// PageLoader.jsx
// PageLoader.jsx

import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

function PageLoader({ nextPath, onFinish }) {
  const loaderRef = useRef(null);
  const navigate = useNavigate();
  const hasNavigated = useRef(false);

  useEffect(() => {
    const tl = gsap.timeline();

    // Slide up black screen
    tl.fromTo(loaderRef.current,
      { y: '100%' },
      {
        y: '0%',
        duration: 0.8,
        ease: 'power4.out',
        onComplete: () => {
          if (!hasNavigated.current) {
            navigate(nextPath);
            hasNavigated.current = true;
          }
        }
      }
    )

    // Small delay to allow page to load
    .to(loaderRef.current,
      {
        y: '-100%',
        duration: 0.8,
        delay: 0.5,
        ease: 'power4.in',
        onComplete: () => {
          onFinish();
        }
      }
    );

  }, [navigate, nextPath, onFinish]);

  return (
    <div
      ref={loaderRef}
      className="top-0 left-0 z-[9999] fixed bg-black w-screen h-screen"
      style={{ pointerEvents: 'none' }}
    />
  );
}

export default PageLoader;
