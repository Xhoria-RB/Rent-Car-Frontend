import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  Row, Col, Container, Button, FormGroup, Input
} from 'reactstrap';
import Layout from '../components/layout';
import withAuth from '../components/lib/withAuth';
import BaseTable from '../components/BaseTable';

const Rent = ({ userCookie }) => {
  const [params, setParams] = useState({});
  return (
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
          <Col sm={{ size: 6, offset: 7 }}>
            <FormGroup check inline>
              <Input type="text" name="search" placeholder="Search" onChange={(e) => setParams({ ...params, [e.target.name]: e.target.value })} />
            </FormGroup>
          </Col>
        </Row>
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
            <BaseTable entity="rent" params={params} />
          </Container>
        </div>
      </div>
    </Layout>
  );
};

export default withAuth(Rent);
