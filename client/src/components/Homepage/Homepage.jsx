import React from "react";
import Login from "../Login/Login";
import homepageImage from "../../assets/images/homepage.png";
import meregeLogo from "../../assets/images/MeregeLogoCNome.png";
import lockImage from "../../assets/images/Lock.png";
import "../../App.css";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div
      className="homepage"
      style={{
        backgroundImage: `url(${homepageImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="homepage-login">
        <img
          className="homepage-logo"
          src={meregeLogo}
          alt="company logo"
        ></img>
        <div className="login-container">
          <img className="lock-icon" src={lockImage} alt="lock icon"></img>
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
