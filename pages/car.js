import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import withAuth from '../components/lib/withAuth';
import BaseTable from '../components/BaseTable';

const Cars = ({ userCookie }) =>
  (
    <Layout user={userCookie}>
      <Head>
        <title>Cars</title>
      </Head>
      <BaseTable entity="car" />
    </Layout>
  );

export default withAuth(Cars);
