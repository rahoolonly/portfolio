import React from "react";
import "./home.css";
import img from "../../images/rahool__1_-removebg-preview.png";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className=" first-half col-md-5 mt-5 ps-4">
          <div className="row">
            <div className=" text-center mb-3 col-4 main-line">
       Developer
            </div>
            <h1>
              Don't talk
            </h1>
            <h1>
              Show me the code
            </h1>
          </div>
        </div>
        <div id="profile" className="text-center col-md-5 ">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;