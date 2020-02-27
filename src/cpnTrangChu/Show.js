import React from "react";
import "./../App.css";

import icon13 from "./../images/icon13.jpg";


class Show extends React.Component{
    render() {
        return (
            <div className="container-fluid padding">
          <div className="row padding">
            <div className="col-md-12 col-lg-6">
              <h2>Our vision</h2>
              <p>
              Get recognized for your knowledge with a certificate of completion
              from the MIT Sloan School of Management, one of the world's
              leading business schools.1 This program also counts towards an MIT
              Sloan Executive Certificate, which you can earn upon completion of
              four programs; three from your chosen certificate track and one
              completed in-person.
            </p>
            <p>
              The overall quality of the program was exceptional. I especially
              enjoyed the supplementary materials provided at the end of each
              module. The videos were easy to understand and well laid out. I
              would recommend this course to a colleague for sure. Understanding
              the business value of technologies such as AI is essential to
              staying ahead of the competition. This course allowed our company
              to take the next step in terms of creating custom AI and ML
              solutions for customers looking to expand their existing
              applications.
            </p>
              <br />
            </div>
            <div className="col-lg-6">
              <img src={icon13} className="img-fluid" alt="" />
            </div>
          </div>
          <hr className="my-4" />
        </div>
            );
    }
}
export default Show;