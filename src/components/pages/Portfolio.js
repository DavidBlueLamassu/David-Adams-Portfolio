import React from "react";
import ProjectCard from "./ProjectCard.js";
import projects from "./../../projects.json";

function Portfolio() {
  return (
    
    // Background color, font and spacing
    <main className="bg-red-200 h-full font-serif">
      <h1 className="pt-10 text-center text-5xl">Portfolio</h1>
      
      {/* Sets up a flex box so that project cards can be centered using justify-center. */}
      <div className="flex justify-center">

      {/* Function maps project cards using the ProjectCard.js props file using data from projects.json*/}
      {ProjectDisplay()}
      </div>
    </main>
  );
}

function ProjectDisplay() {
  
  // Displays cards in 1 column on small screens, 2 on medium screens, and 3 on large screens and up.
  return( <div className="grid md:grid-cols-2 lg:grid-cols-3 pt-10 gap-20 pb-20"> 

  {/* Function creates project cards with the map method, using the ProjectCard.js props file and data from projects.json */}
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
