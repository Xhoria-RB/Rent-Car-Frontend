import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <Layout>
      <h1>Hello world</h1>
    </Layout>
  </div>
);

export default Home;
