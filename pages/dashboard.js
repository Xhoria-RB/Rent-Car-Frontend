import React from 'react';
import Head from 'next/head';
import { Jumbotron } from 'reactstrap';
import Layout from '../components/layout';
import withAuth from '../components/lib/withAuth';
import UpdateProfile from '../components/UpdateProfile';


const Dashboard = ({ userCookie }) =>
  (
    <Layout user={userCookie}>
      <Head>
        <title>Dashboard</title>
      </Head>
      <center style={{ margin: 'auto', width: '50%', marginTop: '30px' }}>
        <Jumbotron>
          <div>
            <h1>Hello</h1>
            <UpdateProfile user={userCookie} />
          </div>
        </Jumbotron>
      </center>
    </Layout>
  );

export default withAuth(Dashboard);
