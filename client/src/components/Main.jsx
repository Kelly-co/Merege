import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import ProjectList from "./Dashboard/ProjectList";

function Main() {

    return (
        <div className="main">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/project" element={<ProjectList />} />
                </Route>
            </Routes>
        </div>
    );
}

export default Main;