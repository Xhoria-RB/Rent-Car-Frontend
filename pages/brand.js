import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import BaseTable from '../components/BaseTable';
import withAuth from '../components/lib/withAuth';
import CreateBrand from '../components/CreateBrand';

const Brand = ({ userCookie }) =>
  (
    <Layout user={userCookie}>
      <Head>
        <title>Brand</title>
      </Head>
      <CreateBrand />
      <BaseTable entity="brand" />
    </Layout>
  );

export default withAuth(Brand);
