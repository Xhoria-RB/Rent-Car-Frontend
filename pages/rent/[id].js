import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useAxios from 'axios-hooks';
import moment from 'moment';
import get from 'lodash/get';
import {
  Row, Col, Form, Container, Spinner, Card, CardHeader, Button
} from 'reactstrap';
import Layout from '../../components/Layout';
import { queries, dateFormat } from '../../utils/constants';
import RenderItem from '../../components/RenderItem';
import Return from '../../components/Return';

const SingleRent = () => {
  const router = useRouter();
  const { id } = router.query;

  // eslint-disable-next-line no-unused-vars
  const [{ response, loading, err }, refetch] = useAxios(`${queries.rent}/${id}`);

  const transformer = (data) => ({
    // eslint-disable-next-line no-underscore-dangle
    id: data._id,
    inspectionID: data.inspectionID,
    status: data.status,
    car: {
      id: get(data, 'carID._id'),
      description: get(data, 'carID.description', ''),
      chasisNO: get(data, 'carID.chasisNO', ''),
      motorNO: get(data, 'carID.motorNO', ''),
      plateNO: get(data, 'carID.plateNO', ''),
      car_type: get(data, 'carID.carTypeID.description', ''),
      brand: get(data, 'carID.brandID.description', ''),
      model: get(data, 'carID.modelID.description', ''),
      fuel_type: get(data, 'carID.fuelTypeID.description', ''),
      disabled: true
    },
    client: {
      id: get(data, 'clientID._id'),
      name: get(data, 'clientID.fullName', ''),
      cedula: get(data, 'clientID.idCard', ''),
      credit_card: get(data, 'clientID.creditCard', ''),
      entity: get(data, 'clientID.entity'),
      disabled: true
    },
    employee: {
      id: get(data, 'employeeID._id'),
      name: get(data, 'employeeID.fullName', ''),
      cedula: get(data, 'employeeID.idCard', ''),
      shift: get(data, 'employeeID.shift', ''),
      disabled: true
    },
    rent: {
      rentDate: moment(data.rentDate).format(dateFormat),
      returnDate: moment(data.returnDate).format(dateFormat),
      pricePerDay: data.pricePerDay,
      daysQt: data.daysQt
    }
  });
  const content = (response && response.data) && transformer(response.data);
  const {
    car = {}, client = {}, employee = {}, rent = {}
  } = content || {};
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <h1 className="text-center my-3">SingleRent</h1>
        {content ? (
          <Container>
            <Link href={`/inspection/${content.inspectionID}`}>
              <Button color="secondary">See Inspection</Button>
            </Link>
            <Return content={content} />
            <Row>
              <Col sm="12" md={{ size: 10, offset: 2 }}>
                <Form>
                  <Card className="my-5">
                    <CardHeader>Car</CardHeader>
                    <RenderItem data={car} />
                  </Card>
                  <Card className="my-5">
                    <CardHeader>Rent Info</CardHeader>
                    <RenderItem data={rent} />
                  </Card>
                  <Card className="my-5">
                    <CardHeader>Client</CardHeader>
                    <RenderItem data={client} />
                  </Card>
                  <Card className="my-5">
                    <CardHeader>Employee</CardHeader>
                    <RenderItem data={employee} />
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

export default SingleRent;
