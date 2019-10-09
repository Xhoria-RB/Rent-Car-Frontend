import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  Row, Col, Container, Button
} from 'reactstrap';
import Layout from '../components/layout';
import withAuth from '../components/lib/withAuth';
import BaseTable from '../components/BaseTable';

const Rent = ({ userCookie }) =>
  (
    <Layout user={userCookie}>
      <Head>
        <title>Rents</title>
      </Head>
      <div className="container my-3">
        <div className="row">
          <div className="col">
            <h1 className="text-center">Rents</h1>
          </div>
        </div>
        <Row>
          <Col sm={{ size: 'auto', offset: 2 }}>
            <p>To create a rent you <span><bold>Must</bold></span> create an inspection first</p>
            <Link href="/inspection">
              <Button>Inspections</Button>
            </Link>
          </Col>
        </Row>
        <div className="my-3">
          <p className="text-center">Latest rents</p>
          <Container>
            <BaseTable entity="rent" />
          </Container>
        </div>
      </div>
    </Layout>
  );


export default withAuth(Rent);
