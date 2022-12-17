import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <div className="bg-base-200 text-base-content">
        <footer className="footer p-10 lg:w-[1170px] mx-auto">
          <div>
            <p className='text-[#f507f5] text-4xl'>Hasan</p>
            <p>Full Stack Developer</p>
          </div>
          <div>
            <span className="footer-title">Services</span>
            <Link to={'/home'} className="link link-hover">Home</Link>
            <Link to={'/project'} className="link link-hover">Project</Link>
            <Link to={'/aboutus'} className="link link-hover">About us</Link>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <Link to={'/aboutus'} className="link link-hover">About us</Link>
            <Link to={'/blogs'} className="link link-hover">Blog</Link>
          </div>
          <div>
            <span className="footer-title"></span>
            
          </div>
        </footer>
      </div>
    );
};

export default Footer;