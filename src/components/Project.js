import React from "react";

function Project(props) {
  const projectDisplayArray = props.projectDisplayArray;

  return (
    <>
      {projectDisplayArray.map((projectDisplayArray) => (
        <div
          className="col-md-6"
          style={{ padding: "20px" }}
          key={projectDisplayArray.id}
        >
          <div className="card" style={{ width: "450px" }}>
            <img
              src={projectDisplayArray.projectImage}
              class="card-img-top"
              alt="project preview image"
              height={"25%"}
            />
            <div className="card-body">
              <h4 className="card-title">{projectDisplayArray.projectTitle}</h4>
              <p className="card-text"> {projectDisplayArray.projectDesc}</p>
              <p>
                <a
                  href={projectDisplayArray.projectGitHub}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </p>
              <p>
                <a
                  href={projectDisplayArray.projectURL}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live App
                </a>
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default Project;
