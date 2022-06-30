import { Outlet } from "react-router-dom"
import React, { useContext } from "react";
import { ProjectsContext } from "../contexts/ProjectsContext";


const Layout = () => {
    const { loading} =  useContext(ProjectsContext);

    return (
        <div className="layout">
            {(!loading) ? <div>loading</div> : <div> <Outlet /></div>}
        </div>
    )
}

export default Layout