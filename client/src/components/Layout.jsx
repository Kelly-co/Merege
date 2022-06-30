import { Outlet } from "react-router-dom"
import React, { useContext } from "react";
import { ProjectsContext } from "../contexts/ProjectsContext";
import"../App.css";
import backgroundImage from "../assets/images/background.png";



const Layout = () => {
    const { loading} =  useContext(ProjectsContext);

    return (
        <div className="layout" style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: "no-repeat", backgroundSize:"cover" }}>
            {(!loading) ? <div>loading</div> : <Outlet />}
        </div>
    )
}

export default Layout