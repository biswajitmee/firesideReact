
const AboutSectionTwo = () => {
  return (
    <>
      <div className='mt-40 mb-16'>
        <div className='px-24  flex justify-between items-center'>
          <div className='w-1/2 relative'>
            <video
              className='w-[33vw] h-[88vh] rounded-2xl object-cover'
              autoPlay
              loop
              muted
              src="AboutSectionTwoVideo1.mp4"
            ></video>

            <div className='absolute z-10 right-[55%] top-1/2 w-[80px] h-[80px] rounded-full bg-[#f3efec1a] p-8'>
              <img src="./SixSectionplayIcon.svg" alt="" />
            </div>
          </div>

          <div className='w-1/2 pl-[5rem]'>
            <h1 className='text-[3.5vw] text-[#232323] font-IvyOraheadline3 leading-[4rem] w-[40vw]'>
              Community empowering independent pediatric dentists
            </h1>
            <p className='text-[1.2vw] font-InterTight mt-12 w-[80%] text-[#232323]'>Our field is facing a challenge. Pediatric dentists are stretched thin balancing patient care, business growth, and administrative demands. It&apos;s time to reshape what independent practice can look like—supportive, connected, and sustainable. Fireside is the community platform guiding pediatric dentists to build balanced, thriving practices.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutSectionTwo;
