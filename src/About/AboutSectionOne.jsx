import React from 'react'

function AboutSectionOne() {
  return (
    <>
      
      <div className="z-20 relative w-full h-screen overflow-hidden heroSection" >
        {/* <video className="top-0 left-0 absolute w-full h-full object-cover" src="/hero-section-video.mp4" autoPlay muted loop /> */}
        <img src='https://dev-oasisapi.pantheonsite.io/wp-content/uploads/2025/04/AboutHero2-img-scaled.avif' className='hidden lg:block top-0 left-0 absolute w-full h-full object-cover'  />
        <img src='https://dev-oasisapi.pantheonsite.io/wp-content/uploads/2025/04/AboutHeroMobile-img.avif' className='lg:hidden block top-0 left-0 absolute w-full h-full object-cover' />

        <div className="bottom-14 left-8 z-10 absolute pl-4 text-white">
          <h1 className="font-InterTight text-4xl lg:text-7xl" id='quote'>
            <span className="block">Want more</span>
            <span className="block">for your practice?</span>
            <span className="block font-IvyOraheadline">
              Join us by <span className="orngColor"> the Fireside.</span>
            </span>
          </h1>
          <p className="mt-4 font-InterTight text-lg">
            The first membership community for pediatric dentists, built by pediatric dentists.
          </p>
        </div>
      </div>

    </>
  )
}

export default AboutSectionOne