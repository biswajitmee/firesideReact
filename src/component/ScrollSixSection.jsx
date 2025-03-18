import React from 'react';

const ScrollSixSection = () => {
  return (
    <>
      <section className='flex items-center h-[75vh] w-full px-[6rem] gap-x-4'>
        {/* BOX ONE */}
        <div
          className='flex-1 h-full relative group transition-all duration-1000 hover:flex-[1.2]'
        >
          <img
            className='w-full h-full rounded-3xl absolute object-cover object-center opacity-100 group-hover:opacity-0 transition-all duration-1000 ease-in-out'
            src="/ScrollSectionSiximg-1.avif"
            alt=""
          />
          <video
            className='w-full h-full object-cover object-top rounded-3xl'
            autoPlay loop muted
            src="ScrollSectionSixVideo-1.mp4"
          ></video>

          <div
            className='absolute w-[240px] h-[90px] bottom-4 left-4 bg-[#f3efec1a]      backdrop-blur-lg p-6 rounded-xl flex flex-col justify-center'
          >
            <h4 className='text-[#f3efec] font-medium text-[1.905vw] font-IvyOraheadline2'>Dr. Lauren Dean</h4>
            <p className='text-[#f3efec] text-[1.071vw]'>Dentist</p>
          </div>

          <div
            className='absolute top-0 right-0 cursor-pointer opacity-0   group-hover:opacity-100'
          >
            <div className='relative'>
              <div className='absolute w-4 h-4 z-20 top-14 right-14 '>
                <img
                  className='w-4 h-4 object-cover'
                  src="SixSectionplayIcon.svg"
                  alt="Play"
                />
              </div>
              <div
                className='absolute z-10 top-8 right-8 p-8 bg-[#f3efec1a] backdrop-blur-lg rounded-full flex flex-col items-center justify-center opacity-100'
              >

              </div>
            </div>
          </div>
        </div>

        {/* BOX TWO */}
        <div className='flex-1 h-full relative group transition-all duration-1000 hover:flex-[1.2]'>
          <img
            className='w-full h-full rounded-3xl absolute object-cover object-center 
            opacity-100 group-hover:opacity-0 transition-all duration-1000 ease-in-out'
            src="/ScrollSectionSiximg-2.avif" alt=""
          />
          <video className='w-full h-full object-cover object-top rounded-3xl'
            autoPlay loop muted src="ScrollSectionSixVideo-2.mp4"></video>

          <div
            className='absolute w-[240px] h-[90px] bottom-4 left-4 bg-[#f3efec1a] backdrop-blur-lg p-6 rounded-xl flex flex-col justify-center'
          >
            <h4 className='text-[#f3efec] font-medium text-[1.905vw] font-IvyOraheadline2'>Dr. Jeff Flannery</h4>
            <p className='text-[#f3efec] text-[1.071vw]'>Dentist</p>
          </div>

          <div
            className='absolute top-0 right-0 cursor-pointer opacity-0   group-hover:opacity-100'
          >
            <div className='reletive'>
              <div className='absolute w-4 h-4 z-20 top-14 right-14 '>
                <img
                  className='w-4 h-4 object-cover'
                  src="SixSectionplayIcon.svg"
                  alt="Play"
                />
              </div>
              <div
                className='absolute z-10 top-8 right-8 p-8 bg-[#f3efec1a] backdrop-blur-lg rounded-full flex flex-col items-center justify-center opacity-100'
              >

              </div>
            </div>
          </div>
        </div>

        {/* BOX THREE */}
        <div
          className='flex-1 h-full relative group transition-all duration-1000 hover:flex-[1.2]'
        >
          <img
            className='w-full h-full rounded-3xl absolute object-cover object-center 
           opacity-100 group-hover:opacity-0 transition-all duration-1000 ease-in-out'
            src="/ScrollSectionSiximg-3.avif" alt=""
          />
          <video className='w-full h-full object-cover object-top rounded-3xl'
            autoPlay loop muted src="ScrollSectionSixVideo-3.mp4"></video>

          <div
            className='absolute w-[240px] h-[90px] bottom-4 left-4 bg-[#f3efec1a] backdrop-blur-lg p-6 rounded-xl flex flex-col justify-center'
          >
            <h4 className='text-[#f3efec] font-medium text-[1.905vw] font-IvyOraheadline2'>Dr. Adrian Lovell</h4>
            <p className='text-[#f3efec] text-[1.071vw]'>Dentist</p>
          </div>

          <div
            className='absolute top-0 right-0 cursor-pointer opacity-0   group-hover:opacity-100'
          >
            <div className='reletive'>
              <div className='absolute w-4 h-4 z-20 top-14 right-14 '>
                <img
                  className='w-4 h-4 object-cover'
                  src="SixSectionplayIcon.svg"
                  alt="Play"
                />
              </div>
              <div
                className='absolute z-10 top-8 right-8 p-8 bg-[#f3efec1a] backdrop-blur-lg rounded-full flex flex-col items-center justify-center opacity-100'
              >

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ScrollSixSection;
