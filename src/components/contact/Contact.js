import React from "react";

const contact = () => {
  return (
    <div className="container ps-4 mt-5">
      <h2>Let's Connect</h2>
      <p>
        Being a self taught coder. I would love to work on a real world project
      </p>

      <div className="mb-3 w-50">
        <input
          type="name"
          className="form-control mb-3"
          id="exampleFormControlInput1"
          placeholder="Your Name"
        />
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3 w-50">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Enter Your msg here"
        ></textarea>
      </div>

      <div class="btn-group me-2" role="group" aria-label="First group">
        <button type="button" class="btn btn-outline-secondary">
          Send
        </button>
      </div>

      <h3 className="mt-5">Thanks for connecting</h3>
    </div>
  );
};

export default contact;
