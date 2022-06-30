import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import ProjectList from "../components/Dashboard/ProjectList";
import Homepage from "./Homepage/Homepage";
import Form from "../components/Form/Form";
import ProjectPage from "./ProjectPage/ProjectPage";

function Main() {
  return (
    <div className="main">
      <Routes>
      <Route path="/" element={<Homepage />} />
          <Route path="/form" element={<Form />} />
        <Route path="/" element={<Layout />}>
          <Route path="/form" element={<Form />} />
          <Route path="/dashboard" element={<ProjectList />} />
          <Route path="/project-page" element={<ProjectPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Main;
