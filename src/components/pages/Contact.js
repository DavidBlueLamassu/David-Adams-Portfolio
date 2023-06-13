import React, { useState } from 'react';
import emailjs from "emailjs-com";

let nameInputColor = "bg-white";
let emailInputColor = "bg-white";
let subjectInputColor = "bg-white";
let messageInputColor = "bg-white";
let namePlace = "";
let emailPlace = "";
let subjectPlace = "";
let messagePlace = "Message";
const inputFormat = " h-6 w-56 md:w-72 mr-0 md:mr-36 rounded-md border-2 border-slate-500 pl-1";
const textAreaFormat = " w-72 h-52 md:w-96 md:h-40 rounded-md border-2 border-slate-500 pl-1";

function Contact() {
  
const [nameState, setNameState] = useState ({
    nameBackground: nameInputColor,
    nameHolder: namePlace
  });

  const [emailState, setEmailState] = useState ({
    emailBackground: emailInputColor,
    emailHolder: emailPlace
  });

  const [subjectState, setSubjectState] = useState ({
    subjectBackground: subjectInputColor,
    subjectHolder: subjectPlace
  });

  const [messageState, setMessageState] = useState ({
    messageBackground: messageInputColor,
    messageHolder: messagePlace
  })

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_xnt1z9b', 'template_4niml8h', e.target, 'Kh6YK49KF4xov9JWF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
  
  return (
    <main className="bg-blue-200 h-full font-serif">
      <h1 className="text-5xl pt-10 text-center">Contact Me</h1>
      <article className="flex flex-col items-center lg:flex-row lg:justify-evenly pt-4 lg:pt-14 text-lg">
        <a href="https://github.com/DavidBlueLamassu" className="hover:text-red-600 w-40 text-center">Github Profile</a>
        <a href="https://www.linkedin.com/in/david-adams-922022a1/" className="hover:text-red-600 w-40 text-center">LinkedIn Page</a>
        <a href="mailto:dra21@cam.ac.uk" className="hover:text-red-600 w-40 text-center">E-mail</a>
        <a href="https://drive.google.com/file/d/1bzNSK8dZJcKRyuq8AdRfgVmCGf3MVq90/view" className="hover:text-red-600 w-40 text-center">CV</a>
      </article>
      <form onSubmit={(e) => {
          let name = e.target.name.value;
          let email = e.target.email.value;
          let subject = e.target.subject.value;
          let message = e.target.message.value;
          
          e.preventDefault();

          if (name === "" || email === "" || subject === "" || message === "") {
            if (name === "") {
              console.log("Name: " + name);
            }

            if (email === "") {
              console.log("E-mail: " + email);
            }

            if (message === "") {
              console.log("message: " + message);
            }
            
            if (name === "") {
              setNameState(
                {
                  ...nameState, nameBackground: nameInputColor = "bg-red-200",
                  nameHolder: namePlace = "Please enter your name."
                }
              );
            }

            if (email === "") {
              setEmailState(
                {
                  ...emailState, emailBackground: emailInputColor = "bg-red-200",
                  emailHolder: emailPlace = "Please enter your e-mail address."
                }
              );
            }

            if (subject === "") {
              setSubjectState(
                {
                  ...subjectState, subjectBackground: subjectInputColor = "bg-red-200",
                  subjectHolder: subjectPlace = "Please enter a subject."
                }
              );
            }

            if (message === "") {
              setMessageState(
                {
                  ...messageState, messageBackground: messageInputColor = "bg-red-200",
                  messageHolder: messagePlace = "Please enter a message."
                }
              );
            }

            return;

           
          }
          
          sendEmail(e);

          }} 

          className="flex flex-col items-center">
        <h2 className="text-3xl pt-6 lg:pt-14 pb-10">Send me a Text</h2>
        <div className="flex">
          <h3 className="pb-4 w-16">Name:</h3>
          <input name="name" className={nameState.nameBackground + inputFormat} placeholder={nameState.nameHolder} onClick={() => {
            setNameState(
              {
              ...nameState, nameBackground: nameInputColor = "bg-white",
              nameHolder: namePlace = ""
              } 
            )
          }}></input>
        </div>
        <div className="flex pt-2 pb-2">
          <h3 className="pb-4 w-16">E-mail:</h3>
          <input name="email" className={emailState.emailBackground + inputFormat} placeholder={emailState.emailHolder} onClick={() => {
            setEmailState(
              {
                ...emailState, emailBackground: emailInputColor = "bg-white",
                emailHolder: emailPlace = ""
              } 
            )
          }}></input>
        </div>
        <div className="flex pt-2 pb-2">
          <h3 className="pb-4 w-16">Subject:</h3>
          <input name="subject" className={subjectState.subjectBackground + inputFormat} placeholder={subjectState.subjectHolder} onClick={() => {
            setSubjectState(
              {
                ...subjectState, subjectBackground: subjectInputColor = "bg-white",
                subjectHolder: subjectPlace = ""
              } 
            )
          }}></input>
        </div>
        <textarea name="message" className={messageState.messageBackground + textAreaFormat} placeholder={messageState.messageHolder} onClick={() => {
            setMessageState(
              {
                ...messageState, messageBackground: messageInputColor = "bg-white",
                messageHolder: messagePlace = "Message"
              } 
            )
          }}></textarea>
        <button className="bg-purple-800 text-white w-20 h-8 mt-4 rounded-md hover:bg-red-500 hover:text-black">Submit</button>
      </form>
      <footer className="h-20 bg-blue-200">
      </footer>
    </main>
  );
}

export default Contact;
