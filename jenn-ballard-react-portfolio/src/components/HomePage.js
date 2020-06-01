import React from 'react';
import { Link } from "react-router-dom";
import '../styles/HomePage.scss';
import { SocialIcon } from 'react-social-icons';

function HomePage() {
    return(
        <div className="hp-wrapper">
                   <div className="about-box boxEffects">
                       <p className = "hp-text">About Me</p>
                       <p className = "hide-a"><Link to ='/about' target="__blank" className = "hp-link">Get to know me</Link></p>
                    </div>
                   <div className="box2 boxEffects"></div>
                   <div className="contact-box boxEffects">
                       <p className = "hp-text">Contact Me</p>
                       <p className = "hide-a">Get in touch with me</p>
                       </div>
                   <div className="name-box">
                        <h1 className = "jenn-logo">JENN BALLARD</h1>
                    </div>
                   <div className="portfolio-box boxEffects">
                       <p className = "hp-text">Portfolio</p>
                       <p className = "hide-a"><Link to ='/portfolio' target="__blank" className = "hp-link">Check out my work</Link></p>
                    </div>
                   <div className="links-box">
                        <SocialIcon url="https://github.com/jayballa7" target="__blank" bgColor="#b547d6"/>
                        <p className = "social-text">Github</p>
                        <SocialIcon url="https://www.linkedin.com/in/Jennifer-A-Ballard" target="__blank" bgColor="#b547d6"/>
                        <p className = "social-text">LinkedIn</p>
                    </div>
                   <div className="resume-box boxEffects">
                       <p className = "hp-text">Resume</p>
                       <p className = "hide-a">Need a dev?</p>
                    </div>
        </div>
    )
}
export default HomePage;