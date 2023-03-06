import React from "react";

//component that displays the card with project details

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
          <div className="card" style={{ width: "100%" }}>
            <img
              src={process.env.PUBLIC_URL + projectDisplayArray.projectImage}
              class="card-img-top"
              alt="project preview image"
              style={{
                height: "100%",
                maxWidth: "100%",
              }}
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
