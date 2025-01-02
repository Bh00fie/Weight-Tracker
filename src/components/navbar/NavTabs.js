import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navBar.css"

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="tracker"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Weight Tracker
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="calculator"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Calculator
        </NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;
