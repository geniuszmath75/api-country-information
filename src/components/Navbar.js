import React from "react";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  return (
    <>
      <nav className="navbar">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link
              to={
                location.pathname.endsWith("/")
                  ? window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    })
                  : "/"
              }
              className="nav-home"
            >
              <button className="btn">Search Country</button>
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
              to={window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              })}
              className={
                location.pathname.length > 1 ? "nav-active" : "nav-not-active"
              }
            >
              <button className="btn">
                {location.pathname.includes("_") === true
                  ? location.pathname.replace(/_/g, " ").substring(1)
                  : location.pathname.substring(1)}
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
