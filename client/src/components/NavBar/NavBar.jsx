import React from "react";
import "./NavBar.css"
import { Link } from "react-router-dom";
import {Logo} from "../../assets/svg";


//create navbar component
const NavBar = () => {
    return (
        <div className="navbar-container">
            <div className="logo">
                <div className='logo'><Logo /></div>
            </div>
            <div className="about">
                <button className="button">
                    <Link to="/about">About</Link>
                </button>
            </div>
        </div>
    );
    }

    export default NavBar;