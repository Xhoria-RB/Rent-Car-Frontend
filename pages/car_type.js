import React, { useState } from 'react';
import Head from 'next/head';
import {
  Row, Col, Container, FormGroup, Input
} from 'reactstrap';
import Layout from '../components/layout';
import BaseTable from '../components/BaseTable';
import withAuth from '../components/lib/withAuth';
import CreateBase from '../components/CreateBase';

const ENTITY = 'car_type';
const CarType = ({ userCookie }) => {
  const [params, setParams] = useState({});
  return (
    <Layout user={userCookie}>
      <Head>
        <title>Cars types</title>
      </Head>
      <div className="container my-3">
        <div className="row">
          <div className="col">
            <h1 className="text-center">Car Types</h1>
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
            <CreateBase entity={ENTITY} title="Car Type" />
          </Col>
        </Row>
        <div className="my-3">
          <p className="text-center">Actual car types availables</p>
          <Container>
            <BaseTable entity={ENTITY} params={params} />
          </Container>
        </div>
      </div>
    </Layout>
  );
};

export default withAuth(CarType);
