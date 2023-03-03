import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";

import { loginUser, registerUser } from "../../store/Auth/utils";

const Register = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const password2 = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataReg = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
      // password2: password2.current.value,
    };

    const dataLog = {
      username: username.current.value,
      password: password.current.value,
    };

    if (password.current.value === password2.current.value) {
      setTimeout(() => {
        dispatch(loginUser(dataLog));
      }, 2000);
      dispatch(registerUser(dataReg));

      // window.location = "/";
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  } else {
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                required
                ref={username}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
                ref={email}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                required
                ref={password}
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="password2"
                required
                ref={password2}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
};

export default Register;
