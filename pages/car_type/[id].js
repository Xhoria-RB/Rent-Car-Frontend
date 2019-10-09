import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import useAxios from 'axios-hooks';
import {
  Row, Col, Form, Container, Spinner, Card, CardHeader
} from 'reactstrap';
import Layout from '../../components/layout';
import { queries } from '../../utils/constants';
import RenderItem from '../../components/RenderItem';
import UpdateBase from '../../components/UpdateBase';

const CarType = () => {
  const router = useRouter();
  const { id } = router.query;

  // eslint-disable-next-line no-unused-vars
  const [{ response, loading, err }, refetch] = useAxios(`${queries.car_type}/${id}`);
  const transformer = (data) => ({
    // eslint-disable-next-line no-underscore-dangle
    id: data._id,
    description: data.description
  });
  const content = (response && response.data) && transformer(response.data);

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <h1 className="text-center my-3">SingleCarType</h1>
        <UpdateBase entity={queries.car_type} title="Car Type" />
        {content ? (
          <Container>
            <Row>
              <Col sm="12" md={{ size: 10, offset: 2 }}>
                <Form>
                  <Card className="my-5">
                    <CardHeader>Fuel Type</CardHeader>
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

export default CarType;
