import React from "react";
import "./../App.css";
import icon12 from "./../images/icon12.jpg";

class Advisory extends React.Component {
  render() {
    return (
      <div className="container-fluid padding">
        <div className="row padding">
          <div className="col-md-12 col-lg-6">
            <h2>If you build it...</h2>
            <p>
              A practical grounding in artificial intelligence (AI) and its
              business applications, equipping you with the knowledge and
              confidence you need to transform your organization into an
              innovative, efficient, and sustainable company of the future.
            </p>
            <p>
              The ability to lead informed, strategic decision-making and
              augment business performance by integrating key AI management and
              leadership insights into the way your organization operates.
            </p>
            <p>
              A powerful dual-perspective from two MIT schools – the MIT Sloan
              School of Management and the MIT Computer Science and Artificial
              Intelligence Laboratory – offering you a sound conceptual
              understanding of AI technologies through a business lens.
            </p>
            
            <br />
          </div>
          <div className="col-lg-6">
            <img src={icon12} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
export default Advisory;
