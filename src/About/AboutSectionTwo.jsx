import React from 'react'

function AboutSectionTwo() {
  return (
    <>
 
      <div className='m-auto w-[90vw]'>
        <div className='flex flex-col-reverse justify-between items-center lg:grid lg:grid-cols-2 my-10'>
        
          <div className='py-6'>
            <div  className='relative justify-center text-center'>
            <video
              className='rounded-2xl w-[100vw] lg:w-[80%] h-[50vh] lg:h-[90vh] object-cover'
              autoPlay
              loop
              muted
              src="https://dev-oasisapi.pantheonsite.io/wp-content/uploads/2025/04/AboutSectionTwoVideo1-1.mp4"
            ></video>

            <div className='top-1/2 right-[55%] z-10 absolute bg-[#f3efec1a] p-8 rounded-full w-[80px] h-[80px]'>
              <img src="./SixSectionplayIcon.svg" alt="" />
            </div></div>
          </div>

          <div className='py-6'>
            <h1 className='font-IvyOraheadline3 text-[#232323] text-2xl lg:text-6xl'>
              Community empowering independent pediatric dentists
            </h1>
            <p className='mt-12 font-InterTight text-[#232323] text-sm lg:text-lg'>Our field is facing a challenge. Pediatric dentists are stretched thin balancing patient care, business growth, and administrative demands. It&apos;s time to reshape what independent practice can look like—supportive, connected, and sustainable. Fireside is the community platform guiding pediatric dentists to build balanced, thriving practices.</p>
          </div>

        </div>
      </div>
 
    </>
  )
}

export default AboutSectionTwo

 
