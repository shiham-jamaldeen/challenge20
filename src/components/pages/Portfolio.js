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
        "The Technology Blog is a simple Content Management System style blogging platform that allows users to post technology related blogposts. Registered users can post their comments and ideas against an article.",
      projectURL: "https://fast-anchorage-91606.herokuapp.com",
      projectGitHub: "https://github.com/shiham-jamaldeen/Challenge14",
      projectImage: "../assets/tech-blog.png",
    },
    {
      id: "2",
      projectTitle: "Workday Scheduler",
      projectDesc:
        "This is a simple work day scheduler that can record your appointments and events for the day. You can save your appointments and they are colour coded for easy identifiction",
      projectURL: "https://shiham-jamaldeen.github.io/Challenge05/",
      projectGitHub: "https://github.com/shiham-jamaldeen/Challenge05",
      projectImage: "../assets/workday-scheduler.png",
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
      <h1 className="page-title">Portfolio</h1>
      <div className="row">
        <ProjectCard projectDisplayArray={projectDisplayArray} />
      </div>
    </div>
  );
}
export default Portfolio;
