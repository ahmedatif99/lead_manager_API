import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import { addLead } from "../../store/Leads/utils";

const Form = () => {
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const message = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name.current.value,
      email: email.current.value,
      message: message.current.value,
    };
    dispatch(addLead(data));

    name.current.value = null;
    email.current.value = null;
    message.current.value = null;
  };

  return (
    <div className="card card-body mt-4 mb-4">
      <h2>Add Lead</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            type="text"
            id="name"
            ref={name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            type="email"
            id="email"
            ref={email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            type="text"
            id="message"
            ref={message}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
