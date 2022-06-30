import React, { useEffect} from "react";
import axios from "axios";



export const ProjectsContext = React.createContext(null);

export default function ProjectsContextProvider(props) {
  const [projects, setProjects] = React.useState();
  const [loading, setLoading] = React.useState(false);


  useEffect(() => {
    getProjects()
  }, []);


  const  getProjects = async () => {
    axios
      .get("/projects")
      .then((response) => {
        setProjects(response.data)
        setLoading(true)    
      })
      .catch((error) => {
        console.log(error);
      });
  }

  console.log(projects)
  return (
    <ProjectsContext.Provider
      value={{
        projects, 
        setProjects,
        loading,
        setLoading
      }}
    >
      {props.children}
    </ProjectsContext.Provider>
  );
}
