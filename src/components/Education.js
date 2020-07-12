import React from "react";

const Education = () =>{
    return (
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
    )
}
export default Education;