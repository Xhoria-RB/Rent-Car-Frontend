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
import UpdateEmployee from '../../components/UpdateEmployee';


const SingleEmployee = () => {
  const router = useRouter();
  const { id } = router.query;

  // eslint-disable-next-line no-unused-vars
  const [{ response, loading, err }, refetch] = useAxios(`${queries.employee}/${id}`);
  const transformer = (data) => ({
    // eslint-disable-next-line no-underscore-dangle
    id: data._id,
    name: data.fullName,
    cedula: data.idCard,
    email: data.email,
    shift: data.shift,
    commission: data.commission
  });
  const content = (response && response.data) && transformer(response.data);
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <h1 className="text-center my-3">Employee details</h1>
        <Row>
          <Col sm={{ size: 'auto', offset: 9 }}>
            <UpdateEmployee />
          </Col>
        </Row>
        {content ? (
          <Container>
            <Row>
              <Col sm="12" md={{ size: 10, offset: 2 }}>
                <Form>
                  <Card className="my-5">
                    <CardHeader>Employee</CardHeader>
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

export default SingleEmployee;
