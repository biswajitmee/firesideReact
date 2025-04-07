import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'

function MobileNavBar () {
  const line1 = useRef(null)
  const line2 = useRef(null)
  const line3 = useRef(null)
  const openMenu = useRef(null)
  const menuIconTL = useRef(null)
  const openMenuTL = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // ✅ GSAP Timeline for Menu Icon Animation (Hamburger to X)
    menuIconTL.current = gsap
      .timeline({ paused: true })
      .to(line1.current, { top: '44%', rotate: 45 }, 0)
      .to(line2.current, { opacity: 0 }, 0) // Hide middle line
      .to(line3.current, { top: '44%', rotate: -45 }, 0)

    // ✅ GSAP Timeline for Menu Expand/Collapse Animation
    openMenuTL.current = gsap
      .timeline({ paused: true })
      .fromTo(
        openMenu.current,
        { height: '0px', padding: 0, margin: 0 },
        { height: '180px', duration: 0.8, ease: 'power2.out' }
      )
  }, [])

  // ✅ Function to toggle menu animations
  const toggleMenu = () => {
    setIsOpen(!isOpen)
    if (isOpen) {
      menuIconTL.current.reverse()
      openMenuTL.current.reverse()
    } else {
      menuIconTL.current.play()
      openMenuTL.current.play()
    }
  }

  return (
    <div className='z-50 fixed mt-2 w-[90vw]'>
      <div className='items-center gap-4 grid grid-cols-12'>
        <div className='col-span-3'>
          <Link to='/' className='flex justify-center items-center p-3'>
            <div className='bg-white rounded-lg w-10 h-10 logoBox'></div>
          </Link>
        </div>

        <div className='flex justify-end col-span-9'>
          <div className='relative rounded-2xl text-white nav-bg'>
            <div className='flex'>
              <Link
                to='/join'
                className='flex flex-1 justify-center items-center m-2 p-3 pr-10 pl-10 rounded-lg text-center btn-color'
              >
                Join Us
              </Link>

              {/* ✅ OnClick triggers both animations */}
              <div
                className='relative mt-6 mr-5 ml-5 cursor-pointer menuIcon'
                onClick={toggleMenu}
              >
                <div
                  className='top-0 absolute bg-white w-6 h-[3px] line1'
                  ref={line1}
                ></div>
                <div
                  className='top-2 absolute bg-white w-6 h-[3px] line2'
                  ref={line2}
                ></div>
                <div
                  className='top-4 absolute bg-white w-6 h-[3px] line3'
                  ref={line3}
                ></div>
              </div>
            </div>

            {/* ✅ Expandable Navigation Menu */}
            <ul
              ref={openMenu}
              className='absolute bg-gray-800 rounded-lg w-full overflow-hidden openNavigation'
            >
              <li className="p-2 text-white"> <Link to='/about' onClick={() => isOpen && toggleMenu()} >
                About
              </Link></li>
              <li className="p-2 text-white"><Link to='/community' onClick={() => isOpen && toggleMenu()}  >
                Community
              </Link></li>
              <li className="p-2 text-white"> <Link to='/blog' onClick={() => isOpen && toggleMenu()} >
                Blog
              </Link></li>

             
              
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNavBar
