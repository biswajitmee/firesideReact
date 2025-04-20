import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function RoundCircelAnimation() {
  const circleRef = useRef(null);

  const imgRefhidden = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        circleRef.current,
        { attr: { r: 0 } },
        {
          attr: { r: Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2) },
          duration: 1, // Reduced duration for a smoother effect
          ease: "none",
        }
      )
      tl.to(imgRefhidden.current,{ opacity:0,duration:0.5, ease: "none",},"-=1")

      

    });

    return () => ctx.revert();
  }, []);

  return (
    <div style={{ position: "fixed", width: "100vw", height: "100vh", overflow: "hidden" }}>
      <svg width="100%" height="100%">
        <defs>
          <mask id="circleMask">
            <rect width="100%" height="100%" fill="black" />
            <circle ref={circleRef} cx="50%" cy="50%" r="0" fill="white" />
          </mask>
        </defs>
        <image ref={imgRefhidden}
          href="backgroundForrest.avif"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          mask="url(#circleMask)"
           
        />
      </svg>
    </div>
  );
}

export default RoundCircelAnimation;
