import React from 'react';
import Link from 'next/link';
import {
  Jumbotron, Row, Col, Button
} from 'reactstrap';

import Layout from './Layout';

function AccountPending() {
  return (
    <Layout light>
      <center style={{ margin: 'auto', width: '50%', marginTop: '30px' }}>
        <Jumbotron>
          <Row>
            <Col sm={{ size: 10, offset: 1 }}>
              {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
              <h1 className="text-center">You&apos;r account is been processed at this moment. Please come back soon. 😇</h1>
              <Button color="link"><Link href="/">Go back to homepage</Link></Button>
            </Col>
          </Row>
        </Jumbotron>
      </center>
    </Layout>

  );
}

export default AccountPending;
