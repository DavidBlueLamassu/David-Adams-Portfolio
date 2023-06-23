import React from "react";

//This props component is used to generate cards for each project presented in the Portfolio.js page component, drawing 
//from data stored in projects.json. 

function ProjectCard(props) {
  return ( 

    // Card dimensions shape and shadow effect. Zoom animation is activated for the card upon hover.
    <article className="w-80 h-80 shadow-2xl shadow-slate-800 rounded-md hover:animate-zoom"> 
      <div>

        {/* Each screenshot of a project webpage acts as a link to the URL of that webpage  */}
        <a href={props.url}>
          <img src={props.screenshot} alt={props.title} className="h-48 w-80 rounded-t-md"/>
        </a>

        {/* Project title with links to the project URL and Github page; URL and Github link text turns red upon hover.*/}
        <div className="text-center pt-4">
          <h2 className="text-lg">{props.title}</h2>
          <div>
            <a href={props.url} className="text-sm hover:text-red-600">URL</a>
          </div>
          <div>
            <a href={props.gitHub} className="text-sm hover:text-red-600">GitHub</a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;



