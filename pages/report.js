import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import withAuth from '../components/lib/withAuth';
import NewReport from '../components/Report';

const Report = ({ userCookie }) =>
  (
    <Layout user={userCookie}>
      <Head>
        <title>Reports</title>
      </Head>
      <NewReport />
    </Layout>
  );

export default withAuth(Report);
