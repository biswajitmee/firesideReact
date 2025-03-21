import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

function ScrollThreeSection () {
  return (
    <>
      <section className='flex justify-center items-center h-screen graybg'>
        <div className='flex flex-col items-center text-center'>
          <div className='textBox'>
            <h1 className='font-IvyOraheadline2 text-2xl darkFont'>
              The first membership group designed specifically to help pediatric
              dentists
              <span className='font-IvyOraheadline'> like you grow</span>
            </h1>
          </div>
          <br />
          <div className='textBox2'>
            <p>
              Fireside is built for dentists, by dentists— you’ll find
              meaningful savings, resources, and a network of peers who
              understand the unique challenges you face every day.
            </p>
          </div>
        </div>
      </section>

      <div className='h-screen section1'>
        <div className='flex justify-center items-center w-screen h-screen text-white text-4xl'>
          <div className='h-screen overflow-hidden bigImgBackMobile'>
            <div
              className='absolute w-screen h-screen overflow-hidden bigImgMobile'
              data-speed='0.6'
            ></div>

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
          <p className='mt-4 text-gray-600 text-sm'>
            Gain access to exclusive deals and discounts that don't require
            hours of price-shopping.
          </p>
          <button className='bg-[#2f3d2c] hover:bg-[#263226] mt-6 px-6 py-2 rounded-lg text-white text-sm transition'>
            Learn more
          </button>
        </div>

        <div className='w-screen h-full'>
          <div className='bg-[#F5F1EE] pt-2 w-full'>
            <div className='m-4 h-full'>
              <div className='bg-white shadow-lg mb-4 p-16 rounded-xl overflow-hidden text-center'>
                <img src='/icon1.svg' alt='Icon' className='m-auto mb-4 w-12' />
                <h2 className='font-medium text-gray-600 text-2xl'>15-20%</h2>
                <p className='text-gray-600 text-sm'>
                  Clinical Supply costs savings per year
                </p>
              </div>

              <div className='flex-1 justify-center bg-white shadow-lg mb-4 p-16 rounded-xl text-center'>
                <img src='/icon2.svg' alt='Icon' className='m-auto mb-4 w-12' />
                <h2 className='font-medium text-gray-600 text-2xl'>20-100%</h2>
                <p className='text-gray-600 text-sm'>
                  Payment processing savings per year
                </p>
              </div>
            </div>

            <div className='relative flex flex-1 justify-center items-center rounded-xl w-screen h-screen overflow-hidden'>
              <div className='absolute w-full h-screen overflow-hidden bigImg3Mobile' data-speed="0.6"></div>
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
            <div className='flex-1 justify-center bg-white shadow-lg mb-4 p-16 rounded-xl text-center'>
                <img src='/icon3.svg' alt='Icon' className='m-auto mb-4 w-12' />
                <h2 className='font-medium text-gray-600 text-2xl'>
                  150 hours
                </h2>
                <p className='text-gray-600 text-sm'>
                  Time and Labor savings per year
                </p>
              </div>
              <div className='flex-1 justify-center bg-white shadow-lg mb-4 p-16 rounded-xl text-center'>
                <img src='/icon4.svg' alt='Icon' className='m-auto mb-4 w-12' />
                <h2 className='font-medium text-gray-600 text-2xl'>
                  $475/month
                </h2>
                <p className='text-gray-600 text-sm'>
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

      <div className='h-screen'>
        <div className='flex justify-center w-screen h-screen text-white text-4xl'>
          <div className='h-screen overflow-hidden bigImgBack2Mobile'>
            <div className='absolute h-screen bigImg2Mobile' data-speed="0.6"></div>

            <div className='content-end w-screen h-screen'>
               <div className='m-0 p-6'>
                <div className='items-center mb-8'>
                  <h1 className='font-IvyOraheadline2 text-4xl text-center leading-10'>
                    Stay independent, 
                    <span className='font-IvyOraheadline'>not isolated</span>
                  </h1>
                </div>

                <div className='flex justify-end items-center'>
                  <div className='backdrop-blur-md p-6 rounded-lg text-lg transparentBg'>
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
<br/>
      <section className='z-0 flex justify-center items-center w-screen'>
        <div className='pt-50'>
          <h1 className='p-6 font-IvyOraheadline2 text-black text-4xl text-center leading-10'>
            You're ready to transform your practice,
            <br /> 
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
