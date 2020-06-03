import React from 'react';
import '../styles/Project.scss';
import Images from '../components/Images.js';

function Project(props) {
    return(
        <div className="project-wrapper">
                    <div className="img-div">
                        <img src = {Images[props.image]}/>
                    </div>
                       <div className="project-text">
                            <h2 className="project-header">{props.title}</h2>
                            <h4 className="description">{props.description}</h4>
                            <button className="btn"><a href = {props.url} target = "_blank">Go to App</a></button>
                            <button className="btn"><a href = {props.repolink} target = "_blank">Go to Repository</a></button>
                   </div>
        </div>
    )
}
export default Project;