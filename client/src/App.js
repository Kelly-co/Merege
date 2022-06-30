import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import ProjectsContextProvider from "./contexts/ProjectsContext";
import Main from "./components/Main";


function App() {


  return (
    <div className="App">
      <ProjectsContextProvider>
        <Router>
          <Main/>
        </Router>
      </ProjectsContextProvider>
    </div >
  );
}

export default App;
