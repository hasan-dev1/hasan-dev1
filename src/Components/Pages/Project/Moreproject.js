import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import SectionHeader from "../../SharedPage/SectionHeader/SectionHeader";

const Moreproject = () => {
  const projectlist = useLoaderData()
  return (
    <div id="project">
      <SectionHeader
        firstext={"creativ design"}
        scondtext={"Project Showcase"}
        thirdtext="Servic i Offer YouServic i Offer YouServic i Offer YouServic i Offer YouServic i Offer You"
      ></SectionHeader>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-[1170px] mx-auto mb-[60px] mt-[30px]">
        {projectlist?.map((item, idx) => (
          <div key={idx}>
            <div className="bg-[#2b2929cc] ease-in-out duration-300 hover:-mt-2 p-2">
              <div className="max-h-[200px] overflow-y-scroll">
                <img className=" w-full" src="project1.png" alt="" />
              </div>
              <div className="p-4 text-white">
                <h4>title text</h4>
                <p>
                  desc Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Odio, excepturi!
                </p>
                <div className="text-end mt-4">
                  <Link className=" px-4 rounded bg-[#f507f5] ">
                    Live Preview
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Moreproject;
