import React from "react";

function Home() {
  return (
    <main className="bg-blue-200 h-screen font-serif">
      <h1 className="pt-10 text-center text-5xl">Welcome to the Portfolio of David Adams</h1>
      <h2 className="pt-3 text-center text-3xl">Exploring the Limits of Web Design</h2>
      <article className="flex">
        <img alt="David Adams" src="./../assets/images/portrait.jpg" className="w-40 pt-10 mr-10 ml-20"></img>
        <p className="pt-10 text-lg text-justify mr-20">
        Welcome to my webpage. I am currently training as a web developer and am in the final stages of a coding bootcamp in Front 
        End Web Development (week 13 of 16) run by Trilogy Education Services. The skills that I learned over the course of this 
        programme include coding with: React.js/JSX, Node.js, JavaScript/jQuery, CSS, and HTML (including Bootstrap). To date I 
        have deployed eleven webpages on GitHub pages including a group project using Words API and Giphy API. I particularly 
        enjoy the problem-solving aspects of working with JavaScript and its offshoots. Examples of my work may be found in the 
        Portfolio section of this website. Please feel free to contact me. Social media links and my CV may be found in the 
        Contact section.
        </p>
      </article>
    </main>
  );
}

export default Home;
