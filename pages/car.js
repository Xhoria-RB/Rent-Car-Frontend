import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import withAuth from '../components/lib/withAuth';
import BaseTable from '../components/BaseTable';

const Cars = ({ userCookie }) =>
  (
    <div>
      <Layout user={userCookie}>
        <Head>
          <title>Cars</title>
        </Head>
        <BaseTable entity="car" />
      </Layout>
    </div>
  );

export default withAuth(Cars);
