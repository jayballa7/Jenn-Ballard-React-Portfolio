import React from 'react';
import '../styles/Project.scss';

function Project(props) {
    return(
        <div className="project-wrapper">
                    <div className="img-div">
                        <img src = {props.img}/>
                    </div>
                       <div className="project-text">
                            <h5 className="project-header">{props.title}</h5>
                            <h3 className="description">{props.description}</h3>
                            <button className="btn"><a href = {props.url} target = "_blank">Go to App</a></button>
                   </div>
        </div>
    )
}
export default Project;