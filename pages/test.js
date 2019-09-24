import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import BaseTable from '../components/BaseTable';

const Test = () => (
  <div>
    <Head>
      <title>Test</title>
    </Head>
    <Layout>
      <BaseTable />
    </Layout>
  </div>
);

export default Test;
