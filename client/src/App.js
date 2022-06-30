import "./App.css";
import { useEffect } from "react";

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
  return <div className="App"></div>;
}

export default App;
