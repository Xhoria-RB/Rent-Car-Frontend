import React from 'react';
import Head from 'next/head';
import { Row, Col, Container } from 'reactstrap';
import Layout from '../components/layout';
import BaseTable from '../components/BaseTable';
import withAuth from '../components/lib/withAuth';
import CreateBase from '../components/CreateBase';

const ENTITY = 'brand';
const Brand = ({ userCookie }) =>
  (
    <Layout user={userCookie}>
      <Head>
        <title>Brands</title>
      </Head>
      <div className="container my-3">
        <div className="row">
          <div className="col">
            <h1 className="text-center">Brands</h1>
          </div>
        </div>
        <Row>
          <Col sm={{ size: 'auto', offset: 2 }}>
            <CreateBase entity={ENTITY} title="Brand" />
          </Col>
        </Row>
        <div className="my-3">
          <p className="text-center">Actual brands availables</p>
          <Container>
            <BaseTable entity={ENTITY} />
          </Container>
        </div>
      </div>
    </Layout>
  );


export default withAuth(Brand);
