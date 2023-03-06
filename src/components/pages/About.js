import React from "react";

//About me component
function About() {
  return (
    <div className="container">
      <h1 className="page-title">About me</h1>
      <div
        className="row"
        style={{
          padding: "10px",
        }}
      >
        <div className="col-md-12">
          <p>
            <img
              src={process.env.PUBLIC_URL + "/assets/ShihamAvatar.png"}
              alt="Shiham's Profile Photo"
              className="imagecaption"
            />
          </p>
          <p class="fs-5" style={{ textAlign: "justify" }}>
            Shiham is an experienced Technical Author and budding Full Stack Web
            Developer with a demonstrated history of working in the software
            industry for over 10 years.
          </p>
          <p class="fs-5" style={{ textAlign: "justify" }}>
            Shiham has worked across several domains which include Healthcare,
            Banking, Financial Markets, and Human Resources.
          </p>
          <p class="fs-5" style={{ textAlign: "justify" }}>
            The portfolio section showcases some of the projects completed at
            the recently concluded University of Adelaide Coding Bootcamp.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
