import React from 'react';
import trailContent from './data.js';

const TrailPage = ({match}) => {
    const name = match.params.name;
    const trail = trailContent.find(trail => trail.name === name);

    if (!trail) return <h1>Trail does not exist!</h1>

    return(
        <>
            <h1>{trail.title}!</h1>
            {trail.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>))}
        </>
    );
}
export default TrailPage;