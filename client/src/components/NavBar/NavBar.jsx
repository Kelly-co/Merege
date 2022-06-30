import React from "react";
import "./NavBar.css"
import { Link, BrowserRouter as Router } from "react-router-dom";
import { Logo } from '../../assets/svg'



//create navbar component
const NavBar = () => {
    return (
        <div className="navbar-container">
            <div>
                <Link to="/"><div className='logo'><Logo /></div></Link>
            </div>
        </div>
    );
    }

    export default NavBar;