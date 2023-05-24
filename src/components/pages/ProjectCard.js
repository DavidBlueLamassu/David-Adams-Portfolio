import React from "react";

const styles = {
  // Centers each card body within its div
  cardPosition: {
    display: "flex",
    justifyContent: "center"
  },
  // Formatting for each card, including font, background-color and size
  card: {
    background: "rgb(195, 219, 239)",
    fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
    height: "325px",
    width: "325px",
    boxShadow: "0 3px 6px #999, 0 3px 6px #999",
    textAlign: "center",
    marginBottom: "40px",
  },
  // Size formatting for each card image
  image: {
    height: "200px"
  },
  // Formatting for the links at the bottom of the card
  links: {
    textDecoration: "none",
    color: "black",
  },
}
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
    <article className="col-lg-4 col-md-6 col-sm-12" style={styles.cardPosition}> {/* Class name ensures that cards are responsive */}
      <div className="card" style={styles.card}>
        <img src={props.screenshot} className="card-img-top" alt={props.title} style={styles.image}/>
        <div className="card-body">
          <h5 className="card-text">{props.title}</h5>
          <div>
            <a href={props.url} style={styles.links}>URL</a>
          </div>
          <div>
            <a href={props.gitHub} style={styles.links}>GitHub</a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;



