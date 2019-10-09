import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import withAuth from '../components/lib/withAuth';
import UpdateProfile from '../components/UpdateProfile';


const Dashboard = ({ userCookie }) =>
  (
    <Layout user={userCookie}>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div>
        <h1>Hello</h1>
        <UpdateProfile />
      </div>
    </Layout>
  );

export default withAuth(Dashboard);
