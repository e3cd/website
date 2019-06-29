import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="App__heading">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="App__header">
          <h4>Allan Gao</h4>
        </div>
      </Link>
      <div className="App__subheader">
        <h6>Web Developer</h6>
      </div>
    </div>
  );
}
