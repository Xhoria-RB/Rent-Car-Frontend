import React from 'react';
import Head from 'next/head';
import { Row, Col, Container } from 'reactstrap';
import Layout from '../components/layout';
import BaseTable from '../components/BaseTable';
import withAuth from '../components/lib/withAuth';
import CreateModel from '../components/CreateModel';


const Model = ({ userCookie }) =>
  (
    <Layout user={userCookie}>
      <Head>
        <title>Models</title>
      </Head>
      <div className="container my-3">
        <div className="row">
          <div className="col">
            <h1 className="text-center">Models of cars</h1>
          </div>
        </div>
        <Row>
          <Col sm={{ size: 'auto', offset: 2 }}>
            <CreateModel />
          </Col>
        </Row>
        <div className="my-3">
          <p className="text-center">Actual models availables</p>
          <Container>
            <BaseTable entity="model" />
          </Container>
        </div>
      </div>
    </Layout>
  );


export default withAuth(Model);
