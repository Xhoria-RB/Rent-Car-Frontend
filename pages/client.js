import React, { useState } from 'react';
import Head from 'next/head';
import {
  Row, Col, Container, FormGroup, Input
} from 'reactstrap';
import Layout from '../components/layout';
import BaseTable from '../components/BaseTable';
import withAuth from '../components/lib/withAuth';
import CreateClient from '../components/CreateClient';


const Client = ({ userCookie }) => {
  const [params, setParams] = useState({});
  return (
    <Layout user={userCookie}>
      <Head>
        <title>Clients</title>
      </Head>
      <div className="container my-3">
        <div className="row">
          <div className="col">
            <h1 className="text-center">Clients</h1>
          </div>
        </div>
        <Row>
          <Col sm={{ size: 6, offset: 7 }}>
            <FormGroup check inline>
              <Input type="text" name="search" placeholder="Search" onChange={(e) => setParams({ ...params, [e.target.name]: e.target.value })} />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: 'auto', offset: 2 }}>
            <CreateClient />
          </Col>
        </Row>
        <div className="my-3">
          <p className="text-center">Our clients</p>
          <Container>
            <BaseTable entity="client" params={params} />
          </Container>
        </div>
      </div>
    </Layout>
  );
};
export default withAuth(Client);
