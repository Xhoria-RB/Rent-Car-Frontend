import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import BaseTable from '../components/BaseTable';
import withAuth from '../components/lib/withAuth';
import CreateBase from '../components/CreateBase';

const ENTITY = 'fuel_type';
const FuelType = ({ userCookie }) =>
  (
    <Layout user={userCookie}>
      <Head>
        <title>Fuel types</title>
      </Head>
      <CreateBase entity={ENTITY} title="Fuel Type" />
      <BaseTable entity={ENTITY} />
    </Layout>
  );

export default withAuth(FuelType);
