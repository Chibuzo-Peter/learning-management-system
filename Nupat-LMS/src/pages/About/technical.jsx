import React from "react";
import { Link } from "react-router-dom";
import back from "../../assets/back.png";
import cover from "../../assets/cover.jpg";
import Footer from "../../components/footer/Footer";
import Button from "./Components/Buttons/Button";
import Info from "./Components/Info/Info";
import Topic from "./Components/Topic/Topic";

const technical = () => {
  return (
    <>
      <div className="  pl-[7%] py-5">
        <div className=" flex  items-center my-2">
          <Link to="/college of engineering" className=" mr-4">
            <img src={back} alt="back" />
          </Link>
          <h1 className=" font-semibold text-[24px]">Front-End Development</h1>
        </div>
        <div className="text-lg w-[80%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna ut
          ligula pretium sed cursus nisi, nulla. Vel erat nibh viverra
          suspendisse. Aliquam donec bibendum pulvinar elementum fermentum nulla
          non.
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <img src={cover} alt="image" className=" mx-auto w-[1150px] " />
      </div>
      <Info />
      <Button />
      <div className=" font-semibold text-2xl text-primary ml-[7%]">Course Content</div>
      <div className=" mb-16 mt-5">
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic /> 
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
      </div>

      <Footer />
    </>
  );
};

export default technical;
