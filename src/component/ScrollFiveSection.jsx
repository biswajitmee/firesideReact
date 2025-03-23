import React from 'react'

const ScrollFiveSection = () => {
  return (
    <>
      <div className='grid lg:grid-cols-2 grid-row-2 px-[1rem] lg:px-[6rem] py-[2rem] lg:py-[6rem] lg:text-left text-center'>
        <div className='pt-5 lg:pt-20'>
          <h2 className='font-IvyOraheadline2 text-[#232323] lg:text-[4.6vw] text-3xl leading-10 lg:leading-[4.5rem]'>
            Meet a few <br /> of our members
          </h2>

          <p className='pt-8 text-sm lg:text-xl'>
            Our founders are pediatric dentists who know the struggles firsthand
            and are committed to creating a community where we can be better,
            together.
          </p>
        </div>
        <div className='flex justify-center lg:justify-end lg:items-end py-5 text-center lg:text-right'>
          <button className='bg-[#3C4235] px-10 py-3 rounded-xl font-normal text-[1rem] text-white'>
            About Us
          </button>
        </div>
      </div>
    </>
  )
}

export default ScrollFiveSection
