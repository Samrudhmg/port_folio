import React from "react";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 p-4 pb-4 lg:p-0">
      <h1 className=" my-20 text-center text-6xl">EDUCATION</h1>
      <div className=" md:pl-16">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className=" mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className=" mb-2 text-sm lg:text-lg text-neutral-500">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
                <h6 className=" mb-2 font-semibold">{experience.role}-{" "}
                    <span className="text-sm text-purple-100 lg:text-lg ">{experience.company}</span>
                </h6>
                <p>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );  
};

export default Experience;
