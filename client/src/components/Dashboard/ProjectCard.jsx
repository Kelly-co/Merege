import React,{useContext} from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import "./Project.css";
import ProjectPage from "../ProjectPage/ProjectPage"
import { ProjectsContext } from '../../contexts/ProjectsContext';
import { useNavigate } from "react-router-dom";

function ProjectCard(props){
    const { name, branch,start_date,end_date} = props;
    const { projectSelect,  setProjectSelect } = useContext(ProjectsContext);
    const navigate = useNavigate()
    
    let endDate = new Date(end_date)
    let startDate = new Date(start_date)
    let today = new Date()
    let progress


    function daysBetween(date1, date2) {
      // The number of milliseconds in one day
      const ONE_DAY = 1000 * 60 * 60 * 24;
      // Convert both dates to milliseconds
      const date1_ms = date1.getTime();
      const date2_ms = date2.getTime();
      // Calculate the difference in milliseconds
      const difference_ms = Math.abs(date1_ms - date2_ms);
      // Convert back to days and return
      return Math.round(difference_ms / ONE_DAY);
    }




    progressfunction ()
    function progressfunction (){
      if (today >= endDate){
        return progress=100
      }
      if (today<startDate){
        progress=0
      }
      else{
        progress = parseInt(daysBetween(today,endDate)/daysBetween(startDate,endDate)*100)
       
      }

    }

    function selectProject () {
      setProjectSelect(props)
      navigate(`/projects`)
      
    }
  


    return(
        <div  className='cardComponent'onClick={selectProject}>
          <div className='projectName'>
            <h2>{name}</h2>
          </div>
          <div className='branch'>
            <h2>{branch}</h2>
          </div>
          <div className='progress'>
              <ProgressBar completed={progress}/>
          </div>
        </div>
    )
}


export default ProjectCard