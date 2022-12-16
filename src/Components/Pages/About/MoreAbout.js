import React from "react";

const MoreAbot = () => {
  return (
    <div className="py-[110px] w-[800px] mx-auto">
      <div className="">
        <img
          className="w-full h-[400px] my-auto  rounded-lg"
          src="about_us.png"
          alt=""
        />
      </div>
      <div className=" flex flex-col justify-center items-start my-16">
        <h3 className=" leading-0 text-[2.5rem]">ABOUT ME</h3>
        <h4 className=" leading-0 text-[1.75rem]">
          <span className="text-[#f507f5]">F</span>ront-end Developer
        </h4>
        <p className="mb-[15px] text-justify">
          I use HTML, CSS, and JavaScript to produce responsive websites and web
          apps that provide users the best and most appropriate experience
          suited to their device and browser.
        </p>
        <h4 className=" leading-0 text-[1.75rem]">
          <span className="text-[#f507f5]">D</span> eveloper &{" "}
          <span className="text-[#f507f5]">D</span>esigner
        </h4>
        <p className="mb-[15px] text-justify">
          Since beginning my journey as a Developer a few years ago, I am
          interested to work and collaborating with talented people to create
          digital products for both business and consumer use. I'm quietly
          confident, naturally curious, and perpetually working on improving my
          chops one design problem at a time.
        </p>
        <p>
          I work to make a better web; one that is fast, easy to use, beautiful,
          accessible to all, and frustration-free. Regardless of your specific
          business requirements, in solving these challenges, you have a great
          chance of finding success online.
        </p>
      </div>
    </div>
  );
};

export default MoreAbot;
