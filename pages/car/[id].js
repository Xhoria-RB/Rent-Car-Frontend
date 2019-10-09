import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import useAxios from 'axios-hooks';
import get from 'lodash/get';
import {
  Row, Col, Form, Container, Spinner, Card, CardHeader
} from 'reactstrap';
import Layout from '../../components/layout';
import { queries } from '../../utils/constants';
import RenderItem from '../../components/RenderItem';
import UpdateCar from '../../components/UpdateCar';

const SingleCar = () => {
  const router = useRouter();
  const { id } = router.query;

  // eslint-disable-next-line no-unused-vars
  const [{ response, loading, err }, refetch] = useAxios(`${queries.car}/${id}`);
  const transformer = (data) => ({
    // eslint-disable-next-line no-underscore-dangle
    id: data._id,
    brand: get(data, 'brandID.description', ''),
    model: get(data, 'modelID.description', ''),
    car_type: get(data, 'carTypeID.description'),
    fuel_type: get(data, 'fuelTypeID.description'),
    description: data.description,
    chasisNO: data.chasisNO,
    motorNO: data.motorNO,
    plateNO: data.plateNO,
    status: data.carStatus
  });
  const content = (response && response.data) && transformer(response.data);

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <h1 className="text-center my-3">SingleCar</h1>
        <UpdateCar />
        {content ? (
          <Container>
            <Row>
              <Col sm="12" md={{ size: 10, offset: 2 }}>
                <Form>
                  <Card className="my-5">
                    <CardHeader>Car</CardHeader>
                    <RenderItem data={content} />
                  </Card>
                </Form>
              </Col>
            </Row>
          </Container>
        ) : <center><Spinner style={{ width: '7rem', height: '7rem', margin: 'auto' }} color="dark" /></center>}

      </Layout>
    </div>
  );
};

export default SingleCar;
