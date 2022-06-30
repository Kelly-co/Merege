import { Outlet } from "react-router-dom"
import React, { useContext } from "react";
import { ProjectsContext } from "../contexts/ProjectsContext";
import"../App.css"


const Layout = () => {
    const { loading} =  useContext(ProjectsContext);

    return (
        <div className="layout">
            {(!loading) ? <div>loading</div> : <Outlet />}
        </div>
    )
}

export default Layout