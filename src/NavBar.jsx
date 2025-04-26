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


import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar({ onNavigate }) {
  const navLinkClass = ({ isActive }) =>
    `flex flex-1 justify-center items-center p-3 text-center transition-all duration-300 ${
      isActive ? 'bg-white text-black rounded-md font-semibold' : 'text-white'
    }`

  return (
    <div className='z-10 fixed mt-10 w-[90vw]'>
      <div className='gap-4 grid grid-cols-6'>
        <div className='col-start-1 col-end-1'>
          <NavLink
            to='/'
            className='flex flex-1 justify-center items-center p-3 text-center'
            onClick={() => onNavigate('/')} // Trigger loader on menu click
            // onClick={() => onNavigate('/about')}
          >
            <div className='bg-white rounded-lg w-10 h-10 logoBox'></div>
          </NavLink>
        </div>

        <div className='col-span-2 col-end-7 menuGrid'>
          <div className='flex flex-nowrap rounded-lg nav-bg'>
            <NavLink to='/about' className={navLinkClass} onClick={() => onNavigate('/about')}>
              About
            </NavLink>
            <NavLink to='/community' className={navLinkClass} onClick={() => onNavigate('/community')}>
              Community
            </NavLink>
            <NavLink to='/blog' className={navLinkClass} onClick={() => onNavigate('/blog')}>
              Blog
            </NavLink>
            <NavLink
              to='/join'
              className={({ isActive }) =>
                `flex flex-1 justify-center items-center m-2 p-3 rounded-lg text-center transition-all duration-300 ${
                  isActive
                    ? 'bg-white text-black font-semibold'
                    : 'btn-color text-white'
                }`
              }
              onClick={() => onNavigate('/join')}
            >
              Join Us
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
