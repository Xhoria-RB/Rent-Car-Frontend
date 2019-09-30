import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import withAuth from '../components/lib/withAuth';
import BaseTable from '../components/BaseTable';

const Brand = ({ userCookie }) =>
  (
    <Layout user={userCookie}>
      <Head>
        <title>Brand</title>
      </Head>
      <BaseTable entity="brand" />
    </Layout>
  );

export default withAuth(Brand);
