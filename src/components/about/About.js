import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="ps-4 mt-4 container">
      <div className="fs-2 mb-2"> About me</div>
      <hr className="w-50" />
      <p>
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
      <p className="mb-5">
        Now, My main Aim is to get a tech job. Where I can learn and explore so
        many things{" "}
      </p>
      <div className="mt-5">
        <div className="fs-2">My Skills</div>
        <hr className="w-50" />
        <div className="row mt-3">
          <div className=" text-center  col-2 skill">React js</div>
          <div className=" text-center  col-2 skill">Node js</div>
          <div className=" text-center  col-2 skill">Javascript</div>
        </div>
        <div className="row mt-3">
          <div className=" text-center  col-2 skill">Bootstrap</div>

          <div className=" text-center  col-2 skill">Git & GitHub</div>
        </div>
      </div>
    </div>
  );
};

export default About;