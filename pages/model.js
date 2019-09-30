import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import withAuth from '../components/lib/withAuth';
import BaseTable from '../components/BaseTable';

const Model = ({ userCookie }) =>
  (
    <Layout user={userCookie}>
      <Head>
        <title>Car model</title>
      </Head>
      <BaseTable entity="model" />
    </Layout>
  );

export default withAuth(Model);
