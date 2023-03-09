import React from "react";
import Cprops from "./Cprops";
import { Link } from "react-router-dom";
import back from "../../assets/back.png";

const cod = () => {
  return (
    <div>
             <div className=" flex  items-center">
            <Link to="/colleges" className=" mr-4">
            <img src={back} alt="back" />
            </Link>
            <h1 className=" font-semibold text-[24px]">College of Data</h1>
      </div>
        <div>
            The Design Department consist of courses such as User interface and User
            Experience Design, and Graphic design (photoshop)
        </div>

      <Cprops />
    </div>
  );
};

export default cod;
