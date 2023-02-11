import React from "react";

function Footer() {
  return (
    <footer>
      <ul>
        <li className="footerlink">
          <i class="bi-github" style={{ fontSize: "80px" }}></i>
          <a
            href="https://github.com/shiham.jamaldeen"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            GitHub
          </a>
        </li>
        <li className="footerlink">&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li className="footerlink">
          <i class="bi bi-linkedin" style={{ fontSize: "80px" }}></i>
          <a
            href="www.linkedin.com/in/shiham-j-ba43141b"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
