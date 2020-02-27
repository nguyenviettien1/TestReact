import React from "react";
import "./../App.css";


class ShowApp extends React.Component{
    render() {
        return (
            <div>
                <div className="container-fluid padding">
          <div className="row welcome text-center">
            <div className="col-12">
              <h1 className="display-4">Build your application</h1>
            </div>
            {/* Horizontal Rule */}
            <hr />
            <div className="col-12">
              <p>
                Welcome my Bootstrap 4 tutorials. Bootstrap is an open-source
                and free front-end library with HTML and CSS based design
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid padding">
          <div className="row text-center padding">
            <div className="col-xs-12 col-sm-6 col-md-4 ">
              <i className="fab fa-react" />
              <h3>REACT</h3>
              <p>Build the latest version of React</p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <i className="fab fa-bootstrap" />
              <h3>BOOTSTRAP</h3>
              <p>Build your Website and Front-end Application</p>
            </div>
            <div className="col-sm-12 col-md-4">
              <i className="fab fa-css3" />
              <h3>CSS3 , HTML5</h3>
              <p>Customize your web UI with Html5 and Css3</p>
            </div>
          </div>
          <hr className="my-4" />
        </div>
            </div>
            );
    }
}
export default ShowApp;