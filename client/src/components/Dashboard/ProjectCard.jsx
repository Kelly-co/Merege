import React from 'react'

function ProjectCard(props){
    const { name, branch} = props;
    console.log("na")
    return(
        <div className='card'>
            <h2>{name}</h2>
            <h2>{branch}</h2>
        </div>
    )
}


export default ProjectCard