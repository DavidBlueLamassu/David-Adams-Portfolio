import React, { useState } from 'react';
import emailjs from "emailjs-com";

// Variables holding the default color values for the Name, E-mail and Subject input elements and for the Message textarea. These
// are used with useState variables to alert the user of incomplete fields when sending a text message.
let nameInputColor = "bg-white";
let emailInputColor = "bg-white";
let subjectInputColor = "bg-white";
let messageInputColor = "bg-white";

// Variables holding placeholder values for the Name, E-mail and Sujbect input elements and for the Message textarea. These are 
// used with useState variables to alert the user of incomplete fields when sending a text message.
let namePlace = "";
let emailPlace = "";
let subjectPlace = "";
let messagePlace = "Message";

// Variables holding tailwind formatting for the Name, E-mail and Subject input elements and for the Message textarea. These variables
// are used in tandem with the useState variables above.
const inputFormat = " h-6 w-56 md:w-72 mr-0 md:mr-36 rounded-md border-2 border-slate-500 pl-1";
const textAreaFormat = " w-72 h-52 md:w-96 md:h-40 rounded-md border-2 border-slate-500 pl-1";

function Contact() {
  
  // useState variables for the Name, E-mail and Subject input elements and for the Message textarea. These variables allow a change
  // of state to indicate to indicate that the user has attempted to send a message with empty fields.
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

  // A function to send an e-mail using the Name, E-mail, and Subject inputs and the Message textarea using the emailjs-com
  // npm package. This function will only be activated provided there is information in all the relevant fields. Provided this
  // is the case, the function is called at the end of a series of conditonals below. The code for this function is derived from
  // an example given in a YouTube video: RemyFamily, "How to send emails using React through EmailJs", YouTube (2021), last
  // viewed 21 June 2023: https://www.youtube.com/watch?v=NgWGllOjkbs

  function sendEmail(e) {
    e.preventDefault();

    // Data required to send a message via EmailJS: Service ID, Template ID, form event data, Public Key.
    emailjs.sendForm('service_xnt1z9b', 'template_4niml8h', e.target, 'Kh6YK49KF4xov9JWF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      // Clears the form upon the message being sent.
      e.target.reset()
  }
  
  return (
    
    // Background color and fount formatting
    <main className="bg-blue-200 h-full font-serif">
      <h1 className="text-5xl pt-10 text-center">Contact Me</h1>
      
      {/* A series of links arranged in a flex box. The link text turns red upon hover. */}
      <article className="flex flex-col items-center lg:flex-row lg:justify-evenly pt-4 lg:pt-14 text-lg">
        <a href="https://github.com/DavidBlueLamassu" className="hover:text-red-600 w-40 text-center">Github Profile</a>
        <a href="https://www.linkedin.com/in/david-adams-922022a1/" className="hover:text-red-600 w-40 text-center">LinkedIn Page</a>
        <a href="mailto:dra21@cam.ac.uk" className="hover:text-red-600 w-40 text-center">E-mail</a>
        <a href="https://drive.google.com/file/d/1pjDfgrQ_WDt_PpRfR_K9VMia41A3VUls/view" className="hover:text-red-600 w-40 text-center">CV</a>
      </article>
      
      <form onSubmit={(e) => {
          
          // Variables holding the values for the Name, E-mail and Subject input elements and for the Message textarea when the user
          // clicks the Submit button at the bottom of the form. The code for acquiring data from a form is derived in part from  
          // Aliaksandr Sushkevich's reply to a query on "Stack Overflow": myusuf, "Get form data in React", Stack Overflow (2 May 
          // 2014), last viewed 21 June 2023: 
          // https://stackoverflow.com/questions/23427384/get-form-data-in-react#:~:text=A%20with%20a%20%3C,will%20enable%20both%20use%20cases 
          // It is also partly derived from: RemyFamily, "How to send emails using React through EmailJs", YouTube (2021), last
          // viewed 21 June 2023: https://www.youtube.com/watch?v=NgWGllOjkbs
          let name = e.target.name.value;
          let email = e.target.email.value;
          let subject = e.target.subject.value;
          let message = e.target.message.value;
          
          // Prevents the form refreshing after submit; thereby allowing messages to be displayed should information be incomplete
          // and the message not sent.
          e.preventDefault();

          // This conditional will run if any of the inputs or the textarea are incomplete. The background color for any incompleted
          // area will change to pink and a text message will be displayed to alert the user through placeholder text. A message 
          // cannot be sent until all fields are complete.
          if (name === "" || email === "" || subject === "" || message === "") {
            
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
          
          // Provided all the conditions above have been met, the sendEmail function is called and a message will be sent.

          sendEmail(e);

          }} 

          // Flex box formatting for the inputs and textarea.
          className="flex flex-col items-center">
        <h2 className="text-3xl pt-6 lg:pt-14 pb-10">Send me a Text</h2>
        
        {/* Allows h3 element and input to be displayed on the same line */}
        <div className="flex">
          <h3 className="pb-4 w-16">Name:</h3>
          
          {/* The onClick function returns the input to its default color and placeholder; allowing the user to enter text
          should the state have changed to alert the user that this field is incomplete. */}
          <input name="name" className={nameState.nameBackground + inputFormat} placeholder={nameState.nameHolder} onClick={() => {
            setNameState(
              {
              ...nameState, nameBackground: nameInputColor = "bg-white",
              nameHolder: namePlace = ""
              } 
            )
          }}></input>
        </div>

        {/* Allows h3 element and input to be displayed on the same line */}
        <div className="flex pt-2 pb-2">
          <h3 className="pb-4 w-16">E-mail:</h3>
          
          {/* The onClick function returns the input to its default color and placeholder; allowing the user to enter text
          should the state have changed to alert the user that this field is incomplete. */}
          <input name="email" className={emailState.emailBackground + inputFormat} placeholder={emailState.emailHolder} onClick={() => {
            setEmailState(
              {
                ...emailState, emailBackground: emailInputColor = "bg-white",
                emailHolder: emailPlace = ""
              } 
            )
          }}></input>
        </div>

        {/* Allows h3 element and input to be displayed on the same line */}
        <div className="flex pt-2 pb-2">
          <h3 className="pb-4 w-16">Subject:</h3>
          
          {/* The onClick function returns the input to its default color and placeholder; allowing the user to enter text
          should the state have changed to alert the user that this field is incomplete. */}
          <input name="subject" className={subjectState.subjectBackground + inputFormat} placeholder={subjectState.subjectHolder} onClick={() => {
            setSubjectState(
              {
                ...subjectState, subjectBackground: subjectInputColor = "bg-white",
                subjectHolder: subjectPlace = ""
              } 
            )
          }}></input>
        </div>
        
        {/* The onClick function returns the input to its default color and placeholder; allowing the user to enter text
          should the state have changed to alert the user that this field is incomplete. */}
        <textarea name="message" className={messageState.messageBackground + textAreaFormat} placeholder={messageState.messageHolder} onClick={() => {
            setMessageState(
              {
                ...messageState, messageBackground: messageInputColor = "bg-white",
                messageHolder: messagePlace = "Message"
              } 
            )
          }}></textarea>
        
        {/* The Submit button background and text change color upon hover. */}
        <button className="bg-purple-800 text-white w-20 h-8 mt-4 rounded-md hover:bg-red-500 hover:text-black">Submit</button>
      </form>
      
      {/* This empty footer ensures that the background color continues to the bottom of the screen display. */}
      <footer className="h-20 bg-blue-200">
      </footer>
    </main>
  );
}

export default Contact;
