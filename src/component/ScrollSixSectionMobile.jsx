import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollSixSectionMobile = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      const cardsWrappers = gsap.utils.toArray(".card-wrapper");
      const cards = gsap.utils.toArray(".card");

      cardsWrappers.forEach((wrapper, i) => {
        const card = cards[i];
        gsap.to(card, {
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: "top " + (60 + 90 * i),
            end: "bottom 800",
            endTrigger: ".wrapper",
            scrub: 5,
            pin: wrapper,
            pinSpacing: false,
          },
        });
      });
      
    }
  }, []);

  return (
    <>
    <div class="spacer"></div>
    <div ref={containerRef} className="border-gray-300 wrapper">
      <div className="mx-auto px-4 w-full cards">
        {[1, 2, 3].map((index) => (
          <div key={index} className="mb-20 last:mb-0 py-4 w-full perspective-500 card-wrapper">
            <div className="group relative w-full h-[70vh] card">
              <img
                className="absolute opacity-100 group-hover:opacity-0 rounded-3xl w-full h-full object-center object-cover transition-all duration-1000 ease-in-out"
                src={`/ScrollSectionSiximg-${index}.avif`}
                alt=""
              />
              <video
                className="rounded-3xl w-full h-full object-cover object-top"
                autoPlay
                loop
                muted
                src={`ScrollSectionSixVideo-${index}.mp4`}
              ></video>
              <div className="bottom-4 left-4 absolute flex flex-col justify-center bg-[#f3efec1a] backdrop-blur-lg p-6 rounded-xl w-[240px] h-[90px]">
                <h4 className="font-IvyOraheadline2 font-medium text-[#f3efec] text-[4vw] lg:text-[1.905vw]">
                  {getDoctorName(index)}
                </h4>
                <p className="text-[#f3efec] text-[2.5vw] lg:text-[1.071vw]">Dentist</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div class="spacer"></div>
    </>
  );
};

const getDoctorName = (index) => {
  const names = [
    "Dr. Lauren Dean",
    "Dr. Jeff Flannery",
    "Dr. Adrian Lovell",
  ];
  return names[index - 1] || "Unknown";
};

export default ScrollSixSectionMobile;