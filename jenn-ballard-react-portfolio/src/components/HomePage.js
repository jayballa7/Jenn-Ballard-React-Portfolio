import React from 'react';
import '../styles/HomePage.scss';

function HomePage() {
    return(
        <div className="hp-wrapper">
                   <div className="about-box">About Me</div>
                   <div className="box2"></div>
                   <div className="contact-box">Contact Me</div>
                   <div className="name-box">
                        <h1 className = "jenn-logo">JENN BALLARD</h1>
                    </div>
                   <div className="portfolio-box">Portfolio</div>
                   <div className="links-box">Connect</div>
                   <div className="resume-box">Resume</div>
        </div>
    )
}
export default HomePage;