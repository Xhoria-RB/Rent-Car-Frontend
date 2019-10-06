import React from 'react';
import Link from 'next/link';
import {
  Jumbotron, Row, Col, Button
} from 'reactstrap';

import Layout from './Layout';
import Login from './Login';

function AuthenticationError() {
  return (
    <Layout light>
      <center style={{ margin: 'auto', width: '50%', marginTop: '30px' }}>
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
              <Row>
                <Button color="link" className="mx-5"><Link href="/">Go back to homepage</Link></Button><Login />
              </Row>
            </Col>
          </Row>
        </Jumbotron>
      </center>
    </Layout>

  );
}

export default AuthenticationError;
