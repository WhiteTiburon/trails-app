import React from 'react';
import {Link} from "react-router-dom";
import trailContent from './data'

const AboutPage = () => (
  <>
   <h1>Trail List</h1>
      {trailContent.map((trail, key) => (
          <Link className="article-list-item" key = {key} to={`/trail/${trail.name}`}>
          <h3>{trail.title}</h3>
              <p>{trail.content[0].substring(0,150)}...</p>
          </Link>
      ))}
  </>
);

export default AboutPage;