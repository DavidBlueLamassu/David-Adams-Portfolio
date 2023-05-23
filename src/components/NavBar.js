import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <ul className="bg-stone-300 flex h-14 font-serif items-center text-stone-500 border-b-2 border-stone-500 text-sm">
      <li className="pl-2 hover:text-stone-800">
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
      <li className="pl-5 hover:text-stone-800">
        <NavLink
          to="portfolio"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Portfolio
        </NavLink>
      </li>
      <li className="pl-5 hover:text-stone-800">
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
  );
}

export default NavBar;
