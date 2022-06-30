import "./App.css";
import { useEffect } from "react";
import ProjectPage from "./components/ProjectPage/ProjectPage";

function App() {
  useEffect(() => {
    fetch("/projects").then((res) => {
      if (res.ok) {
        return res.json().then((data) => {
          console.log(data);
        });
      }
    });
  }, []);
  return (
    <div className="App">
      <ProjectPage />
    </div>
  );
}

export default App;
