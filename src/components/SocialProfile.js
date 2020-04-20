import React, { Component } from "react";

class SocialProfile extends Component {
    render(){
        console.log(this.props)
        const {link, image} = this.props.profile;
        return(
                <span>
                    <li className="list-inline-item"><a href ={link} target="_blank"><i className={image}></i></a></li>
                </span>
        );
    }
}

export default SocialProfile;