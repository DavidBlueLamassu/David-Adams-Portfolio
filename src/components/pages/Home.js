import React from "react";

function Home() {
  return (
    
    // Background color and font
    <main className="bg-blue-200 h-full lg:h-screen font-serif p-2">
      <h1 className="pt-10 text-center text-5xl">Welcome to the Portfolio of David Adams</h1>
      <h2 className="pt-3 text-center text-3xl mb-10">Exploring the Limits of Web Design</h2>
      
      {/* Sets up a flex box so that portrait and biographical information will appear in column on small screens and in a row on
      medium screens and up. */}
      <article className="flex flex-col md:flex-row items-center md:items-start">
        <img alt="David Adams" src="./../assets/images/portrait.jpg" className="w-40 md:mr-10 md:ml-20 pb-6 md:pt-4 lg:pt-0"></img>
        <p className="text-lg text-justify md:mr-20 mx-4 bg-blue-200">
        Welcome to my portfolio. I am a Junior Web Developer. I recently completed an online coding bootcamp in Frontend Web Development run by edX, graduating with a mark of 98.5%. My skills include coding with: React.js, TailwindCSS, 
        Node.js, JavaScript/jQuery, Bootstrap, CSS and HTML. To date, I have deployed 12 webpages on GitHub pages and 3 on Netlify. 
        I also have 2 GitHub repos dedicated to backend applications using Node. I particularly enjoy the problem-solving aspects of 
        working with JavaScript and its offshoots. I am also interested in developing animations using Tailwind and CSS. Examples 
        of my work may be found in the Portfolio section. Please feel free to contact me. Social media links, my CV and a contact form may be found on the Contact page.
        </p>
      </article>
      {/* The empty footer ensures that the background color will continue to the bottom of the screen display */}
      <footer className="mb-20">
      </footer>
    </main>
  );
}

export default Home;
