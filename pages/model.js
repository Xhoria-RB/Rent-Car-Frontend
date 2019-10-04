import React from 'react';
import isEmpty from 'lodash/isEmpty';
import Head from 'next/head';
import Layout from '../components/Layout';
import withAuth from '../components/lib/withAuth';
import BaseTable from '../components/BaseTable';
import AuthenticationError from '../components/AuthenticationError';


const Model = ({ userCookie }) =>
  (
    <Layout user={userCookie}>
      <Head>
        <title>Car model</title>
      </Head>
      {isEmpty(userCookie) ? <AuthenticationError /> : <BaseTable entity="model" />}
    </Layout>
  );

export default withAuth(Model);
