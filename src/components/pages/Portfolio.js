import React from "react";
import ProjectCard from "./ProjectCard.js";
import projects from "./../../projects.json";

function Portfolio() {
  return (
    <main className="bg-blue-200 h-screen font-serif">
      <h1 className="pt-10 text-center text-5xl">Portfolio</h1>
      <div>
      {ProjectDisplay()}
      </div>
    </main>
  );
}

function ProjectDisplay() {
  return( <div className="row"> {/*Displays card components in rows instead of column default.*/}
    {
      projects.map(function(currentObject) {
        return <ProjectCard 
        key={currentObject.id}
        title={currentObject.title} 
        screenshot={currentObject.screenshot} 
        url={currentObject.url}
        gitHub={currentObject.gitHub}/>
      })
    }
  </div>
  )
}

export default Portfolio;
