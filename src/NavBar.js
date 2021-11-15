import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => (
  <nav>
      <ul>
          <li>
              <Link to="/">Home</Link>
          </li>
          <li>
              <Link to="/about">Trails</Link>
          </li>
          <li>
              <Link to="/map">Map</Link>
          </li>

      </ul>
  </nav>
);

export default NavBar;