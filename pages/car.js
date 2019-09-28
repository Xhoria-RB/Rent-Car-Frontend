import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import withAuth from '../components/lib/withAuth';
import BaseTable from '../components/BaseTable';

const Cars = ({ userCookie }) => {
  const dbData = [
    {
      status: true,
      _id: '5d77e3ba974d5e86c83fa930',
      description: 'First car',
      chasisNO: 'chasis1212',
      motorNO: 'motor2121',
      plateNO: 'oias21293',
      carTypeID: '5d77e2b3974d5e86c83fa92f',
      brandID: '5d771e2c605dac82e313b757',
      modelID: '5d77e257974d5e86c83fa92e',
      fuelTypeID: '5d77226523511e03976c80ba',
      __v: 0
    },
    {
      status: true,
      _id: '5d7865d9e095578debff4705',
      description: 'Second car',
      chasisNO: 'chasis1212',
      motorNO: 'motor2121',
      plateNO: 'oias21293',
      carTypeID: '5d77e2b3974d5e86c83fa92f',
      brandID: '5d771e2c605dac82e313b757',
      modelID: '5d77e257974d5e86c83fa92e',
      fuelTypeID: '5d77226523511e03976c80ba',
      carStatus: 'Rented',
      __v: 0
    }
  ];
  return (
    <div>
      <Head>
        <title>Cars</title>
      </Head>
      <Layout user={userCookie}>
        <BaseTable resData={dbData} url="/car" />
      </Layout>
    </div>
  );
};

export default withAuth(Cars);