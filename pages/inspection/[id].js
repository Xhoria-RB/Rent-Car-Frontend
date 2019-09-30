import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import useAxios from 'axios-hooks';
import Layout from '../../components/Layout';
import { queries } from '../../utils/constants';

const SingleInspection = () => {
  const router = useRouter();
  const { id } = router.query;

  // eslint-disable-next-line no-unused-vars
  const [{ response, loading, err }, refetch] = useAxios(`${queries.inspection}/${id}`);

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <h1>SingleInspection</h1>
        {response && response.data && <pre>{JSON.stringify(response.data, null, 2)}</pre>}

      </Layout>
    </div>
  );
};

export default SingleInspection;
