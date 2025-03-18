import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='z-50 fixed mt-10 w-[90vw]' >
      <div className='gap-4 grid grid-cols-6'>
        <div className='col-start-1 col-end-1'>
          <Link
            to='/'
            className='flex flex-1 justify-center items-center p-3 text-center'
          >
            <div className='bg-white rounded-lg w-10 h-10 logoBox'></div>
          </Link>
        </div>
        <div className='col-span-2 col-end-7 menuGrid'>
          <div className='flex flex-nowrap rounded-lg text-white nav-bg'>
            <Link
              to='/about'
              className='flex flex-1 justify-center items-center p-3 text-center'
            >
              About
            </Link>
            <Link
              to='/community'
              className='flex flex-1 justify-center items-center p-3 text-center'
            >
              Community
            </Link>
            <Link
              to='/blog'
              className='flex flex-1 justify-center items-center p-3 text-center'
            >
              Blog
            </Link>
            <Link
              to='/join'
              className='flex flex-1 justify-center items-center m-2 p-3 rounded-lg text-center btn-color'
            >
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
