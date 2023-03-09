import React from "react";
import "./colleges.css";
import info from "../../assets/info.svg";
import duration from "../../assets/duration.png";
import { Link } from "react-router-dom";

const Cprops = (prop) => {
  return (
    <>
      <div className=" w-[48%] border border-solid border-primary rounded-lg box-content my-5 pb-5">
        <img src={prop.image} alt="image" />
        <div className=" w-[90%] mx-auto ">
          <div className=" flex justify-between my-5">
            <div className=" flex  items-center">
              <img src={info} alt="info" style={{ marginRight: "5px" }} />
              <h1 className=" font-semibold text-2xl">{prop.course}</h1>
            </div>
            <div className=" flex  items-center">
              <img src={duration} alt="duration" style={{ width: "20px" }} />
              <h3>duration:{prop.duration}</h3>
            </div>
          </div>
          <div className=" text-[20px] mb-5 h-max">{prop.details}</div>
          
          <div className=" flex justify-between box-border  ">
            <Link to={prop.links}> <button className=" text-primary">Learn More</button> </Link>
            <button className=" text-primary">Enroll now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cprops;
