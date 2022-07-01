import React, { useEffect, useState } from "react";
import axios from "axios";

export const ProjectsContext = React.createContext();

export default function ProjectsContextProvider(props) {
  const [projects, setProjects] = useState();
  const [loading, setLoading] = useState(false);
  const [projectSelect, setProjectSelect] = useState();
  const [user, setUser] = useState({});
  const [projectUser, setProjectUser] = useState();
  const [users, setUsers] = useState({});
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    getProjects();
    getUsers();
    getProjectUser();
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
  const getUsers = async () => {
    axios
      .get("/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };console.log(users)

  const getProjectUser = async () => {
    axios
      .get("/projects-users")
      .then((response) => {
        setProjectUser(response.data);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(projectUser);
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
        users,
      }}
    >
      {props.children}
    </ProjectsContext.Provider>
  );
}
