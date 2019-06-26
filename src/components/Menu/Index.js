import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

function Menu({ location }) {
  return (
    <nav className="App__menu">
      <ul className="App__menu--list">
        <Link
          to="/about"
          style={{ textDecoration: "none" }}
          className="App__menu--item"
        >
          <li
            className={
              location.pathname.toLowerCase().includes("/about")
                ? "App__menu--current"
                : "App__menu--link"
            }
          >
            About
          </li>
        </Link>
        <Link
          to="/projects"
          style={{ textDecoration: "none" }}
          className="App__menu--item"
        >
          <li
            className={
              location.pathname.toLowerCase().includes("/projects")
                ? "App__menu--current"
                : "App__menu--link"
            }
          >
            Projects
          </li>
        </Link>
        <Link
          to="/skills"
          style={{ textDecoration: "none" }}
          className="App__menu--item"
        >
          <li
            className={
              location.pathname.toLowerCase().includes("/skills")
                ? "App__menu--current"
                : "App__menu--link"
            }
          >
            Skills
          </li>
        </Link>
        <Link
          to="/resume"
          style={{ textDecoration: "none" }}
          className="App__menu--item"
        >
          <li className="App__menu--link">Resume</li>
        </Link>
      </ul>
    </nav>
  );
}

export default withRouter(Menu);
