import React from 'react'
import gsap from 'gsap'

function ScrollThreeSectionMobile () {
  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <div className='text-center middleBox'>
          <div className='m-auto w-[80vw]'>
            <h1 className='font-IvyOraheadline2 text-3xl darkFont'>
              The first membership group designed specifically to help pediatric
              dentists
              <span className='font-IvyOraheadline'> like you grow</span>
            </h1>
          </div>

          <div className='m-auto w-[80vw]'>
            <p>
              Fireside is built for dentists, by dentists— you’ll find
              meaningful savings, resources, and a network of peers who
              understand the unique challenges you face every day.
            </p>
          </div>
        </div>
      </div>

      <div className='relative rounded-3xl w-screen h-screen overflow-hidden text-white'>
        <div className='absolute w-screen h-screen overflow-hidden bigImgMobile' data-speed="0.6"></div>
        <div className='content-end w-screen h-screen'>
          <div className='mb-10 p-4 w-screen'>
            <div className='gap-4 grid grid-cols-1 sm:grid-cols-2'>
              <div className='flex flex-col justify-end p-4'>
                <h1 className='font-IvyOraheadline2 text-3xl text-center leading-10'>
                  Stay independent,
                  <span className='font-IvyOraheadline'> not isolated</span>
                </h1>
              </div>

              <div className='flex justify-end items-center p-4'>
                <div className='backdrop-blur-md m-2 p-4 rounded-lg w-full text-lg transparentBg'>
                  <p>
                    Get the support you need to grow your practice while staying
                    independent. We're bringing together the most successful,
                    likeminded independent practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bottom-10 m-auto sm:m-auto py-16 w-[90vw] sm:w-[50vw] text-center'>
        <h1 className='font-IvyOraheadline2 font-medium text-black text-3xl leading-tight'>
          Save money
        </h1>
        <h2 className='font-IvyOraheadline text-black text-2xl leading-tight'>
          without the hassle
        </h2>
        <p className='mt-4 text-gray-600 text-lg'>
          Gain access to exclusive deals and discounts that don't require hours
          of price-shopping.
        </p>
        <button className='bg-[#2f3d2c] hover:bg-[#263226] mt-6 px-4 py-2 rounded-lg font-medium text-white text-sm transition'>
          Learn more
        </button>
      </div>

      <div className='px-5'>
        <div className='gap-4 grid grid-cols-1 sm:grid-cols-2'>
          <div className='left'>
            <div>
              <div className='flex flex-col flex-1 justify-center bg-white shadow-lg p-6 rounded-xl'>
                <img src='/icon1.svg' alt='Icon' className='mb-4 w-10 h-10' />
                <h2 className='font-medium text-gray-600 text-3xl'>15-20%</h2>
                <p className='text-gray-600 text-lg'>
                  Clinical Supply costs savings per year
                </p>
              </div>
            </div>
            <div>
              <div className='flex flex-col flex-1 justify-center bg-white shadow-lg mt-5 p-6 rounded-xl'>
                <img src='/icon2.svg' alt='Icon' className='mb-4 w-10 h-10' />
                <h2 className='font-medium text-gray-600 text-3xl'>20-100%</h2>
                <p className='text-gray-600 text-lg'>
                  Payment processing savings per year
                </p>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='relative flex flex-1 justify-center items-center rounded-xl w-full h-screen overflow-hidden'>
              <div className='absolute w-screen h-screen bigImg3Mobile' data-speed="0.6"></div>

              <div className='bottom-5 left-1/2 absolute bg-white/70 backdrop-blur-md p-6 rounded-xl text-center -translate-x-1/2 transform'>
                <h2 className='font-medium text-gray-600 text-3xl'>
                  $15,000-$50,000+
                </h2>
                <p className='text-gray-600 text-lg'>
                  Total Estimated Profit increase by location
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='gap-4 grid grid-cols-1 sm:grid-cols-2'>
          <div>
            <div className='flex flex-col flex-1 justify-center bg-white shadow-lg mt-4 p-6 rounded-xl'>
              <img src='/icon3.svg' alt='Icon' className='mb-4 w-10 h-10' />
              <h2 className='font-medium text-gray-600 text-3xl'>150 hours</h2>
              <p className='text-gray-600 text-lg'>
                Time and Labor savings per year
              </p>
            </div>
          </div>
          <div>
            <div className='flex flex-col flex-1 justify-center bg-white shadow-lg mb-4 p-6 rounded-xl'>
              <img src='/icon4.svg' alt='Icon' className='mb-4 w-10 h-10' />
              <h2 className='font-medium text-gray-600 text-3xl'>$475/month</h2>
              <p className='text-gray-600 text-lg'>
                Fireside Membership Fee
                <br />
                $125 for additional locations
                <br />
                All backed by risk-free guarantee
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='relative rounded-3xl w-screen h-screen overflow-hidden text-white'>
        <div className='absolute w-screen h-screen overflow-hidden bigImg2' data-speed="0.6"></div>
        <div className='content-end w-screen h-screen'>
          <div className='mb-10 p-4 w-screen'>
            <div className='gap-4 grid grid-cols-1 sm:grid-cols-2'>
              <div className='flex flex-col justify-end p-4'>
                <h1 className='font-IvyOraheadline2 text-3xl text-center leading-10'>
                  Stay independent,
                  <span className='font-IvyOraheadline'> not isolated</span>
                </h1>
              </div>

              <div className='flex justify-end items-center p-4'>
                <div className='backdrop-blur-md m-2 p-4 rounded-lg w-full text-lg transparentBg'>
                  <p>
                    Get the support you need to grow your practice while staying
                    independent. We're bringing together the most successful,
                    likeminded independent practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='justify-center items-center py-16 w-screen h-[50vh]' >
        <div className='px-5 pt-10 w-full'>
          <h1 className='font-IvyOraheadline2 text-black text-4xl text-center'>
            You're ready to transform your practice,            
            <span className='font-IvyOraheadline orngColor'>
              but not sell it?
            </span>
          </h1>
          
          <div className='m-auto py-4 w-[90vw] text-lg text-center leading-5'>
            <p>
              Join Fireside, a warm and welcoming place where you can grow your 
              practice and your profits—without losing your independence.
            </p>
          </div>
        </div>
      </div>


    </>
  )
}

export default ScrollThreeSectionMobile
