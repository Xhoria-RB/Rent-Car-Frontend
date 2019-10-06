import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import BaseTable from '../components/BaseTable';
import withAuth from '../components/lib/withAuth';
import CreateClient from '../components/CreateClient';


const Client = ({ userCookie }) =>
  (
    <Layout user={userCookie}>
      <Head>
        <title>Clients</title>
      </Head>
      <CreateClient />
      <BaseTable entity="client" />
    </Layout>
  );

export default withAuth(Client);
