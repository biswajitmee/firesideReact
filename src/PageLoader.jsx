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


import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const PageLoader = ({ onComplete }) => {
  const loaderRef = useRef(null);

  useEffect(() => {
    const pageLoaderTL = gsap.timeline({
      onComplete: () => {
        onComplete && onComplete();
      }
    });

    pageLoaderTL
      .set(loaderRef.current, { y: '100vh', display: 'block', width: '100vw', height: '100vh', overflow: 'hidden', position: 'fixed', top: 0, left: 0, zIndex: 9999 })
      .to(loaderRef.current, { y: '0vh', duration: 1, backgroundColor: 'green' })
      .to(loaderRef.current, { y: '-100vh', duration: 1, delay: 0.5 })
      .set(loaderRef.current, { display: 'none' });
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className='hidden bg-yellow-500 w-screen h-screen overflow-hidden'
      style={{ display: 'none' }}
    />
  );
};

export default PageLoader;

