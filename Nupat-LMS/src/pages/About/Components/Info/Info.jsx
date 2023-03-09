import React from "react";
import Duration from "../../../../assets/Clocks.svg";
import Modules from "../../../../assets/Modules.svg";
import Project from "../../../../assets/Project.svg";
import Price from "../../../../assets/Price.svg";

const Info = () => {
  return (
    <div>
      <div className="flex flex-col pl-[7%] gap-2 mt-3">
        <div className="flex items-center">
          <img className="pr-4" src={Duration} alt="" />
          <h2 className=" font-semibold">
            <span className="text-primary font-semibold">Duration</span> :
            4-months
          </h2>
        </div>
        <div className="flex">
          <img className="pr-4" src={Modules} alt="" />
          <h2 className=" font-semibold">
            <span className="text-primary  font-semibold">Modules</span> :
            16
          </h2>
        </div>
        <div className="flex">
          <img className="pr-4" src={Project} alt="" />
          <h2 className=" font-semibold">
            <span className="text-primary font-semibold">Projects</span> :
            12-Projects
          </h2>
        </div>
        <div className="flex">
          <img className="pr-4" src={Price} alt="" />
          <h2 className=" font-semibold">
            <span className="text-primary font-semibold">Price</span> : NGN
            250,000
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Info;
