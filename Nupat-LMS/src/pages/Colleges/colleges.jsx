import React from "react";
import { Link } from "react-router-dom";


import Nlogo from "../../assets/Nlogo.png";
import logo1 from "../../assets/Rectangle 88.svg";
import logo2 from "../../assets/Rectangle2.svg";
import logo3 from "../../assets/Rectangle3.svg";
import logo4 from "../../assets/Rectangle4.svg";

const colleges = () => {
  return (
    <div>
      <div className=" w-[85%] mx-auto p-3">
        <img src={Nlogo} alt="logo" className=" mt-3"/>
        <div className=" text-black text-3xl font-sebold py-2 ">
          Welcome to Nupat Code Camp
        </div>
        <div className=" text-lg">
          Nupat code camp, a home for acquiring new Tech skills , we have 3
          Major departments which includes The Engineering Department, Design
          Departments and the Data Departments.
        </div>
      </div>
      <div className=" w-[85%] mx-auto">
        <div className=" flex1 flex justify-between my-5 ">
          <div className="singlebox program_border m-3">
            <div className=" bg-indigo-900 flex pl-5">
              <img src={logo1} alt="icon" />
              <h1 className=" font-semibold text-3xl p-5 text-white">
                College of Engineering
              </h1>
            </div>
            <div className="w-11/12 mx-auto text-xl font-medium">
              <p>
                Gain the knowledge, skills, tools and experience you need to
                develop computer software. Our tracks include : Frontend
                software development, backend software development, Fullstack
                software development, blockchain development, mobile software
                development….
              </p>
              <p className=" w-40 my-8 p-3 border-black border border-solid rounded-md text-center">
              <Link to='/college of engineering' >learn more</Link>  
              </p>
            </div>
          </div>

          <div className="singlebox program_border m-3">
            <div className=" bg-green-700 flex pl-5">
              <img src={logo2} alt="icon" />
              <h1 className=" font-semibold text-3xl p-5 text-white">
                College of Data
              </h1>
            </div>
            <div className="w-11/12 mx-auto text-xl font-medium">
              <p>
                Gain the knowledge, skills, tools and experience you need to
                develop computer software. Our tracks include : Frontend
                software development, backend software development, Fullstack
                software development, blockchain development, mobile software
                development….
              </p>
              <p className=" w-40 p-3 my-8 border-black border border-solid rounded-md text-center">
              <Link to='/college of data' >learn more</Link>  
              </p>
            </div>
          </div>
        </div>

        <div className=" flex2 flex justify-between my-10">
          <div className="singlebox program_border m-3">
            <div className=" bg-sky-400 flex pl-5">
              <img src={logo3} alt="icon" />
              <h1 className=" font-semibold text-3xl p-5 text-white">
                College of Design
              </h1>
            </div>
            <div className=" w-11/12 mx-auto text-xl font-medium">
              <p>
                Gain the knowledge, skills, tools and experience you need to
                develop computer software. Our tracks include : Frontend
                software development, backend software development, Fullstack
                software development, blockchain development, mobile software
                development….
              </p>
              <p className=" w-40 p-3 my-8 border-black border border-solid rounded-md text-center">
              <Link to='/college of design' >learn more</Link>  
              </p>
            </div>
          </div>
          <div className="singlebox program_border m-3">
            <div className=" bg-orange-400 flex pl-5 ">
              <img src={logo4} alt="icon" />
              <h1 className=" font-semibold text-3xl p-5 text-white">
                College of Management
              </h1>
            </div>
            <div className=" w-11/12 mx-auto text-xl font-medium">
              <p>
                Gain the knowledge, skills, tools and experience you need to
                develop computer software. Our tracks include : Frontend
                software development, backend software development, Fullstack
                software development, blockchain development, mobile software
                development….
              </p>
              <p className="w-40 p-3 my-8 border-black border border-solid rounded-md text-center">
              <Link to='/college of management' >learn more</Link>  
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default colleges;
