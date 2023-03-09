import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
  
  <div>
      <div className=" pl-[7%]  p-[2rem]">
        <Link to="/payment">
          <button className=" bg-primary border rounded-lg text-white">Buy Now</button>
        </Link>
      </div>
  </div>
  );
};
export default Button;
