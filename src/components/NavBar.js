import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi'
import { useContext } from "react";
import { BackgroundMaker } from "../App";

function NavBar() {
  
  // useContext and useState variables to reset the NavBar background color to match the page that is currently displayed.
  const [navBackground, setNavBackground] = useContext(BackgroundMaker);

  // useState variable to open the hamburger menu when it is displayed on smaller screens. The boolean argument, set to false, ensures
  // that the menu is closed by default. The code for this variable, its use to make a pop-up menu and the formatting of that
  // menu (below) derives from an example from: Full Stack Niraj, "React & Tailwind CSS Responsive Navbar - Complete React Course -
  // Day 13", Youtube (2022), last viewed 21 June 2023: https://www.youtube.com/watch?v=Ww9oyQuS7rA
  const [showNav, setShowNav] = useState(false);


  //useState variable to change the color of the most recently selected navbar link to red in order to indicate which page is currently displayed.
  const [pageState, setPageState] = useState({
    homeText: "md:text-red-500 md:hover:text-red-600",
    portfolioText: "md:text-stone-500 md:hover:text-stone-800",
    contactText: "md:text-stone-500 md:hover:text-stone-800"
  });

  return (
    
    // Formatting keeps the navbar/menu fixed at the top of the page; z-index ensures that the navbar always displays uppermost, 
    // even when the zoom animation is activated for the project cards on the portfolio page.
    <nav className="sticky top-0 z-10">
      
      {/* HiMenu acts as the hamburger icon and is available through the npm react-icons package 
      (to access the icon search page go to: https://react-icons.github.io/react-icons/). It is displayed by default on small 
      screens but is hidden on medium and larger screens. The onClick function reverses the value of the showNav boolean argument
      allowing the user to open and to close the menu. 
       */}
      <HiMenu onClick={() => setShowNav(!showNav)}
      className="md:hidden block w-10 h-10 p-2 cursor-pointer"/>
      
      {/* When the value of showNav === true then the hamburger menu is displayed; when it is false the menu is not displayed (is
        displayed off screen). The remainder of the formatting controls how the hamburger menu and the navbar menu (for medium 
        screens and up) are displayed. The frosted navbar effect derives, in part, from code in Jon Catmull's answer to a query in "Stack Overlow": Chad Johnson, "How can I make a CSS glass/blur effect work for an overlay?", Stack Overflow (20 December 2014), last viewed 1 August 2023: 
        https://stackoverflow.com/questions/27583937/how-can-i-make-a-css-glass-blur-effect-work-for-an-overlay, and from a video
        by Saraev Media: "How to Create a Frosted Navbar with TailwindCSS", YouTube (2021), last viewed 1 August 2023: 
        https://www.youtube.com/watch?v=nK4J7CguMFc */}
      <ul className={(showNav ? "left-0" : "-left-full") + " fixed bg-stone-500 w-4/12 h-40 text-white space-y-5 md:space-y-0 p-5 md:static md:bg-stone-300 md:bg-opacity-0 md:backdrop-blur-sm md:flex md:h-14 font-serif md:items-center md:border-b-2 md:border-stone-500 text-sm md:w-full bg-opacity-90"}>
        <li className={pageState.homeText + " md:pl-2"}>
          
          {/* The pageState, setPageState variable changes the color of the most recently clicked link to red, using onClick, in order to indicate which page is currently displayed. Links become darker upon hover. The navBackground, setNavBackground variable works 
          in conjunction with the BackgroundMaker useContext variable to change the color of the div parent element containing the NavBar and
          page components in the App component. This, in effect, changes the background color of the NavBar given its background is set to
          transparent and allows its color to match that of the page component displayed.*/}
          <NavLink onClick={() => {setPageState(
            {...pageState, homeText: "md:text-red-500 md:hover:text-red-600",
            portfolioText: "md:text-stone-500 md:hover:text-stone-800",
            contactText: "md:text-stone-500 md:hover:text-stone-800"
            }
            );
            setNavBackground(
              {...navBackground, backgroundColor: "bg-blue-200"}
            )}}
            to="/"
            end
          >
            Home
          </NavLink>
        </li>
        <li className={pageState.portfolioText + " md:pl-5"}>
          <NavLink onClick={() => {setPageState(
            {...pageState, homeText: "md:text-stone-500 md:hover:text-stone-800",
            portfolioText: "md:text-red-500 md:hover:text-red-600",
            contactText: "md:text-stone-500 md:hover:text-stone-800"
            }
            );
            setNavBackground(
              {...navBackground, backgroundColor: "bg-red-200"}
            )}}
            to="portfolio"
          >
            Portfolio
          </NavLink>
        </li>
        <li className={pageState.contactText + " md:pl-5"}>
          <NavLink onClick={() => {setPageState(
            {...pageState, homeText: "md:text-stone-500 md:hover:text-stone-800",
            portfolioText: "md:text-stone-500 md:hover:text-stone-800",
            contactText: "md:text-red-500 md:hover:text-red-600"
            }
            );
            setNavBackground(
              {...navBackground, backgroundColor: "bg-green-200"}
            )
          }}
            to="contact"
            end
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
