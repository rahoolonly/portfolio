import React from "react";
import "./about.css";

const About = () => {
  return (
    <div id="aboutme" className="ps-md-4 mt-4 container">
      <h1 className="fs-2 mb-2"> About me</h1>
      <hr className="w-50" />
      <p className="mb-5 mb-md-2">
        Hello g, I'm <strong style={{ color: "white" }}>Rahool Only</strong>.
        I'm 20 years old, web developer, living in Punjab,IN.
      </p>{" "}
      <p>
        {" "}
        Currently, pursuing BCA from a college you might don't know. I know my
        college can not help me to get my dream job. <br />
        So, I myself started focusing on development. I started with HTML, CSS,
        Javascript. Then I started Exploring React - Hooks, NextJS <br /> and
        several other useful libraries.
      </p>
      <p className="mb-5 mt-md-2 mt-5">
        Now, My main Aim is to get a tech job. Where I can learn and explore so
        many things{" "}
      </p>
      <div className="mt-5 mb-5 mb-md-0">
        <div className="fs-2">My Skills</div>
        <hr className="w-50" />
        <div className="row mt-md-4 mt-5">
          <div className="  col-4  col-md-1 mb-4 skill">React js</div>
          <div className=" col-4 col-md-1 skill">Node js</div>
          <div className=" col-5 col-md-1 mt-3 mt-md-0 skill">Javascript</div>
        </div>
        <div className="row mt-3">
          <div className=" col-5  col-md-2 skill">Bootstrap</div>

          <div className=" col-4  col-md-2 skill">Git & GitHub</div>
        </div>
      </div>
    </div>
  );
};

export default About;
