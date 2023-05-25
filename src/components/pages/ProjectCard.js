import React from "react";

//The props argument in the ProjectCard() function allows this component to be re-used repeatedly as a template in 
//Portfolio.js where it takes in data stored as objects in projects.json. The HTML is a Bootstrap
//card component: 'Images' from: https://getbootstrap.com/docs/4.3/components/card/ The images for 
//these cards are held in the assets/images subfolder within the public folder. Placing images in public/assets allows 
//react to find and to display them as related in an article from "Level Up Coding": Lorenzo Zarantonello, "Display 
//Images In React", Level Up Coding (17 January 2023), last viewed 14 March 2023: 
//https://levelup.gitconnected.com/display-images-in-react-8ff1f5b1cf9a and in Harshvardhan Singh Baghel's answer to a question
//on "Stack Overflow": Zip, "How do I reference a local image in React?", Stack Overflow (12 October 2016), 
//last viewed 14 March 2023: https://stackoverflow.com/questions/39999367/how-do-i-reference-a-local-image-in-react

function ProjectCard(props) {
  return ( 
    <article className="w-80 h-80 shadow-2xl shadow-slate-800 rounded-md"> {/* Class name ensures that cards are responsive */}
      <div className="">
        <img src={props.screenshot} alt={props.title} className="h-48 w-80 rounded-t-md"/>
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



