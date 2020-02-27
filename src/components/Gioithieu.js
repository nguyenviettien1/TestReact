import React from "react";

class Gioithieu extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col-md-12">
          <div className="panel panel-default">
            <div
              className="panel-heading"
              style={{ backgroundColor: "#337AB7", color: "white" }}
            >
              <h2 style={{ marginTop: "0px", marginBottom: "0px" }}>
                Giới thiệu
              </h2>
            </div>
            <h4>
              Get recognized for your knowledge with a certificate of completion
              from the MIT Sloan School of Management, one of the world's
              leading business schools.1 This program also counts towards an MIT
              Sloan Executive Certificate, which you can earn upon completion of
              four programs; three from your chosen certificate track and one
              completed in-person.
            </h4>
           <h4>
              The overall quality of the program was exceptional. I especially
              enjoyed the supplementary materials provided at the end of each
              module. The videos were easy to understand and well laid out. I
              would recommend this course to a colleague for sure. Understanding
              the business value of technologies such as AI is essential to
              staying ahead of the competition. This course allowed our company
              to take the next step in terms of creating custom AI and ML
              solutions for customers looking to expand their existing
              applications.
            </h4>
          </div>
        </div>
      </div>
    );
  }
}
export default Gioithieu;
