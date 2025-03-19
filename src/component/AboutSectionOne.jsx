import React from 'react'

const AboutSectionOne = () => {
  return (
    <>
      <div
        className='z-10 relative w-full h-screen overflow-hidden heroSection'
      >
        <img
          className='top-0 left-0 absolute w-full h-full object-cover'
          src="./AboutHero2-img.jpg" alt=""
        />

        <div className='bottom-14 left-8 z-10 absolute pl-20 text-white'>
          <h1 className='font-InterTight text-4xl lg:text-7xl'>
            Support <br /> that lets you focus <br />
            <span className='font-IvyOraheadline'>on what matters</span>
          </h1>
        </div>
      </div>
    </>
  )
}

export default AboutSectionOne;
