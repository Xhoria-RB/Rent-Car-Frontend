import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import BaseTable from '../components/BaseTable';
import withAuth from '../components/lib/withAuth';
import CreateModel from '../components/CreateModel';


const Model = ({ userCookie }) =>
  (
    <Layout user={userCookie}>
      <Head>
        <title>Car model</title>
      </Head>
      <CreateModel />
      <BaseTable entity="model" />
    </Layout>
  );

export default withAuth(Model);
