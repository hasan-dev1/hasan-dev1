import React from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css'

const About = () => {
    return (
      <div id='about' className=" grid lg:grid-cols-2 py-[110px] max-w-[1170px] mx-auto">
        <div className="">
          <img
            className="w-full rounded h-[350px] my-auto pr-8 filterimg"
            src="signup.gif"
            alt=""
          />
        </div>
        <div className=" flex flex-col justify-center items-start">
          <h3 className=" leading-0 text-[2.5rem]">ABOUT ME</h3>
          <h4 className=" leading-0 text-[1.75rem]">
            <span className="text-[#f507f5]">D</span> eveloper &{" "}
            <span className="text-[#f507f5]">D</span>esigner
          </h4>
          <p className="mb-[15px] text-justify">
            Since beginning my journey as a Developer a few years ago, I am
            interested to work and collaborating with talented people to create
            digital products for both business and consumer use. I'm quietly
            confident, naturally curious, and perpetually working on improving
            my chops one design problem at a time.
          </p>
          <p>
            I work to make a better web; one that is fast, easy to use,
            beautiful, accessible to all, and frustration-free. Regardless of
            your specific business requirements, in solving these challenges,
            you have a great chance of finding success online.
          </p>
          <Link
          to={'/moreabout'}
            className={
              "btn px-8 text-white pt-1 rounded-[30px] hover:bg-slate-600 btn-sm bg-[#f507f5] mt-6"
            }
          >
            Reade More
          </Link>
        </div>
      </div>
    );
};

export default About;