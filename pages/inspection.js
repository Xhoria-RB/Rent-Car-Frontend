import React from 'react';
import Head from 'next/head';
import isEmpty from 'lodash/isEmpty';
import Layout from '../components/Layout';
import withAuth from '../components/lib/withAuth';
import BaseTable from '../components/BaseTable';
import AuthenticationError from '../components/AuthenticationError';

const Inspection = ({ userCookie }) =>
  (
    <Layout user={userCookie}>
      <Head>
        <title>Car Inspections</title>
      </Head>
      {isEmpty(userCookie) ? <AuthenticationError /> : <BaseTable entity="inspection" />}
    </Layout>
  );

export default withAuth(Inspection);
