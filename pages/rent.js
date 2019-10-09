import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import withAuth from '../components/lib/withAuth';
import BaseTable from '../components/BaseTable';

const Rent = ({ userCookie }) =>
  (
    <Layout user={userCookie}>
      <Head>
        <title>Car rents</title>
      </Head>
      <p>To create a rent you <span><bold>Must</bold></span> create an inspection first</p>
      <Link href="/inspection">
        <button type="button">Inspections</button>
      </Link>
      <BaseTable entity="rent" />
    </Layout>
  );

export default withAuth(Rent);
