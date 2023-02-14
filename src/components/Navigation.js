import React from "react";
import Header from "./Header.js";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navigation({ handlePageChange }) {
  return (
    <>
      <nav>
        <h1 className="navigationheader">Shiham Jamaldeen</h1>
        <ul className="navlist">
          <li className="navigationlist">
            <a href="#About" onClick={() => handlePageChange("About")}>
              About
            </a>
          </li>
          <li className="navigationlist">
            <a href="#Portfolio" onClick={() => handlePageChange("Portfolio")}>
              Portfolio
            </a>
          </li>
          <li className="navigationlist">
            <a href="#Contact" onClick={() => handlePageChange("Contact")}>
              Contact
            </a>
          </li>
          <li className="navigationlist">
            <a href="#Resume" onClick={() => handlePageChange("Resume")}>
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <Header />
    </>
  );
}

export default Navigation;
