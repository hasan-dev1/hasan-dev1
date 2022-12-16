import React from 'react';
import { PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {
    const project = useLoaderData()
    console.log(project)
    return (
      <div className="max-w-[1000px] mx-auto my-12">
        <div>
          <div className="bg-[#2b2929cc] ease-in-out duration-300 hover:-mt-2 p-2">
            <div className="flex justify-between ">
              {project?.image?.map((item, idx) => (
                <div key={idx} className="max-h-[250px] overflow-y-scroll">
                  <PhotoView src={item}>
                    <img className=" w-full" src={item} alt="" />
                  </PhotoView>
                </div>
              ))}
            </div>
            <div className="p-4 text-white">
              <h4 className="text-3xl">{project.title}</h4>
              <ul
                className="my-2"
                style={{ listStyleType: "square", listStylePosition: "inside" }}
              >
                {project?.bulletpoint?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="">{project.description}</p>
              <div className="text-end mt-4">
                <Link to="" className=" px-4 rounded bg-[#f507f5] ">
                  Live Preview
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProjectDetails;