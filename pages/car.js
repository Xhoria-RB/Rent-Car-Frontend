import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import BaseTable from '../components/BaseTable';
import withAuth from '../components/lib/withAuth';
import CreateCar from '../components/CreateCar';

const Cars = ({ userCookie }) =>
  (
    <Layout user={userCookie}>
      <Head>
        <title>Cars</title>
      </Head>
      <CreateCar />
      <BaseTable entity="car" />
    </Layout>
  );

export default withAuth(Cars);
