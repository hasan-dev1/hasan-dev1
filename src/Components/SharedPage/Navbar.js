import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import NormalButton from '../Utilities/NormalButton';

const Navbar = () => {

    const navbarItem = [
        <li className='mx-1' key={1}><NavLink className={'hover:bg-slate-700 rounded py-2 px-4'} to={'/'}>Home</NavLink></li>,
        <li className='mx-1' key={2}><a className={'hover:bg-slate-700 rounded py-2 px-4'} href="#about">Aboute Me</a></li>,
        <li className='mx-1' key={4}><a className={'hover:bg-slate-700 rounded py-2 px-4'} href="#project">Project</a></li>,
        <li className='mx-1' key={3}><a className={'hover:bg-slate-700 rounded py-2 px-4'} href="#hireme">Contuct Us</a></li>,
        <li className='mx-1' key={5}><NavLink className={'hover:bg-slate-700 rounded py-2 px-4'} to={'/blogs'}>Blogs</NavLink></li>,
    ]
    return (
      <div className="navbar text-white w-[1170px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>home</li>
              {navbarItem}
            </ul>
          </div>
          <Link className="font-bold text-4xl text-[#f507f5]">
            HASAN
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex font-semibold">{navbarItem}</ul>
        </div>
        <div className="navbar-end">
          {/* <NormalButton classes={'bg-slate-700 btn-sm mx-1'}><Link>Login</Link></NormalButton>
          <NormalButton classes={'bg-[#f507f5] btn-sm mx-1'}><Link>SignUp</Link></NormalButton> */}
          <NormalButton classes={'bg-[#f507f5] btn-sm mx-1'}><Link>+8801797038314</Link></NormalButton>
        </div>
      </div>
    );
};

export default Navbar;