// import React from 'react';
// import { Link } from 'react-router-dom';

// function NavBar() {
//   return (
//     <div className='z-50 fixed mt-10 w-[90vw]' >
//       <div className='gap-4 grid grid-cols-6'>
//         <div className='col-start-1 col-end-1'>
//           <Link
//             to='/'
//             className='flex flex-1 justify-center items-center p-3 text-center'
//           >
//             <div className='bg-white rounded-lg w-10 h-10 logoBox'></div>
//           </Link>
//         </div>
//         <div className='col-span-2 col-end-7 menuGrid'>
//           <div className='flex flex-nowrap rounded-lg text-white nav-bg'>
//             <Link
//               to='/About'
//               className='flex flex-1 justify-center items-center p-3 text-center'
//             >
//               About
//             </Link>
//             <Link
//               to='/Community'
//               className='flex flex-1 justify-center items-center p-3 text-center'
//             >
//               Community
//             </Link>
//             <Link
//               to='/Blog'
//               className='flex flex-1 justify-center items-center p-3 text-center'
//             >
//               Blog
//             </Link>
//             <Link

//               className='flex flex-1 justify-center items-center m-2 p-3 rounded-lg text-center btn-color'
//             >
//               Join Us
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NavBar;

// import React from 'react'
// import { NavLink } from 'react-router-dom'

// function NavBar() {
//   const navLinkClass = ({ isActive }) =>
//     `flex flex-1 justify-center items-center p-3 text-center transition-all duration-300 ${
//       isActive ? 'bg-white text-black rounded-md font-semibold' : 'text-white'
//     }`

//   return (
//     <div className='z-50 fixed mt-10 w-[90vw]'>
//       <div className='gap-4 grid grid-cols-6'>
//         <div className='col-start-1 col-end-1'>
//           <NavLink
//             to='/'
//             className='flex flex-1 justify-center items-center p-3 text-center'
//           >
//             <div className='bg-white rounded-lg w-10 h-10 logoBox'></div>
//           </NavLink>
//         </div>

//         <div className='col-span-2 col-end-7 menuGrid'>
//           <div className='flex flex-nowrap rounded-lg nav-bg'>
//             <NavLink to='/about' className={navLinkClass}>
//               About
//             </NavLink>
//             <NavLink to='/community' className={navLinkClass}>
//               Community
//             </NavLink>
//             <NavLink to='/blog' className={navLinkClass}>
//               Blog
//             </NavLink>
//             <NavLink
//               to='/join'
//               className={({ isActive }) =>
//                 `flex flex-1 justify-center items-center m-2 p-3 rounded-lg text-center transition-all duration-300 ${
//                   isActive
//                     ? 'bg-white text-black font-semibold'
//                     : 'btn-color text-white'
//                 }`
//               }
//             >
//               Join Us
//             </NavLink>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default NavBar

// import React from 'react'
// import { NavLink } from 'react-router-dom'

// function NavBar({ onNavigate }) {
//   const navLinkClass = ({ isActive }) =>
//     `flex flex-1 justify-center items-center p-3 text-center transition-all duration-300 ${
//       isActive ? 'bg-white text-black rounded-md font-semibold' : 'text-white'
//     }`

//   return (
//     <div className='z-10 fixed mt-10 w-[90vw]'>
//       <div className='gap-4 grid grid-cols-6'>
//         <div className='col-start-1 col-end-1'>
//           <NavLink
//             to='/'
//             className='flex flex-1 justify-center items-center p-3 text-center'
//             onClick={() => onNavigate('/')} // Trigger loader on menu click
//             // onClick={() => onNavigate('/about')}
//           >
//             <div className='bg-white rounded-lg w-10 h-10 logoBox'></div>
//           </NavLink>
//         </div>

//         <div className='col-span-2 col-end-7 menuGrid'>
//           <div className='flex flex-nowrap rounded-lg nav-bg'>
//             <NavLink to='/about' className={navLinkClass} onClick={() => onNavigate('/about')}>
//               About
//             </NavLink>
//             <NavLink to='/community' className={navLinkClass} onClick={() => onNavigate('/community')}>
//               Community
//             </NavLink>
//             <NavLink to='/blog' className={navLinkClass} onClick={() => onNavigate('/blog')}>
//               Blog
//             </NavLink>
//             <NavLink
//               to='/join'

//               className={({ isActive }) =>
//                 `flex flex-1 justify-center items-center m-2 p-3 rounded-lg text-center transition-all duration-300 ${
//                   isActive
//                     ? 'bg-white text-black font-semibold'
//                     : 'btn-color text-white'
//                 }`
//               }
//               onClick={() => onNavigate('/join')}
//             >
//               Join Us
//             </NavLink>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default NavBar

// import React from 'react';
// import { NavLink } from 'react-router-dom';

// function NavBar({ onNavigate }) {
//   const navLinkClass = ({ isActive }) =>
//     `flex flex-1 justify-center items-center p-3 text-center transition-all duration-300 ${
//       isActive ? 'bg-white text-black rounded-md font-semibold' : 'text-white'
//     }`;

//   return (
//     <div className="z-10 fixed mt-10 w-[90vw]">
//       <div className="gap-4 grid grid-cols-6">
//         <div className="col-start-1 col-end-1">
//           <NavLink to="/" className="flex flex-1 justify-center items-center p-3 text-center" onClick={() => onNavigate('/')}>
//             <div className="bg-white rounded-lg w-10 h-10 logoBox"></div>
//           </NavLink>
//         </div>
//         <div className="col-span-2 col-end-7 menuGrid">
//           <div className="flex flex-nowrap rounded-lg nav-bg">
//             <NavLink to="/about" className={navLinkClass} onClick={() => onNavigate('/about')}>
//               About
//             </NavLink>
//             <NavLink to="/community" className={navLinkClass} onClick={() => onNavigate('/community')}>
//               Community
//             </NavLink>
//             <NavLink to="/blog" className={navLinkClass} onClick={() => onNavigate('/blog')}>
//               Blog
//             </NavLink>
//             <NavLink to="/join" className={navLinkClass} onClick={() => onNavigate('/join')}>
//               Join Us
//             </NavLink>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NavBar;

