import React from 'react';
import {
  Jumbotron, Row, Col
} from 'reactstrap';

function AuthenticationError() {
  return (
    <Jumbotron>
      <Row>
        <Col sm={{ size: 6, offset: 3 }}>
          <img
            style={{ width: '60%', height: 'auto' }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Stop.svg/500px-Stop.svg.png"
            className="img-fluid mx-auto d-block"
            alt="stop"
          />
          <h1 className="text-center">AUTHENTICATION REQUIRED</h1>
        </Col>
      </Row>

    </Jumbotron>
  );
}

export default AuthenticationError;
