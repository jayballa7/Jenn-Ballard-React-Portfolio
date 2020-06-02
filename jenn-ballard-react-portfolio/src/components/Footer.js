import React from 'react';
import '../styles/Footer.scss';
import { SocialIcon } from 'react-social-icons';

function Footer() {
    return(
        <div className="footer-wrapper">
            <p className = "footer-connect">Connect</p>
            <SocialIcon url="https://github.com/jayballa7" target="_blank" bgColor="#9ee7f7"/>
            <SocialIcon url="https://www.linkedin.com/in/Jennifer-A-Ballard" target="_blank" bgColor="#9ee7f7"/>
        </div>
    )
}
export default Footer;