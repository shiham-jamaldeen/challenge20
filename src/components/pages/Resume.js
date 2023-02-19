import React from "react";

function Resume() {
  return (
    <div className="container">
      <h1 className="page-title">Resume</h1>
      <div
        className="row"
        style={{
          padding: "15px",
        }}
      >
        <div className="col-md-8">
          <p class="fs-4">
            Download my {""}
            <a
              href="../assets/Resume-Shiham-Jamaldeen.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </p>
          <h4>Languages</h4>
          <ul class="list-group" style={{ width: "50%" }}>
            <li class="list-group-item">HTML 5</li>
            <li class="list-group-item">CSS</li>
            <li class="list-group-item">JavaScript ES6</li>
            <li class="list-group-item">SQL</li>
          </ul>
          <h4 style={{ marginTop: "10px" }}>Framework and Tools</h4>
          <ul class="list-group" style={{ width: "50%" }}>
            <li class="list-group-item">Node</li>
            <li class="list-group-item">Handlebars</li>
            <li class="list-group-item">Bootstrap</li>
            <li class="list-group-item">React</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Resume;
