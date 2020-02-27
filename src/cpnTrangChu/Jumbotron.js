import React from "react";
import { Jumbotron, Container } from "reactstrap";

const Example = props => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Web test ReactJS</h1>
          <p className="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
          <button type="button" className="btn btn-outline-success">
            Buy a host
          </button>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Example;
