import React, { useEffect, useState } from "react";
import axios from "axios";

export const ProjectsContext = React.createContext(null);

export default function ProjectsContextProvider(props) {
  const [projects, setProjects] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [projectSelect, setProjectSelect] = React.useState();
  const [user, setUser] = useState({});
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    axios
      .get("/projects")
      .then((response) => {
        setProjects(response.data);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(user);
  return (
    <ProjectsContext.Provider
      value={{
        projects,
        setProjects,
        loading,
        setLoading,
        projectSelect,
        setProjectSelect,
        user,
        setUser,
        auth,
        setAuth,
      }}
    >
      {props.children}
    </ProjectsContext.Provider>
  );
}
