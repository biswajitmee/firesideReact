 

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
        duration: 1,
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
        duration: 1,
        delay: 2,
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
      className="top-0 left-0 z-[9999] fixed bg-[#3C4235] w-screen h-screen"
      style={{ pointerEvents: 'none' }}
    />
  );
}

export default PageLoader;
