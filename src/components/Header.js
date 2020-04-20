import React, { Component } from "react";
import profileImage from "../assets/profile.png";
import SOCIAL_PROFILES from "../data/socialProfiles";
import SocialProfile from "./SocialProfile";

class Header extends Component{
    render(){
        return(
            <div>
            <header className="header">
                <div className="container clearfix">                       
                    <img className="profile-image img-fluid float-left" src={profileImage} alt="Sudhir Gupta" />
                    <div className="profile-content float-left">
                        <h1 className="name">Sudhir Kumar Gupta</h1>
                        <h2 className="desc">Full Stack Developer</h2>   
                        <ul className="social list-inline">
                            {
                                SOCIAL_PROFILES.map(profile =>{
                                    return(
                                        <SocialProfile key= {profile.id} profile = {profile} />
                                    )
                                })
                            }
                         </ul> 
                    </div>
                    <a className="btn btn-cta-primary float-right" href="mailto:sudhirhitit@gmail.com" target="_blank"><i className="fa fa-paper-plane"></i> Contact Me</a>              
                </div>
            </header>
            </div>
        );
    }
}
export default Header;