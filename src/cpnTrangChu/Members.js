import React from "react";
import "./../App.css";
import people1 from "./../images/Natasha.png";
import people2 from "./../images/John Harry.png";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";
class Members extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid padding">
          <div className="row welcome text-center">
            <div className="col-12">
              <h1 className="display-4">Meet our team members</h1>
            </div>
          </div>
        </div>
        <div className="container-fluid padding">
          <div className="row padding">
            <div className="col-md-4">
              <div>
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={people2}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>John Doe</CardTitle>
                    <CardText>
                    John Doe is a web developer, he worked for some technology
                    companies
                    </CardText>
                    <Button className="btn btn-danger">See profile</Button>
                  </CardBody>
                </Card>
              </div>
            </div>
            <div className="col-md-4">
            <Card>
                  <CardImg
                    top
                    width="100%"
                    src={people2}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>Peter</CardTitle>
                    <CardText>
                    Peter is a web designer, he worked in a Design House ABC
                    </CardText>
                    <Button className="btn btn-danger">See profile</Button>
                  </CardBody>
                </Card>
            </div>
            <div className="col-md-4">
            <Card>
                  <CardImg
                    top
                    width="100%"
                    src={people1}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>Natasha</CardTitle>
                    <CardText>
                    Natasha is a web designer, she has 5 years of experiences in UI/UX
                    </CardText>
                    <Button className="btn btn-danger">See profile</Button>
                  </CardBody>
                </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Members;
