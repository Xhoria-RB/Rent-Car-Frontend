import React from 'react';
import Head from 'next/head';
import { Container } from 'reactstrap';
import Layout from '../components/layout';
import withAuth from '../components/lib/withAuth';
import BaseTable from '../components/BaseTable';

const Employee = ({ userCookie }) =>
  (
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
        <div className="my-3">
          <p className="text-center">Our employees</p>
          <Container>
            <BaseTable entity="employee" />
          </Container>
        </div>
      </div>
    </Layout>
  );

export default withAuth(Employee);
