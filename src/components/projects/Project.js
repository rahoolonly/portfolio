import React from "react";
import './project.css'
import proj1 from '../../images/Screenshot 2023-01-20 124812.png'

const Project = () => {
  return (
    <div className="ps-4 mt-5 container">
      <div className="card" style={{width: "20rem" }}>
        <img src={proj1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Typing Master</h5>
          <p className="card-text card-para">Here, You can find out your typing speed.</p>
          <a href="https://rahoolonly.github.io/Typing-Master/" className="btn btn-secondary">
Live          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
