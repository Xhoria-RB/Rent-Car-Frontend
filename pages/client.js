import React from 'react';
import Head from 'next/head';
import isEmpty from 'lodash/isEmpty';
import Layout from '../components/Layout';
import withAuth from '../components/lib/withAuth';
import BaseTable from '../components/BaseTable';
import AuthenticationError from '../components/AuthenticationError';

const Client = ({ userCookie }) =>
  (
    <Layout user={userCookie}>
      <Head>
        <title>Clients</title>
      </Head>
      {isEmpty(userCookie) ? <AuthenticationError /> : <BaseTable entity="client" />}
    </Layout>
  );

export default withAuth(Client);
