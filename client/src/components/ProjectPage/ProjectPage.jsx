import React,{useContext} from 'react';
import { ProjectsContext } from '../../contexts/ProjectsContext';
import LyonFilter from '../../assets/images/LyonFilter.png'


const ProjectPage = () => {
  const { projectSelect,  setProjectSelect } = useContext(ProjectsContext);
  console.log(projectSelect)
  return(
  <div className='project-page'>
    <div className='bg-img'>
      <img src={LyonFilter} alt="" />
    </div>
    <div className='project-info'>
      <div>
        {projectSelect.map((project) => (
          project.name
        ))}
      </div>
      <h1>Lyon</h1>
      <h1>Hola!</h1>
    </div>
  </div>
  )
};

export default ProjectPage;
