import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  return (
    <>
      <nav className="navbar">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-home">
              Search Country
            </Link>
          </li>
          <li className="nav-item">
            <span
              className={
                location.pathname.length > 1 ? "nav-active" : "nav-not-active"
              }
            >
              &gt;&gt;
            </span>
            <Link
              to={location.pathname}
              className={
                location.pathname.length > 1 ? "nav-active" : "nav-not-active"
              }
            >
              {location.pathname.includes(
                "_") === true
                  ? location.pathname.replace("_", " ").substring(1, )
                  : location.pathname.substring(1, )
              }
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
