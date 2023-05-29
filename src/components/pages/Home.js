import React from "react";

function Home() {
  return (
    <main className="bg-blue-200 h-full lg:h-screen font-serif p-2">
      <h1 className="pt-10 text-center text-5xl">Welcome to the Portfolio of David Adams</h1>
      <h2 className="pt-3 text-center text-3xl mb-10">Exploring the Limits of Web Design</h2>
      <article className="flex flex-col md:flex-row items-center md:items-start">
        <img alt="David Adams" src="./../assets/images/portrait.jpg" className="w-40 md:mr-10 md:ml-20 pb-6 md:pt-4 lg:pt-0"></img>
        <p className="text-lg text-justify md:mr-20 mx-4 bg-blue-200">
        Welcome to my webpage. I am currently training as a web developer and am in the final stages of a coding bootcamp in Front 
        End Web Development (week 13 of 16) run by Trilogy Education Services. The skills that I learned over the course of this 
        programme include coding with: React.js/JSX, Node.js, JavaScript/jQuery, CSS, and HTML (including Bootstrap). To date I 
        have deployed eleven webpages on GitHub pages including a group project using Words API and Giphy API. I particularly 
        enjoy the problem-solving aspects of working with JavaScript and its offshoots. Examples of my work may be found in the 
        Portfolio section of this website. Please feel free to contact me. Social media links and my CV may be found in the 
        Contact section.
        </p>
      </article>
      <footer className="mb-20">
      </footer>
    </main>
  );
}

export default Home;
