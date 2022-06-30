import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ProjectsContextProvider from "./contexts/ProjectsContext.js";
import Main from "./components/Main";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <ProjectsContextProvider>
        <Router>
          <NavBar />
          <Main />
          <Login />
        </Router>
      </ProjectsContextProvider>
    </div>
  );
}

export default App;
