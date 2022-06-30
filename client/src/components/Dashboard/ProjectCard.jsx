import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

function ProjectCard(props){
    const { name, branch,start_date,end_date} = props;
    console.log("na")
    return(
        <div className='card'>
            <h2>{name}</h2>
            <h2>{branch}</h2>
        </div>
    )
}


export default ProjectCard