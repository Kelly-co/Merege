import "./App.css";
import { useEffect } from "react";
import Login from "./components/Login/Login";

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
  return <div className="App"><Login /></div>;
}

export default App;
