
const AboutSectionOne = () => {
  return (
    <>
      {/* <div className='z-10 relative w-screen h-screen overflow-hidden heroSection'>
        <img className='top-0 left-0 absolute w-full h-full object-cover'
          src="./AboutHero2-img.jpg" alt=""
        />

        <div className='bottom-14 left-8 z-10 absolute pl-20 text-white'>
          <h1 className='font-InterTight text-4xl lg:text-7xl'>
            Support <br /> that lets you focus <br />
            <span className='font-IvyOraheadline'>on what matters</span>
          </h1>
        </div>
      </div> */}

      <div className="z-50 relative w-full h-screen overflow-hidden heroSection">
        {/* <video className="top-0 left-0 absolute w-full h-full object-cover" src="/hero-section-video.mp4" autoPlay muted loop /> */}
        <div className="top-0 left-0 sm:left-0 absolute w-full h-full  bg-[url('/AboutHero2-img.avif')] 	aboutIntroBG" >

          {/* <img  src="./AboutHero2-img.jpg" alt="" /> */}
        </div>



        <div className="bottom-14 left-8 z-10 absolute pl-4 text-white">
          <h1 className="font-InterTight text-4xl lg:text-7xl">
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

export default AboutSectionOne;
