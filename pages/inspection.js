import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import withAuth from '../components/lib/withAuth';
import BaseTable from '../components/BaseTable';

const Inspection = ({ userCookie }) =>
  (
    <Layout user={userCookie}>
      <Head>
        <title>Car Inspections</title>
      </Head>
      <BaseTable entity="inspection" />
    </Layout>
  );

export default withAuth(Inspection);
