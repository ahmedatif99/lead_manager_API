import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUser, logoutUser } from "../../store/Auth/utils";
const Header = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const handleLogout = (e) => {
    dispatch(logoutUser());
    window.location = "/";
  };

  useEffect(() => {
    const newUser = setTimeout(() => {
      dispatch(getUser());
    }, 0);
    return () => {
      clearTimeout(newUser);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand" to="/">
            Lead Manager
          </Link>
          {isAuthenticated ? (
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <span className="navbar-text mr-3">
                <strong>{user ? `Welcome ${user.username}` : ""}</strong>
              </span>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-info btn-sm text-light"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
