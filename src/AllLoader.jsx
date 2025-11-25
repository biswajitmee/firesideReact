// Loader.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AllLoader = ({ onComplete }) => {
  const loaderRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    // Animate loader in (bottom to top fill)
    tl.fromTo(
      loaderRef.current,
      { yPercent: 100 },
      { yPercent: 0, duration: 0.8, ease: "power3.inOut" }
    ).to(loaderRef.current, {
      yPercent: -100,
      duration: 0.8,
      delay: 0.4,
      ease: "power3.inOut",
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return <div ref={loaderRef} className="top-0 left-0 z-[9999] fixed bg-black w-full h-full" />;
};

export default AllLoader;
