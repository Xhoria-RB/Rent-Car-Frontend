import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import withAuth from '../components/lib/withAuth';
import BaseTable from '../components/BaseTable';

const CarType = ({ userCookie }) =>
  (
    <Layout user={userCookie}>
      <Head>
        <title>Cars types</title>
      </Head>
      <BaseTable entity="car_type" />
    </Layout>
  );

export default withAuth(CarType);
