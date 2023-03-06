import React from "react";

//Footer component, displayed across all pages

function Footer() {
  return (
    <footer>
      <ul className="footerlink">
        <li className="footerlink">
          <i class="bi bi-github" style={{ fontSize: "60px" }}></i>{" "}
          <a
            href="https://github.com/shiham-jamaldeen"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
        <li className="footerlink">&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li className="footerlink">
          <i class="bi bi-linkedin" style={{ fontSize: "60px" }}></i>{" "}
          <a
            href="https://www.linkedin.com/in/shiham-j-ba43141b"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
