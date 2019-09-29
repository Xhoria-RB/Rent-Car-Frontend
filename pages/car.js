import React from 'react';
import Head from 'next/head';
import axios from 'axios';
import Layout from '../components/Layout';
import withAuth from '../components/lib/withAuth';
import BaseTable from '../components/BaseTable';

const Cars = ({ userCookie, stars }) =>
  // const dbData = [
  //   {
  //     status: true,
  //     _id: '5d77e3ba974d5e86c83fa930',
  //     description: 'First car',
  //     chasisNO: 'chasis1212',
  //     motorNO: 'motor2121',
  //     plateNO: 'oias21293',
  //     carTypeID: '5d77e2b3974d5e86c83fa92f',
  //     brandID: '5d771e2c605dac82e313b757',
  //     modelID: '5d77e257974d5e86c83fa92e',
  //     fuelTypeID: '5d77226523511e03976c80ba',
  //     __v: 0
  //   },
  //   {
  //     status: true,
  //     _id: '5d7865d9e095578debff4705',
  //     description: 'Second car',
  //     chasisNO: 'chasis1212',
  //     motorNO: 'motor2121',
  //     plateNO: 'oias21293',
  //     carTypeID: '5d77e2b3974d5e86c83fa92f',
  //     brandID: '5d771e2c605dac82e313b757',
  //     modelID: '5d77e257974d5e86c83fa92e',
  //     fuelTypeID: '5d77226523511e03976c80ba',
  //     carStatus: 'Rented',
  //     __v: 0
  //   }
  // ];
  (
    <div>
      <Head>
        <title>Cars</title>
      </Head>
      <Layout user={userCookie}>
        <h1>{stars} hola</h1>
        <BaseTable url="car" />
      </Layout>
    </div>
  );

// Cars.getInitialProps = async () => {
//   const res = await axios.get('https://api.github.com/repos/zeit/next.js');
//   // const json = await JSON.parse(res);
//   console.log(res, '***************');

//   return { stars: res.data.stargazers_count };
// };

export default withAuth(Cars);
