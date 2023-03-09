import React from "react";
import Cprops from "./Cprops";
import { Link } from "react-router-dom";
import back from "../../assets/back.png";
import product from "../../assets/product.png";
import project from "../../assets/project.png";
import technical from "../../assets/technical.png";
import digital from "../../assets/digital.png";

const com = () => {
  return (
    <div className=" mx-20 my-5 ">
      <div className=" flex  items-center">
        <Link to="/colleges" className=" mr-4">
          <img src={back} alt="back" />
        </Link>
        <h1 className=" font-semibold text-[24px]">College of Management</h1>
      </div>
      <div>
        The Design Department consist of courses such as User interface and User
        Experience Design, and Graphic design (photoshop)
      </div>
      <div className=" flex justify-between">
        <Cprops
          image={product}
          course="Frontend Development"
          duration="4-months"
          details="In front end development, you will be learning from scratch various technologies, starting with HTML, CSS, BOOTSTRAP, JAVASCRIPT AND GIT for source Control.  You will also be learn other JavaScripts Frame works such as REACTJS and VUEJS."
          links="About Product Management"
        />

        <Cprops
          image={project}
          course="Backend Development"
          duration="4-months"
          details="You will be learning a bit of client side technologies, starting wíth HTML, CSS, BOOTSTRAP, then extensively JAVASCRIPT AND GIT for source control. You will also learn other JAVASCRIPT framework for Backend development including Node.js........"
          links="About Project Management"
        />
      </div>
      <div className=" flex justify-between">
        <Cprops
          image={technical}
          course="Frontend Development"
          duration="4-months"
          details="In front end development, you will be learning from scratch various technologies, starting with HTML, CSS, BOOTSTRAP, JAVASCRIPT AND GIT for source Control.  You will also be learn other JavaScripts Frame works such as REACTJS and VUEJS."
          links="About Technical Writing"
        />

        <Cprops
          image={digital}
          course="Backend Development"
          duration="4-months"
          details="You will be learning a bit of client side technologies, starting wíth HTML, CSS, BOOTSTRAP, then extensively JAVASCRIPT AND GIT for source control. You will also learn other JAVASCRIPT framework for Backend development including Node.js........"
          links="/About Digital Marketing"
        />
      </div>
    </div>
  );
};

export default com;
