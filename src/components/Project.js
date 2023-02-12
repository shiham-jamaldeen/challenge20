import React from "react";

// function Project(props) {
//   console.log(props);

//   return (
//     <>
//       {/*Project Card */}
//       <div className="card" style={{ width: "18rem" }}>
//         <img src="..." class="card-img-top" alt="..." />
//         <div className="card-body">
//           <h5 className="card-title">Card title</h5>
//           <p className="card-text">
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </p>
//           <a href="#" className="btn btn-primary">
//             Go somewhere
//           </a>
//         </div>
//       </div>
//     </>
//   );

// }
function Project(props) {
  const itemsArray = props.ProjectCard;
  const listItems = itemsArray.map((itemsArray, index) => {
    <div className="card" style={{ width: "18rem" }} key={index}>
      <img src={itemsArray.projectImage} class="card-img-top" alt="..." />
      <div className="card-body">
        <h3 className="card-title">{itemsArray.projectTitle}</h3>
        <p className="card-text">{itemsArray.projectDesc}</p>

        <a
          href={itemsArray.projectGitHub}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href={itemsArray.projectURL}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Live App
        </a>
      </div>
    </div>;
  });
  //console.log(listItems);
  return { listItems };
}
export default Project;
