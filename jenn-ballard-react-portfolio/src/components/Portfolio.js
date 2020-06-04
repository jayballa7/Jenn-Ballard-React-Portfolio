import React, {Component} from 'react';
import '../styles/Portfolio.scss';
import Header from '../components/Header.js';
import Project from './Project.js';
import Footer from './Footer.js';
import Pjson from '../utils/projects.json';

function Portfolio() {
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
                })}
            </div>
            
            <div className = "port-footer">
                <Footer />
            </div>
        </div>
    )
}


export default Portfolio;