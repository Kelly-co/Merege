import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import ProjectList from "../components/Dashboard/ProjectList";
<<<<<<< HEAD
import Homepage from "./Homepage/Homepage";
import Form from "./Form/Form";
=======
import Form from "../components/Form/Form";
>>>>>>> 93057dc4ce2553f09570c8209cc8e21f9ef76478

function Main() {
  return (
    <div className="main">
      <Routes>
      <Route path="/" element={<Homepage />} />
          <Route path="/form" element={<Form />} />
        <Route path="/" element={<Layout />}>
          <Route path="/form" element={<Form />} />
          <Route path="/project" element={<ProjectList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Main;
