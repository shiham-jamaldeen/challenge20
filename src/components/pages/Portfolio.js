import React from "react";
import { useState } from "react";
import ProjectCard from "../Project.js";

function Portfolio() {
  //pass values from array to project component

  const [projectDisplayArray, setItems] = useState([
    {
      id: "1",
      projectTitle: "The Technology Blog",
      projectDesc:
        "The Technology Blog is a simple Content Management System style blogging platform that allows users to post technology related blogposts.",
      projectURL: "https://fast-anchorage-91606.herokuapp.com",
      projectGitHub: "https://github.com/shiham-jamaldeen/Challenge14",
      projectImage: "/assets/tech-blog.png",
    },
    {
      id: "2",
      projectTitle: "Workday Scheduler",
      projectDesc:
        "This is a simple work day scheduler that can record your appointments and events for the day. You can save your appointments and they are colour coded for easy identification",
      projectURL: "https://shiham-jamaldeen.github.io/Challenge05/",
      projectGitHub: "https://github.com/shiham-jamaldeen/Challenge05",
      projectImage: "/assets/workday-scheduler.png",
    },
    {
      id: "3",
      projectTitle: "The Open Source",
      projectDesc:
        "A platform for the beginner software developer to view and contribute to open-source project from GitHub.",
      projectURL: "https://theopensource.herokuapp.com/",
      projectGitHub: "https://github.com/jeco1988/theopensource",
      projectImage: "/assets/the-open-source.png",
    },
    {
      id: "4",
      projectTitle: "Workout Tracker",
      projectDesc:
        "The Workout Tracker helps you gain success in your fitness journey. It allows you to record your workouts at the gym, including the type of exercise and details of the exercise such as number of repititions, weights and other details.",
      projectURL: "https://ancient-eyrie-19788.herokuapp.com/",
      projectGitHub: "https://github.com/brodie02/workout-tracker",
      projectImage: "/assets/workout-tracker.png",
    },
    {
      id: "5",
      projectTitle: "Weather Dashboard",
      projectDesc:
        "The Weather Dashboard displays the five-day forecast for a given city. Your search is saved to favourites list to your local machine, which can be retreived at a later date.",
      projectURL: "https://shiham-jamaldeen.github.io/Challenge06/",
      projectGitHub: "https://github.com/shiham-jamaldeen/Challenge06",
      projectImage: "/assets/weather-dashboard.png",
    },
    {
      id: "6",
      projectTitle: "Pick-A-Meal",
      projectDesc:
        "Pick-A-Meal is a semantic search database that allows users to search and retrieve recipe suggestions. Users will then be able to save those recipes in a 'favourites' list to their local machine.",
      projectURL: "https://jeco1988.github.io/Pick-A-Meal/",
      projectGitHub: "https://github.com/jeco1988/Pick-A-Meal",
      projectImage: "/assets/pick-a-meal.png",
    },
  ]);

  return (
    <div className="container">
      <h1 className="page-title">Portfolio</h1>
      <div className="row">
        {/*Display the project cards here*/}

        <ProjectCard projectDisplayArray={projectDisplayArray} />
      </div>
    </div>
  );
}
export default Portfolio;
