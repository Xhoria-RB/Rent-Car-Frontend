import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import withAuth from '../components/lib/withAuth';
import BaseTable from '../components/BaseTable';

const Employee = ({ userCookie }) =>
  (
    <Layout user={userCookie}>
      <Head>
        <title>Employees</title>
      </Head>
      <BaseTable entity="employee" />
    </Layout>
  );

export default withAuth(Employee);
