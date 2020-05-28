import React, {Component} from 'react';
import '../styles/Portfolio.scss';
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
        <div>
            {Pjson.portfolio.map((port) => {
                return (
                <Project 
            // img = 'https://via.placeholder.com/150'
            title = {port.title}
            // description = 'App made with React'
            // url = 'https://newsflash-news-app.herokuapp.com/memberspage'
                />
            )
            })
            }
        </div>
    )
    }
}

export default Portfolio;