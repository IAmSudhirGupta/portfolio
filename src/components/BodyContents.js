import React, { Component } from "react";
import ProfileSummary from "./ProfileSummary";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import Skills from "./Skills";

class BodyContents extends Component{
    render(){
        return (
                <div className="container sections-wrapper">
                    <div className="row">
                        <div className="primary col-lg-8 col-12">
                            <ProfileSummary />
                            <WorkExperience />
                            <Projects />
                        </div>
                        
                        <div className="secondary col-lg-4 col-12">
                        <aside className="info aside section">
                            <div className="section-inner">
                                <h2 className="heading sr-only">Basic Information</h2>
                                <div className="content">
                                    <ul className="list-unstyled">
                                        <li><i className="fa fa-map-marker-alt"></i><span className="sr-only">Location:</span>Bengaluru, KA, India</li>
                                        <li><i className="fa fa-envelope"></i><span className="sr-only">Email:</span><a href="mailto:sudhirhitit@gmail.com">sudhirhitit@gmail.com</a></li>
                                        {/* <li><i className="fa fa-link"></i><span className="sr-only">Website:</span><a href="##">https://www.website.com</a></li> */}
                                    </ul>
                                </div>
                            </div>
                        </aside>

                        <Skills />
                        
                        <aside className="education aside section">
                            <div className="section-inner">
                                <h2 className="heading">Education</h2>
                                <div className="content">
                                    <div className="item">                      
                                        <h3 className="title"><i className="fa fa-graduation-cap"></i> B.Tech</h3>
                                        <h4 className="university">Haldia Institute of Technology, Haldia, West Bengal <span className="year">(2012-2015)</span></h4>
                                    </div>
                                    <div className="item">
                                        <h3 className="title"><i className="fa fa-graduation-cap"></i> Diploma in IT</h3>
                                        <h4 className="university">Government Polytechnic, Dhanbad, Jharkhand <span className="year">(2008-2011)</span></h4>
                                    </div>
                                </div>
                            </div>
                        </aside>
                                    
                        <aside className="languages aside section">
                            <div className="section-inner">
                                <h2 className="heading">Languages</h2>
                                <div className="content">
                                    <ul className="list-unstyled">
                                        <li className="item">
                                            <span className="title"><strong>English:</strong></span>
                                            <span className="level">Professional Proficiency <br className="visible-sm visible-xs"/><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i><i className="fa fa-star"></i> <i className="fa fa-star-half"></i></span>
                                        </li>
                                        <li className="item">
                                            <span className="title"><strong>Hindi:</strong></span>
                                            <span className="level">Native Speaker <br className="visible-xs"/><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                        </div>
                    </div>
                </div>
        );
    }
}

export default BodyContents;