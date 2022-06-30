import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ProjectsContextProvider from "./contexts/ProjectsContext";
import Main from "./components/Main";
import NavBar from "./components/NavBar/NavBar";

import Form from "./components/Form/Form.jsx";
import Homepage from "./components/Homepage/Homepage.jsx";

function App() {
  return (
    <div className="App">
      <ProjectsContextProvider>
        <Router>
          <NavBar />
          <Main />
          <Homepage />
          <Form />
        </Router>
      </ProjectsContextProvider>
    </div>
  );
}

export default App;
