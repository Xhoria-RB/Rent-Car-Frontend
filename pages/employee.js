import React, { useState } from 'react';
import Head from 'next/head';
import {
  Container, Row, FormGroup, Input, Col
} from 'reactstrap';
import Layout from '../components/layout';
import withAuth from '../components/lib/withAuth';
import BaseTable from '../components/BaseTable';

const Employee = ({ userCookie }) => {
  const [params, setParams] = useState({});
  return (
    <Layout user={userCookie}>
      <Head>
        <title>Employees</title>
      </Head>
      <div className="container my-3">
        <div className="row">
          <div className="col">
            <h1 className="text-center">Employees</h1>
          </div>
        </div>
        <Row>
          <Col sm={{ size: 6, offset: 7 }}>
            <FormGroup check inline>
              <Input type="text" name="search" placeholder="Search" onChange={(e) => setParams({ ...params, [e.target.name]: e.target.value })} />
            </FormGroup>
          </Col>
        </Row>
        <div className="my-3">
          <p className="text-center">Our employees</p>
          <Container>
            <BaseTable entity="employee" params={params} />
          </Container>
        </div>
      </div>
    </Layout>
  );
};

export default withAuth(Employee);
