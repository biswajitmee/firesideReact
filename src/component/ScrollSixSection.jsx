import React from 'react';

const ScrollSixSection = () => {
  return (
    <>
     <section className="flex lg:flex-row flex-col items-center gap-4 px-6 lg:px-[6rem] w-full h-auto lg:h-[75vh]">
  {/* BOX ONE */}
  <div className="group relative lg:flex-1 hover:lg:flex-[1.2] w-full h-[50vh] lg:h-full transition-all duration-1000">
    <img
      className="absolute opacity-100 group-hover:opacity-0 rounded-3xl w-full h-full object-center object-cover transition-all duration-1000 ease-in-out"
      src="/ScrollSectionSiximg-1.avif"
      alt=""
    />
    <video
      className="rounded-3xl w-full h-full object-cover object-top"
      autoPlay loop muted
      src="ScrollSectionSixVideo-1.mp4"
    ></video>

    <div className="bottom-4 left-4 absolute flex flex-col justify-center bg-[#f3efec1a] backdrop-blur-lg p-6 rounded-xl w-[240px] h-[90px]">
      <h4 className="font-IvyOraheadline2 font-medium text-[#f3efec] text-[4vw] lg:text-[1.905vw]">
        Dr. Lauren Dean
      </h4>
      <p className="text-[#f3efec] text-[2.5vw] lg:text-[1.071vw]">Dentist</p>
    </div>
  </div>

  {/* BOX TWO */}
  <div className="group relative lg:flex-1 hover:lg:flex-[1.2] w-full h-[50vh] lg:h-full transition-all duration-1000">
    <img
      className="absolute opacity-100 group-hover:opacity-0 rounded-3xl w-full h-full object-center object-cover transition-all duration-1000 ease-in-out"
      src="/ScrollSectionSiximg-2.avif"
      alt=""
    />
    <video className="rounded-3xl w-full h-full object-cover object-top"
      autoPlay loop muted src="ScrollSectionSixVideo-2.mp4"></video>

    <div className="bottom-4 left-4 absolute flex flex-col justify-center bg-[#f3efec1a] backdrop-blur-lg p-6 rounded-xl w-[240px] h-[90px]">
      <h4 className="font-IvyOraheadline2 font-medium text-[#f3efec] text-[4vw] lg:text-[1.905vw]">
        Dr. Jeff Flannery
      </h4>
      <p className="text-[#f3efec] text-[2.5vw] lg:text-[1.071vw]">Dentist</p>
    </div>
  </div>

  {/* BOX THREE */}
  <div className="group relative lg:flex-1 hover:lg:flex-[1.2] w-full h-[50vh] lg:h-full transition-all duration-1000">
    <img
      className="absolute opacity-100 group-hover:opacity-0 rounded-3xl w-full h-full object-center object-cover transition-all duration-1000 ease-in-out"
      src="/ScrollSectionSiximg-3.avif"
      alt=""
    />
    <video className="rounded-3xl w-full h-full object-cover object-top"
      autoPlay loop muted src="ScrollSectionSixVideo-3.mp4"></video>

    <div className="bottom-4 left-4 absolute flex flex-col justify-center bg-[#f3efec1a] backdrop-blur-lg p-6 rounded-xl w-[240px] h-[90px]">
      <h4 className="font-IvyOraheadline2 font-medium text-[#f3efec] text-[4vw] lg:text-[1.905vw]">
        Dr. Adrian Lovell
      </h4>
      <p className="text-[#f3efec] text-[2.5vw] lg:text-[1.071vw]">Dentist</p>
    </div>
  </div>
</section>

    </>
  )
}

export default ScrollSixSection;
