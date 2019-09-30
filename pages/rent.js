import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import withAuth from '../components/lib/withAuth';
import BaseTable from '../components/BaseTable';

const Rent = ({ userCookie }) =>
  (
    <Layout user={userCookie}>
      <Head>
        <title>Car rents</title>
      </Head>
      <BaseTable entity="rent" />
    </Layout>
  );

export default withAuth(Rent);
