import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import BaseTable from '../components/BaseTable';
import withAuth from '../components/lib/withAuth';
import CreateBase from '../components/CreateBase';

const ENTITY = 'brand';
const Brand = ({ userCookie }) =>
  (
    <Layout user={userCookie}>
      <Head>
        <title>Brand</title>
      </Head>
      <CreateBase entity={ENTITY} title="Brand" />
      <BaseTable entity={ENTITY} />
    </Layout>
  );

export default withAuth(Brand);
