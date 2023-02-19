import React from "react";
import { useState } from "react";
import ProjectCard from "../Project.js";

function Portfolio() {
  //pass values to project component

  const [projectDisplayArray, setItems] = useState([
    {
      id: "1",
      projectTitle: "The Technology Blog",
      projectDesc:
        "The Technology Blog is a simple Content Management System style blogging platform that allows users to post technology related blogposts. As a added bonus registered users can post their comments and ideas against an article.",
      projectURL: "https://fast-anchorage-91606.herokuapp.com",
      projectGitHub: "https://github.com/shiham-jamaldeen/Challenge14",
      projectImage: "../assets/tech-blog.png",
    },
    {
      id: "2",
      projectTitle: "The Technology Blog",
      projectDesc:
        "The Technology Blog is a simple Content Management System style blogging platform that allows users to post technology related blogposts. As a added bonus registered users can post their comments and ideas against an article.",
      projectURL: "https://fast-anchorage-91606.herokuapp.com",
      projectGitHub: "https://github.com/shiham-jamaldeen/Challenge14",
      projectImage: "../assets/tech-blog.png",
    },
    {
      id: "3",
      projectTitle: "The Technology Blog",
      projectDesc:
        "The Technology Blog is a simple Content Management System style blogging platform that allows users to post technology related blogposts. As a added bonus registered users can post their comments and ideas against an article.",
      projectURL: "https://fast-anchorage-91606.herokuapp.com",
      projectGitHub: "https://github.com/shiham-jamaldeen/Challenge14",
      projectImage: "../assets/tech-blog.png",
    },
    {
      id: "4",
      projectTitle: "The Technology Blog",
      projectDesc:
        "The Technology Blog is a simple Content Management System style blogging platform that allows users to post technology related blogposts. As a added bonus registered users can post their comments and ideas against an article.",
      projectURL: "https://fast-anchorage-91606.herokuapp.com",
      projectGitHub: "https://github.com/shiham-jamaldeen/Challenge14",
      projectImage: "../assets/tech-blog.png",
    },
    {
      id: "5",
      projectTitle: "The Technology Blog",
      projectDesc:
        "The Technology Blog is a simple Content Management System style blogging platform that allows users to post technology related blogposts. As a added bonus registered users can post their comments and ideas against an article.",
      projectURL: "https://fast-anchorage-91606.herokuapp.com",
      projectGitHub: "https://github.com/shiham-jamaldeen/Challenge14",
      projectImage: "../assets/tech-blog.png",
    },
    {
      id: "6",
      projectTitle: "The Technology Blog",
      projectDesc:
        "The Technology Blog is a simple Content Management System style blogging platform that allows users to post technology related blogposts. As a added bonus registered users can post their comments and ideas against an article.",
      projectURL: "https://fast-anchorage-91606.herokuapp.com",
      projectGitHub: "https://github.com/shiham-jamaldeen/Challenge14",
      projectImage: "../assets/tech-blog.png",
    },
  ]);

  return (
    <div className="container">
      <h1 className="page-title">Portfolio of projects</h1>
      <div className="row">
        <ProjectCard projectDisplayArray={projectDisplayArray} />
      </div>
    </div>
  );
}
export default Portfolio;
