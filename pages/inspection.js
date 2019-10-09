import React from 'react';
import Head from 'next/head';
import { Row, Col, Container } from 'reactstrap';
import Layout from '../components/layout';
import withAuth from '../components/lib/withAuth';
import BaseTable from '../components/BaseTable';
import CreateInspection from '../components/CreateInspection';

const Inspection = ({ userCookie }) =>
  (
    <Layout user={userCookie}>
      <Head>
        <title>Inspections</title>
      </Head>
      <div className="container my-3">
        <div className="row">
          <div className="col">
            <h1 className="text-center">Inspections</h1>
          </div>
        </div>
        <Row>
          <Col sm={{ size: 'auto', offset: 2 }}>
            <CreateInspection />
          </Col>
        </Row>
        <div className="my-3">
          <p className="text-center">Latest inspections</p>
          <Container>
            <BaseTable entity="inspection" />
          </Container>
        </div>
      </div>
    </Layout>
  );

export default withAuth(Inspection);
