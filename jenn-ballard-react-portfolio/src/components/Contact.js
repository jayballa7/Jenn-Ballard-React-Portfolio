import React from 'react';
import '../styles/Contact.scss';
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";


function Contact() {
    return(
        <div className="contact-wrapper">
            <Header />
            <div className = "contact-card">
            </div>
            <Footer />
        </div>
    )
}
export default Contact;