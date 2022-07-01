/* eslint-disable react/jsx-no-target-blank */
import React,{useContext} from 'react';
import { ProjectsContext } from '../../contexts/ProjectsContext';
import LyonFilter from '../../assets/images/LyonFilter.png';
import Trello from '../../assets/images/trello.png';
import Github from '../../assets/images/github.png';
import Desc from '../../assets/images/description.png';
import Tools from '../../assets/images/Tools.png';
import Keys from '../../assets/images/keys.png';
import "./ProjectPage.css"
import { useParams, Link } from 'react-router-dom';


const ProjectPage = () => {
  
  const { projectSelect, setProjectSelect} = useContext(ProjectsContext);
  let project = projectSelect;
 

  
 // let project = projects.find(project => project.name === params.projectName)
  console.log(project)
   

  return(
    <div className='container'>
      <div className='project-page'>
          <div className='bg-img' style={{ backgroundImage: `url(${LyonFilter})`, backgroundRepeat: "no-repeat", backgroundSize:"cover", height:"240px", width:"100%" }}>
            <h1>{project.branch} Branch</h1>
          </div>
      </div>
      <div className='project-info'>
          <h1 className='project-name'>
            Project name: {project.name}
          </h1>
          <img src="" alt="" />
      </div>
        <div className='project-items'>
            <div className='item1'>
              <img src={Github}alt="" />
              <p>GitLab:</p>
              <a href={project.githubLink} target="_blank">Link to repository</a> 
            </div>
            <div className='item2'>
              <img src={Trello} alt="" />
              <p>Trello:</p>
              <a href={project.trelloLink} target="_blank">Link to Trello</a>
            </div>
            <div className='item3'>
              <img src={Desc} alt="" />
              <p>Description:</p>
              <h6>{project.description}</h6>
            </div>
            <div className='item4'>
              <img src={Tools} alt="" />
              <p>Software:</p>
              <ul>
                <li>{project.language1}</li>
                <li>{project.language2}</li>
                <li>{project.language3}</li>
              </ul>
            </div>
            <div className='item5'>
              <img src={Keys} alt="" />
              <p>Keywords:</p>
              <ul>
                <li>{project.key1}</li>
                <li>{project.key2}</li>
                <li>{project.key3}</li>
              </ul>
            </div>
            <div className='item6'>
              <Link to="/form">
                <button>
                  Join
                </button>
              </Link>
              
            </div>
       </div>
  </div>
  )
};



export default ProjectPage;
