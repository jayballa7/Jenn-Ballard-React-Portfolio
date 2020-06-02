import React, {Component} from 'react';
import '../styles/Portfolio.scss';
import Header from '../components/Header.js';
import Project from './Project.js';
import Pjson from '../utils/projects.json';

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
            <div>
                {Pjson.portfolio.map((port) => {
                    return (
                    <Project 
                        // img = 'https://via.placeholder.com/150'
                        title = {port.title}
                        description = {port.description}
                        url = {port.url}
                        repolink = {port.repolink}
                    />
                    )
                }
            )
        }
            </div>
        </div>
    )
    }
}

export default Portfolio;