import React from "react";

//create About component
const About = () => {
    return (
        <div className="about-container">
            <div className="about-content">
                <h1>About</h1>
                <p>
                    This is a simple React app that I built to learn React.
                </p>
                <p>
                    I built this app to learn React and to learn how to use React Router.
                </p>
                <p>
                    I used the following libraries:
                </p>
                <ul>
                    <li>React</li>
                    <li>React Router</li>
                    <li>React Bootstrap</li>
                    <li>React Fontawesome</li>
                </ul>
            </div>
        </div>
    );
}

export default About;