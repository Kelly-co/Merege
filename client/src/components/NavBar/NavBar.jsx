import React from "react";
import "./NavBar.css"
import { Link } from "react-router-dom";



//create navbar component
const NavBar = () => {
    return (
        <div className="navbar-container">
            <div>
                <Link to="/"><div className='logo'>LOGO{/*<Logo />*/}</div></Link>
            </div>
            <div>
                <button>
                    <Link to="/about">About</Link>
                </button>
            </div>
        </div>
    );
    }

    export default NavBar;