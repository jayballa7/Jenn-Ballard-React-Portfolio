// import React from 'react';
// import '../styles/Contact.scss';
// import Header from "../components/Header.js";
// import Footer from "../components/Footer.js";


// function Contact() {
//     return(
//         <div className="contact-wrapper">
//             <Header />
//             <div className = "moonbox">
//                 <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" className = "moon" alt=""></img>
//             </div>
//             <div className = "contact-card">
//                 <h1>Contact Information</h1>
//                 <p>Phone Number: 425-443-2792</p>
//                 <p>Email: jenn_ballard7@hotmail.com</p>
//                 <p>Located in Renton, Washington</p>
//             </div>
//             <div className = "contact-footer">
//                 <Footer />
//             </div>
//         </div>
//     )
// }
// export default Contact;

import React from 'react';
import '../styles/Contact.scss';
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";


function Contact() {
    return(
        <div className="contact-wrapper">
            <Header />
            <div className="contact-content">
                <div className = "moonbox">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" className = "moon" alt=""></img>
                </div>
                <div className = "contact-card">
                    <h2>Contact Information</h2>
                        <div className="separator"></div> 
                    <h3>Jennifer Ballard</h3>
                    <p>Phone Number: 425-443-2792</p>
                    <p>Email: jenn_ballard7@hotmail.com</p>
                    <p>Located in Renton, Washington</p>
                </div>
                <div className = "contact-footer">
                    <Footer />
                </div>
            </div>
        </div>
    )
}
export default Contact;