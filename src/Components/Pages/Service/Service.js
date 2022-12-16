import React from "react";
import { FaCode, FaNodeJs, FaReact } from "react-icons/fa";

const Service = () => {
  return (
    <div id="service" className="text-center max-w-[1170px] mx-auto mb-20">
      <h3 className="text-5xl text-white">My Service</h3>
      <p>The kind of service I provide</p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 my-6">
        <div>
          <div className="border-4 rounded border-slate-400 p-6 text-green-600 flex flex-col justify-center items-center">
            <span>
              <FaReact className="text-5xl mb-2"></FaReact>
            </span>
            <p className="text-2xl">Reactjs Developer</p>
          </div>
        </div>
        <div>
          <div className="border-4 rounded border-slate-400 p-6 text-green-600 flex flex-col justify-center items-center">
            <span>
              <FaCode className="text-5xl mb-2"></FaCode>
            </span>
            <p className="text-2xl">Front-end Developer</p>
          </div>
        </div>
        <div>
          <div className="border-4 rounded border-slate-400 p-6 text-green-600 flex flex-col justify-center items-center">
            <span>
              <FaNodeJs className="text-5xl mb-2"></FaNodeJs>
            </span>
            <p className="text-2xl">Back-end Developer</p>
          </div>
        </div>
        <div>
          <div className="border-4 rounded border-slate-400 p-6 text-green-600 flex flex-col justify-center items-center">
            <span>
              <FaCode className="text-5xl mb-2"></FaCode>
            </span>
            <p className="text-2xl">MernStack Developer</p>
          </div>
        </div>

        <div>
          <div className="border-4 rounded border-slate-400 p-6 text-green-600 flex flex-col justify-center items-center">
            <span>
              <FaCode className="text-5xl mb-2"></FaCode>
            </span>
            <p className="text-2xl">Next.js Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
