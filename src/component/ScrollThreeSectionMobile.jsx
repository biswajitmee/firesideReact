import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'


function ScrollThreeSection () {
  return (
    <>
      <section className='flex justify-center items-center h-screen graybg'>
        <div className='flex flex-col items-center text-center'>
          <div className='textBox'>
            <h1 className='font-IvyOraheadline2 text-2xl darkFont'>
              The first membership group designed specifically to help pediatric dentists
              <span className='font-IvyOraheadline'> like you grow</span>
            </h1>
          </div>
          <br />
          <div className='textBox2'>
            <p>
              Fireside is built for dentists, by dentists— you’ll find meaningful savings, resources, and a network of peers who understand the unique challenges you face every day.
            </p>
          </div>
        </div>
      </section>

      <div className='h-screen section1'>
        <div className='flex justify-center items-center w-screen h-screen text-white text-4xl'>
          <div className='h-screen overflow-hidden bigImgBack'>
            <div className='absolute h-screen overflow-hidden bigImg' data-speed="0.8"></div>

            <div className='content-end w-screen h-screen'>
              <div className='mb-20 p-4 w-screen h-80'>
             
                <div className='leftAlignDiv flex justify-start items-center p-4'>
                  <h1 className='font-IvyOraheadline2 text-3xl text-center leading-10'>
                    Stay independent, 
                    <span className='font-IvyOraheadline'>not isolated</span>
                  </h1>
                </div>

                <div className='rightAlignDiv flex justify-end items-center p-4'>
                  <div className='backdrop-blur-md m-2 p-4 rounded-lg w-full text-lg transparentBg'>
                    <p>
                      Get the support you need to grow your practice while
                      staying independent. We're bringing together the most
                      successful, likeminded independent practices.
                    </p>
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>

   
        <div className='justify-center items-center text-white text-4xl'>
      
          <div className='p-10 w-full h-full text-center'>
           
          
                <h1 className='font-IvyOraheadline2 font-medium text-black text-3xl leading-tight'>
                  Save money
                </h1>
                <h2 className='font-IvyOraheadline text-black text-3xl leading-tight'>
                  without the hassle
                </h2>
                <p className='mt-4 text-gray-600 text-xl'>
                  Gain access to exclusive deals and discounts that don't
                  require hours of price-shopping.
                </p>
                <button className='bg-[#2f3d2c] hover:bg-[#263226] mt-6 px-6 py-2 rounded-lg font-medium text-white text-lg transition'>
                  Learn more
                </button>
              
      
          </div>
         
 


         
          <div className='w-screen h-full'>
            <div className='gap-5 bg-[#F5F1EE] p-10 w-full'>
             
             
              <div className='justify-between w-full h-full'>
              
                <div className='flex-1 justify-center bg-white shadow-lg mb-4 p-6 rounded-xl'>
                  <img src='/icon1.svg' alt='Icon' className='mb-4 w-10 h-10' />
                  <h2 className='font-medium text-gray-600 text-3xl'>15-20%</h2>
                  <p className='text-gray-600 text-lg'>
                    Clinical Supply costs savings per year
                  </p>
                </div>

                <div className='flex-1 justify-center bg-white shadow-lg mb-4 p-6 rounded-xl'>
                  <img src='/icon2.svg' alt='Icon' className='mb-4 w-10 h-10' />
                  <h2 className='font-medium text-gray-600 text-3xl'>
                    20-100%
                  </h2>
                  <p className='text-gray-600 text-lg'>
                    Payment processing savings per year
                  </p>
                </div>
              </div>

              <div className='relative flex flex-1 justify-center items-center rounded-xl w-screen h-full overflow-hidden'>
                <div className='absolute w-screen h-screen bigImg3'></div>

                <div className='bottom-5 left-1/2 absolute bg-white/70 backdrop-blur-md p-6 rounded-xl text-center -translate-x-1/2 transform'>
                  <h2 className='font-medium text-gray-600 text-3xl'>
                    $15,000-$50,000+
                  </h2>
                  <p className='text-gray-600 text-lg'>
                    Total Estimated Profit increase by location
                  </p>
                </div>
              </div>

              <div className='flex flex-col justify-between gap-5 w-full h-full'>
                <div className='flex flex-col flex-1 justify-center bg-white shadow-lg p-6 rounded-xl'>
                  <img src='/icon3.svg' alt='Icon' className='mb-4 w-10 h-10' />
                  <h2 className='font-medium text-gray-600 text-3xl'>
                    150 hours
                  </h2>
                  <p className='text-gray-600 text-lg'>
                    Time and Labor savings per year
                  </p>
                </div>
                <div className='flex flex-col flex-1 justify-center bg-white shadow-lg p-6 rounded-xl'>
                  <img src='/icon4.svg' alt='Icon' className='mb-4 w-10 h-10' />
                  <h2 className='font-medium text-gray-600 text-3xl'>
                    $475/month
                  </h2>
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
        </div>
      

      <div className='h-screen section1'>
        <div className='flex justify-center items-center w-screen h-screen text-white text-4xl'>
          <div className='h-screen overflow-hidden bigImgBack'>
            <div className='absolute h-screen bigImg2'></div>

            <div className='content-end w-screen h-screen'>
              <div className='grid grid-cols-2 p-10 w-screen h-80'>
                <div className='leftAlignDiv flex justify-start items-center p-16'>
                  <h1 className='font-IvyOraheadline2 text-[4.5rem] leading-10'>
                    Stay independent , <br />
                    <br />
                    <span className='font-IvyOraheadline'>not isolated</span>
                  </h1>
                </div>

                <div className='rightAlignDiv flex justify-end items-center p-4'>
                  <div className='backdrop-blur-md m-10 p-10 rounded-lg text-xl transparentBg'>
                    <p>
                      Get the support you need to grow your practice while
                      staying independent. We're bringing together the most
                      successful, likeminded independent practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className='z-0 flex justify-center items-center w-screen h-[60vh]'>
        <div className='pt-50 max-w-[80%]'>
          <h1 className='font-IvyOraheadline2 text-[4.5rem] text-black text-4xl text-center leading-10'>
            You're ready to transform your practice,
            <br /> <br />
            <span className='font-IvyOraheadline orngColor'>
              but not sell it?
            </span>
          </h1>
          <div className='m-auto pt-14 w-2/3 text-xl text-center'>
            <p>
              Join Fireside, a warm and welcoming place where you can grow your{' '}
              <br />
              practice and your profits—without losing your independence.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default ScrollThreeSection
