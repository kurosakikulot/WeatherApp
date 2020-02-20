import React from "react";
import logo from "../images/Logo.png";

export default function Nav() {
  return (
    <nav className="transparent z-depth-0">
      <div className="nav-wrapper container">
        <a href="#" className="brand-logo">
          <img
            className="logo"
            src={logo}
            alt="logo"
            height="100px"
            width="250px"
          />
        </a>
      </div>
    </nav>
  );
}