// D-25/11/2025

import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

function NavBar({ onNavigate }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const mobileMenuRef = useRef(null);
  const hamburgerTop = useRef(null);
  const hamburgerMid = useRef(null);
  const hamburgerBot = useRef(null);
  const circleRef = useRef(null);

  const circleTL = useRef(null);

  // Menu item refs for stagger animation
  const menuItemsRef = useRef([]);
  menuItemsRef.current = [];

  const addToRefs = (el) => {
    if (el && !menuItemsRef.current.includes(el)) {
      menuItemsRef.current.push(el);
    }
  };

  const navLinkClass =
    "flex flex-1 justify-center items-center p-3 text-center transition-all duration-300 text-white";

  const handleClick = (e, path) => {
    e.preventDefault();
    setMenuOpen(false);
    circleTL.current.reverse();
    onNavigate();

    setTimeout(() => navigate(path), 700);
  };

  // Circle expansion
  useEffect(() => {
    const circle = circleRef.current;
    const maxDim = Math.max(window.innerWidth, window.innerHeight);
    const finalScale = maxDim / 5;

    circleTL.current = gsap.timeline({ paused: true });

    circleTL.current.to(circle, {
      scale: finalScale,
      duration: 0.9,
      ease: "power3.inOut",
    });
  }, []);

  const toggleMenu = () => {
    const tl = circleTL.current;

    if (!menuOpen) {
      // ------------------------ OPEN ------------------------
      setMenuOpen(true);

      tl.play();

      gsap.to(mobileMenuRef.current, {
        opacity: 1,
        duration: 0.3,
        delay: 0.25,
      });

      // Hamburger animation
      gsap.to(hamburgerTop.current, { rotate: 45, y: 17, duration: 0.3 });
      gsap.to(hamburgerMid.current, { opacity: 0, duration: 0.2 });
      gsap.to(hamburgerBot.current, { rotate: -45, y: -6, duration: 0.3 });

      // ⭐ Slower stagger animation
      gsap.fromTo(
        menuItemsRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8, // slower movement
          delay: 0.35, // sync with circle
          stagger: 0.2, // slower stagger
          ease: "power3.out",
        }
      );
    } else {
      // ------------------------ CLOSE ------------------------
      setMenuOpen(false);

      tl.reverse();

      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        duration: 0.3,
      });

      // Hamburger reset
      gsap.to(hamburgerTop.current, { rotate: 0, y: 0, duration: 0.3 });
      gsap.to(hamburgerMid.current, { opacity: 1, duration: 0.2 });
      gsap.to(hamburgerBot.current, { rotate: 0, y: 0, duration: 0.3 });

      // ⭐ Slow exit stagger
      gsap.to(menuItemsRef.current, {
        y: 25,
        opacity: 0,
        duration: 0.45,
        stagger: 0.15,
        ease: "power2.in",
      });
    }
  };

  return (
    <>
      {/* DESKTOP NAV */}
      <div className="z-10 fixed mt-10 w-[90vw] hidden md:block">
        <div className="gap-4 grid grid-cols-6">
          <div className="col-start-1 col-end-1">
            <button onClick={(e) => handleClick(e, "/")}>
              <div className="bg-white rounded-lg w-10 h-10 logoBox"></div>
            </button>
          </div>

          <div className="col-span-2 col-end-7 menuGrid">
            <div className="flex flex-nowrap rounded-lg nav-bg">
              <button className={navLinkClass} onClick={(e) => handleClick(e, "/about")}>
                About
              </button>
              <button className={navLinkClass} onClick={(e) => handleClick(e, "/community")}>
                Community
              </button>
              <button className={navLinkClass} onClick={(e) => handleClick(e, "/blog")}>
                Blog
              </button>
              <button className={navLinkClass} onClick={(e) => handleClick(e, "/join")}>
                Join Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE NAV */}
      <div className="fixed top-5 left-5 z-30 md:hidden">
        <button onClick={toggleMenu} className="p-3">
          <div className="w-8 h-7 flex flex-col justify-between">
            <span ref={hamburgerTop} className="block h-1 bg-white rounded"></span>
            <span ref={hamburgerMid} className="block h-1 bg-white rounded"></span>
            <span ref={hamburgerBot} className="block h-1 bg-white rounded"></span>
          </div>
        </button>
      </div>

      {/* EXPANDING CIRCLE */}
      <div
        ref={circleRef}
        className="fixed top-5 left-5 w-10 h-10 rounded-full bg-[#111] z-20 pointer-events-none scale-0 md:hidden"
      ></div>

      {/* MOBILE MENU CONTENT */}
      <div
        ref={mobileMenuRef}
        className="
          fixed inset-0
          w-full h-full
          flex flex-col items-center justify-center
          text-white text-3xl
          gap-8 font-semibold
          opacity-0
          z-30
          pointer-events-none
          md:hidden
        "
      >
        <button ref={addToRefs} onClick={(e) => handleClick(e, "/about")}>
          About
        </button>
        <button ref={addToRefs} onClick={(e) => handleClick(e, "/community")}>
          Community
        </button>
        <button ref={addToRefs} onClick={(e) => handleClick(e, "/blog")}>
          Blog
        </button>
        <button ref={addToRefs} onClick={(e) => handleClick(e, "/join")}>
          Join Us
        </button>
      </div>
    </>
  );
}

export default NavBar;
