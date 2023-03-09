import React from "react";
import { Link } from "react-router-dom";
import back from "../../assets/back.png";
import frontend from '../../assets/frontend.jpg'
import backend from '../../assets/backend.jpg'
import fullstack from '../../assets/fullstack.jpg'
import blockchain from '../../assets/blockchain.jpg'
import mobile from '../../assets/mobile.jpg'
import net from '../../assets/net.jpg'

import Cprops from "./Cprops";

const coe = () => {
  return (
    <div className=" mx-20 my-5 ">
      <div className=" flex  items-center">
        <Link to="/colleges" className=" mr-4">
          <img src={back} alt="back" />
        </Link>
        <h1 className=" font-semibold text-[24px]">College of Engineering</h1>
      </div>
      <div className=" font-[00]">
        The Design Department consist of courses such as User interface and User
        Experience Design, and Graphic design (photoshop)
      </div>
      <div className=" flex justify-between">

      <Cprops 
      image = {frontend}
      course = 'Frontend Development'
      duration = '4-months'
      details = 'In front end development, you will be learning from scratch various technologies, starting with HTML, CSS, BOOTSTRAP, JAVASCRIPT AND GIT for source Control.  You will also be learn other JavaScripts Frame works such as REACTJS and VUEJS.'
      links='/About frontend'
      />

      <Cprops 
      image = {backend}
      course = 'Backend Development'
      duration = '4-months'
      details = 'You will be learning a bit of client side technologies, starting wíth HTML, CSS, BOOTSTRAP, then extensively JAVASCRIPT AND GIT for source control. You will also learn other JAVASCRIPT framework for Backend development including Node.js........'
      links='/About backend'
      />
      </div>
      <div className=" flex justify-between">
      <Cprops 
      image = {fullstack}
      course = 'Fullstack Development'
      duration = '5-months'
      details = 'You will  learn technologies, such as HTML, CSS, BOOTSTRAP, then extensively JAVASCRIPT and GIT for source control, also JAVASCRIPT framework for Frontend development including ReactJS/VueJS.  frameworks for Backend development including Node.js, Express.js, DBMS including SQL and MongoDB.  '
      links='/About fullstack'
      />
      <Cprops 
      image = {net}
      course = '.Net'
      duration = '5-months'
      details = 'In our .Net Software Development Bootcamp. You will get practical guide, courses and mentorship from beginner to intermediate level. The technologies covered in this program includes HTML/CSS Frontend technologies.........'
      links='/About .Net'
      />
      </div>
      <div className=" flex justify-between">
      <Cprops 
      image = {mobile}
      course = 'Mobile  Development'
      duration = '4-months'
      details = 'In front end development, you will be learning from scratch various technologies, starting with HTML, CSS, BOOTSTRAP, JAVASCRIPT AND GIT for source Control.  You will also be learn other JavaScripts Frame works such as REACTJS and VUEJS.'
      // links='/About Mobile Development'
      />
      <Cprops 
      image = {blockchain}
      course = 'Blockchain  Development'
      duration = '4-months'
      details = 'You will be learning a bit of client side technologies, starting wíth HTML, CSS, BOOTSTRAP, then extensively JAVASCRIPT AND GIT for source control. You will also learn other JAVASCRIPT framework for Backend development including Node.js........'
      // links='/About Blockchain Development'
      />
      </div>
    </div>
  );
};

export default coe;
