import React from 'react';

function Contact() {
  return (
    <main className="bg-blue-200 h-screen font-serif">
      <h1 className="text-5xl pt-10 text-center">Contact Me</h1>
      <article className="flex justify-evenly pt-14 text-lg">
        <a href="https://github.com/DavidBlueLamassu" className="hover:text-red-600 w-40 text-center">Github Profile</a>
        <a href="https://www.linkedin.com/in/david-adams-922022a1/" className="hover:text-red-600 w-40 text-center">LinkedIn Page</a>
        <a href="mailto:dra21@cam.ac.uk" className="hover:text-red-600 w-40 text-center">E-mail</a>
        <a href="https://drive.google.com/file/d/1bzNSK8dZJcKRyuq8AdRfgVmCGf3MVq90/view" className="hover:text-red-600 w-40 text-center">CV</a>
      </article>
      <form className="flex flex-col items-center">
        <h2 className="text-3xl pt-14 pb-10">Send me a Text</h2>
        <div className="flex">
          <h3 className="pb-4 w-16">Name:</h3>
          <input className="h-6 w-72 mr-36 rounded-md border-2 border-slate-500 pl-1"></input>
        </div>
        <div className="flex pt-2 pb-2">
          <h3 className="pb-4 w-16">E-mail:</h3>
          <input className="h-6 w-72 mr-36 rounded-md border-2 border-slate-500 pl-1"></input>
        </div>
        <textarea className="w-96 h-40 rounded-md border-2 border-slate-500 pl-1" placeholder="Message"></textarea>
        <button className="bg-purple-800 text-white w-20 h-8 mt-4 rounded-md hover:bg-red-500 hover:text-black">Submit</button>
      </form>
    </main>
  );
}

export default Contact;
