import React,{useContext} from 'react';
import { ProjectsContext } from '../../contexts/ProjectsContext';


const ProjectPage = () => {
  const { projectSelect,  setProjectSelect } = useContext(ProjectsContext);
  console.log(projectSelect)
  return(
  <div></div>
  )
};

export default ProjectPage;
