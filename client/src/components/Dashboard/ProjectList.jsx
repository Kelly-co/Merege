import React, { useContext, useState } from "react";
import { ProjectsContext } from "../../contexts/ProjectsContext";
import ProjectCard from "./ProjectCard";
import "./Project.css";

const ProjectList = () => {
  const { projects, setProjects } = useContext(ProjectsContext);

  console.log(projects);
  const [projectsSearch, setProjectsSearch] = useState(projects);

  const handleSearch = (e) => {
    console.log(e.target);
    const query = e.target.value;
    if (e.target.value === "All beaches") {
      setProjectsSearch(projects);
    } else {
      const searchProject = projects.filter((project) => {
        if (project.name.toLowerCase().includes(query.toLowerCase())) {
          return true;
        }
        if (project.subject.toLowerCase().includes(query.toLowerCase())) {
          return true;
        }
        if (project.branch.toLowerCase().includes(query.toLowerCase())) {
          return true;
        }
        for (let i = 0; i < project.languages.length; i++) {
          if (
            project.languages[i].toLowerCase().includes(query.toLowerCase())
          ) {
            return true;
          }
        }
        for (let i = 0; i < project.keyword.length; i++) {
          if (project.keyword[i].toLowerCase().includes(query.toLowerCase())) {
            return true;
          }
        }
      });
      setProjectsSearch(searchProject);
    }
  };

  const handleFilterKeyword = (e) => {
    const query = e.target.value;
    if (e.target.value === "All beaches") {
      setProjectsSearch(projects);
    } else {
      const searchProject = projects.filter((project) => {
        for (let i = 0; i < project.keyword.length; i++) {
          if (project.keyword[i].toLowerCase().includes(query.toLowerCase())) {
            return true;
          }
        }
      });
      setProjectsSearch(searchProject);
    }
  };

  const handleFilterBranch = (e) => {
    const query = e.target.value;
    console.log(e.target.value);
    if (e.target.value === "All beaches") {
      setProjectsSearch(projects);
    } else {
      const searchProject = projects.filter((project) => {
        if (project.branch.toLowerCase().includes(query.toLowerCase())) {
          return true;
        }
      });
      console.log("searchProject");
      setProjectsSearch(searchProject);
    }
  };

  let display = projectsSearch.map((element, index) => (
    <div key={index}>
      <ProjectCard {...element} />
    </div>
  ));
  let allkey = [];
  function allkeyfunction() {
    projects.map((project) => {
      return Object.assign(project, {
        keyword: [project.key1, project.key2, project.key3],
      });
    });
  }

  allkeyfunction();
  console.log(projects);

  let inoption = [];
  return (
    <div className="dashboard">
      <div className="search">
        <input
          type="search"
          name="search-form"
          id="search-form"
          placeholder="Type a beach..."
          onChange={handleSearch}
        />
        <div>
          <div>
            <select
              className="select-css"
              id="search-form"
              onChange={handleFilterKeyword}
            >
              <option>All beaches</option>
              {projects.map((project) =>
                project.keyword.map((element, index) => {
                  if (inoption.includes(element) === false) {
                    inoption.push(element);
                    return <option key={index}>{element}</option>;
                  }
                })
              )}
            </select>
          </div>
          <div>
            <select className="select-css" onChange={handleFilterBranch}>
              <option>branch</option>
              {[
                ...new Map(
                  projects.map((item) => [item.branch, item])
                ).values(),
              ].map((element, index) => (
                <option key={index}>{element.branch}</option>
              ))}
            </select>
          </div>
        </div>
        <div>{display}</div>
      </div>
    </div>
  );
};

export default ProjectList;
