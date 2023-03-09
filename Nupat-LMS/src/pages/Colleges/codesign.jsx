import React from "react";
import Cprops from "./Cprops";
import { Link } from "react-router-dom";
import back from "../../assets/back.png";
import uiux from "../../assets/Rectangle 87.png";
import graphic from "../../assets/graphic.png";


const codesign = () => {
  return (
    <div className=" mx-20 my-5 ">
      <div className=" flex  items-center">
        <Link to="/colleges" className=" mr-4">
          <img src={back} alt="back" />
        </Link>
        <h1 className=" font-semibold text-[24px]">College of Design</h1>
      </div>
      <div>
        The Design Department consist of courses such as User interface and User
        Experience Design, and Graphic design (photoshop)
      </div>
      <div className=" flex justify-between">
        <Cprops
          image={uiux}
          course="Frontend Development"
          duration="4-months"
          details="In front end development, you will be learning from scratch various technologies, starting with HTML, CSS, BOOTSTRAP, JAVASCRIPT AND GIT for source Control.  You will also be learn other JavaScripts Frame works such as REACTJS and VUEJS."
          links="/frontend"
        />

        <Cprops
          image={graphic}
          course="Backend Development"
          duration="4-months"
          details="You will be learning a bit of client side technologies, starting wíth HTML, CSS, BOOTSTRAP, then extensively JAVASCRIPT AND GIT for source control. You will also learn other JAVASCRIPT framework for Backend development including Node.js........"
          links="/frontend"
        />
      </div>
    </div>
  );
};

export default codesign;
