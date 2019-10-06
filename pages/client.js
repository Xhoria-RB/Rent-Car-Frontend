import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import withAuth from '../components/lib/withAuth';
import BaseTable from '../components/BaseTable';

const Client = ({ userCookie }) =>
  (
    <Layout user={userCookie}>
      <Head>
        <title>Clients</title>
      </Head>
      <BaseTable entity="client" />
    </Layout>
  );

export default withAuth(Client);
