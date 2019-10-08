import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import withAuth from '../components/lib/withAuth';
import BaseTable from '../components/BaseTable';
import CreateInspection from '../components/CreateInspection';

const Inspection = ({ userCookie }) =>
  (
    <Layout user={userCookie}>
      <Head>
        <title>Car Inspections</title>
      </Head>
      <CreateInspection />
      <BaseTable entity="inspection" />
    </Layout>
  );

export default withAuth(Inspection);
