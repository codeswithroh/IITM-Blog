import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "reactstrap";
import "./NavBar.scss";

function NavBar() {
  return (
    <Nav className="NavBar">
      <div className="NavBar__container">
        <div className="NavBar--logo">
          <h1>BLOG</h1>
        </div>
        <div className="NavBar__items">
          <div className="NavBar__item">
            <Link className="NavBar__item--link" to="/about">
              About
            </Link>
          </div>
          <div className="NavBar__item">
            <Link className="NavBar__item--link" to="/profile">
              Profile
            </Link>
          </div>
        </div>
      </div>
    </Nav>
  );
}

export default NavBar;
