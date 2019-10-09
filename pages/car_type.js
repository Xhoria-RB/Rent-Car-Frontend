import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import BaseTable from '../components/BaseTable';
import withAuth from '../components/lib/withAuth';
import CreateBase from '../components/CreateBase';

const ENTITY = 'car_type';
const CarType = ({ userCookie }) =>
  (
    <Layout user={userCookie}>
      <Head>
        <title>Cars types</title>
      </Head>
      <CreateBase entity={ENTITY} title="Car Type" />
      <BaseTable entity={ENTITY} />
    </Layout>
  );

export default withAuth(CarType);
