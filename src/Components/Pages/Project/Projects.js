import React, { useEffect, useState } from "react";
import './Project.css'
import SectionHeader from "../../SharedPage/SectionHeader/SectionHeader";
import { Link } from "react-router-dom";

const Projects = () => {
  const [project, setProject] = useState([]);


  useEffect(() => {
    fetch(`https://portfolio-server-kohl.vercel.app/home`)
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, []);
  return (
    <div id="project" className="mb-12">
      <SectionHeader
        firstext={""}
        scondtext={"My Resent Work"}
        thirdtext="You can see my previous work and see what kind of projects I create for my practice"
      ></SectionHeader>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full lg:w-[1170px] mx-auto mb-[30px] mt-[30px]">
        {project?.slice(0, 6).map((item, idx) => (
          <div key={idx} className={` w-full h-[280px] relative hovereffect`}>
            <img className="w-full h-full hoverimg" src={item?.image} alt="" />

            <div className="absolute top-0 left-0 w-full h-full text-2xl px-5 text-center flex justify-center items-center text-white bg-[#372d6da6]">
              <h3>{item?.title}</h3>
            </div>

            <div className={`absolute top-0 left-0 w-full h-full effecton `}>
              <h3 className="text-4xl">Visit Demo Website!</h3>
              <div className="flex justify-between items-center w-[150px] mx-auto mt-3">
                <button className="px-5  py-1  text-white bg-fuchsia-500">
                  Details
                </button>
                <a href={`${item?.livelink}`} target='_blank' rel="noreferrer" className="px-5 ml-1 py-1  text-white bg-fuchsia-500">
                  Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link
          to={"/moreproject"}
          className="mr-2  btn px-16 text-white pt-1 rounded bg-[#f507f5] btn-sm hover:bg-slate-600"
        >
          More
        </Link>
      </div>
    </div>
  );
};

export default Projects;
