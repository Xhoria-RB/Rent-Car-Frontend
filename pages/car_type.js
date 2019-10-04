import React from 'react';
import Head from 'next/head';
import isEmpty from 'lodash/isEmpty';
import Layout from '../components/Layout';
import withAuth from '../components/lib/withAuth';
import BaseTable from '../components/BaseTable';
import AuthenticationError from '../components/AuthenticationError';

const CarType = ({ userCookie }) =>
  (
    <Layout user={userCookie}>
      <Head>
        <title>Cars types</title>
      </Head>
      {isEmpty(userCookie) ? <AuthenticationError /> : <BaseTable entity="car_type" />}
    </Layout>
  );

export default withAuth(CarType);
