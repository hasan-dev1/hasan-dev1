import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import '../../../App.css'
import AnimatedLetter from "./AnimatedLetter";

const HomeBanner = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [...'Hasan',' ']
  const jobArray = [...'Nice to meet you']

  useEffect(()=>{
      setTimeout(()=>{
        setLetterClass('text-animate-hover')
      }, 4000)
  },[])
  
  return (
    <div id="home" className="flex justify-between items-center lg:max-w-[1170px]  imgbg py-48 mx-auto ">
      <div className="lg:w-1/2 flex justify-center flex-col items-start text-white ">
        <h3 className="lg:text-5xl text-3xl leading-[45px]  font-bold">
          <span>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _4`}>i, &nbsp;</span>
          </span>
          <span>
            <span className={`${letterClass} _5`}>I</span>
            <span className={`${letterClass} _6`}>'m &nbsp;</span>
          </span>
          <span className=" text-[#f507f5]">
            <AnimatedLetter
              letterClass={letterClass}
              strArray={nameArray}
              idx={10}
            ></AnimatedLetter>
          </span>
          <span className="block">
            <AnimatedLetter
              letterClass={letterClass}
              strArray={jobArray}
              idx={17}
            ></AnimatedLetter>
          </span>
        </h3>
        <h3 className="lg:text-5xl text-3xl mt-6 leading-[45px] font-bold">
          {/* MernStack <span className=" text-[#f507f5]">Developer</span> */}I
          am a{" "}
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              1000,
              "React Developer",
              1000,
              "Next.js Developer",
              1000,
              "Backend Developer",
              1000,
            ]}
            speed={50} // Custom Speed from 1-99 - Default Speed: 40
            style={{ color: "#f507f5" }}
            deletionSpeed={99}
            wrapper="span" // Animation will be rendered as a <span>
            repeat={Infinity} // Repeat this Animation Sequence infinitely
          ></TypeAnimation>
        </h3>
        <p className="mb-8 ">
          I design and code beautifully simple things, and I love what I do.
        </p>
        <div>
          <a
            className="mr-2 ease-in duration-300 btn px-8 text-white pt-1 rounded-[30px] bg-[#f507f5] btn-sm hover:bg-slate-600"
            href="#hireme"
          >
            Hire Me
          </a>
          <a
            href="hasans_resume.pdf"
            className="mx-2 btn px-8 text-white pt-1 rounded-[30px] bg-[#f507f5] btn-sm hover:bg-slate-600"
            download={"hasans_resume.pdf"}
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
