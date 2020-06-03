import React, {Component} from 'react';
import '../styles/Portfolio.scss';
import Header from '../components/Header.js';
import Project from './Project.js';
import Footer from './Footer.js';
import Pjson from '../utils/projects.json';
// import Images from '../components/Images.js';

class Portfolio extends React.Component {
    constructor() {
        super()
        this.state={

        }
        console.log(Pjson.portfolio);
    }


render() {
    return(
        <div className = "p-wrapper">
            <Header/>
            <div className = "projects-div">
                {Pjson.portfolio.map((port,index) => {
                    return (
                        <div className={"project-"+index}>
                    <Project 
                        image = {port.image}
                        title = {port.title}
                        description = {port.description}
                        url = {port.url}
                        repolink = {port.repolink}
                    />
                    </div>
                    )
                }
            )
        }
            </div>
            <Footer />
        </div>
    )
    }
}

export default Portfolio;