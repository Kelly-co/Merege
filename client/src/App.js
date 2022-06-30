import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ProjectsContextProvider from "./contexts/ProjectsContext";
import Main from "./components/Main";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <ProjectsContextProvider>
        <Router>
          <NavBar />
          <Main />
        </Router>
      </ProjectsContextProvider>
    </div>
  );
}

export default App;
