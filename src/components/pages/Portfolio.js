import React from "react";
import ProjectCard from "../Project.js";

function Portfolio() {
  //pass values to project component

  const projectDisplayArray = [
    {
      projectTitle: "The Technology Blog",
      projectDesc:
        "The Technology Blog is a simple Content Management System style blogging platform that allows users to post technology related blogposts. As a added bonus registered users can post their comments and ideas against an article.",
      projectURL: "https://fast-anchorage-91606.herokuapp.com",
      projectGitHub: "https://github.com/shiham-jamaldeen/Challenge14",
      projectImage: "../src/assets/tech-blog.png",
    },
  ];

  return (
    <div className="container body-section">
      <div className="row">
        <div className="col-md-6" style={{ padding: "20px" }}>
          <ProjectCard ProjectCard={projectDisplayArray} />
        </div>
        <div className="col-md-6" style={{ padding: "20px" }}>
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
