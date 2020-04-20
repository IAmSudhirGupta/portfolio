import React from "react";

class Project extends React.Component{
    
    render(){
        const { title, description, image} = this.props.project;
        return(
            <div style = {{ display: 'inline-block', width: 400, margin: 10}}>
                <h3>{title}</h3>
                <img src={image} alt= {title} style ={{ height: 200, width: 300}} />
                <p>{description}</p>
            </div>
        );
    }
}

export default Project;