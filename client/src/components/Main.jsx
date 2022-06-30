import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import ProjectList from "../components/Dashboard/ProjectList";
import Form from "../components/Form/Form";

function Main() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/form" element={<Form />} />
          <Route path="/project" element={<ProjectList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Main;
