import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi'

function NavBar() {
  
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="sticky top-0 bg-blue-200">
      <HiMenu onClick={() => setShowNav(!showNav)}
      className="md:hidden block w-10 h-10 p-2 cursor-pointer"/>
      <ul className={(showNav ? "left-0" : "-left-full") + " fixed bg-stone-500 w-4/12 h-40 text-white space-y-5 md:space-y-0 p-5 md:static md:bg-stone-300 md:flex md:h-14 font-serif md:items-center md:text-stone-500 md:border-b-2 md:border-stone-500 text-sm md:w-full bg-opacity-90"}>
        <li className="md:pl-2 hover:text-stone-800">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Home
          </NavLink>
        </li>
        <li className="md:pl-5 hover:text-stone-800">
          <NavLink
            to="portfolio"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Portfolio
          </NavLink>
        </li>
        <li className="md:pl-5 hover:text-stone-800">
          <NavLink
            to="contact"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
