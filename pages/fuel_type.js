import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import withAuth from '../components/lib/withAuth';
import BaseTable from '../components/BaseTable';

const FuelType = ({ userCookie }) =>
  (
    <Layout user={userCookie}>
      <Head>
        <title>Fuel types</title>
      </Head>
      <BaseTable entity="fuel_type" />
    </Layout>
  );

export default withAuth(FuelType);
