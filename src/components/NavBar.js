import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi'

function NavBar() {
  
  // useState variable to open the hamburger menu when it is displayed on smaller screens. The boolean argument, set to false, ensures
  // that the menu is closed by default. The code for this variable, its use to make a pop-up menu and the formatting of that
  // menu (below) derives from an example from: Full Stack Niraj, "React & Tailwind CSS Responsive Navbar - Complete React Course -
  // Day 13", Youtube (2022), last viewed 21 June 2023: https://www.youtube.com/watch?v=Ww9oyQuS7rA
  const [showNav, setShowNav] = useState(false);

  
  return (
    
    // Formatting keeps the navbar/menu fixed at the top of the page; z-index ensures that the navbar always displays uppermost, 
    // even when the zoom animation is activated for the project cards on the portfolio page.
    <nav className="sticky top-0 bg-blue-200 z-10">
      
      {/* HiMenu acts as the hamburger icon and is available through the npm react-icons package 
      (to access the icon search page go to: https://react-icons.github.io/react-icons/). It is displayed by default on small 
      screens but is hidden on medium and larger screens. The onClick function reverses the value of the showNav boolean argument
      allowing the user to open and to close the menu. 
       */}
      <HiMenu onClick={() => setShowNav(!showNav)}
      className="md:hidden block w-10 h-10 p-2 cursor-pointer"/>
      
      {/* When the value of showNav === true then the hamburger menu is displayed; when it is false the menu is not displayed (is
        displayed off screen). The remainder of the formatting controls how the hamburger menu and the navbar menu (for medium 
        screens and up) are displayed. All menu items are set to change from the default color to black upon hover. */}
      <ul className={(showNav ? "left-0" : "-left-full") + " fixed bg-stone-500 w-4/12 h-40 text-white space-y-5 md:space-y-0 p-5 md:static md:bg-stone-300 md:flex md:h-14 font-serif md:items-center md:text-stone-500 md:border-b-2 md:border-stone-500 text-sm md:w-full bg-opacity-90"}>
        <li className="md:pl-2 hover:text-stone-800">
          <NavLink
            to="/"
            end
          >
            Home
          </NavLink>
        </li>
        <li className="md:pl-5 hover:text-stone-800">
          <NavLink
            to="portfolio"
          >
            Portfolio
          </NavLink>
        </li>
        <li className="md:pl-5 hover:text-stone-800">
          <NavLink
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
