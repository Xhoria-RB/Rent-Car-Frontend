import React from 'react';
import Head from 'next/head';
import { Row, Col, Container } from 'reactstrap';
import Layout from '../components/layout';
import BaseTable from '../components/BaseTable';
import withAuth from '../components/lib/withAuth';
import CreateCar from '../components/CreateCar';

const Cars = ({ userCookie }) =>
  (
    <Layout user={userCookie}>
      <Head>
        <title>Cars</title>
      </Head>
      <div className="container my-3">
        <div className="row">
          <div className="col">
            <h1 className="text-center">Cars for rent</h1>
          </div>
        </div>
        <Row>
          <Col sm={{ size: 'auto', offset: 2 }}>
            <CreateCar />
          </Col>
        </Row>
        <div className="my-3">
          <p className="text-center">Actual cars availables</p>
          <Container>
            <BaseTable entity="car" />
          </Container>
        </div>
      </div>
    </Layout>
  );

export default withAuth(Cars);
