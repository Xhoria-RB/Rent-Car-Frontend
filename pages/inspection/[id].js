import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import useAxios from 'axios-hooks';
import moment from 'moment';
import get from 'lodash/get';
import {
  Row, Col, Form, Container, Spinner, Card, CardHeader
} from 'reactstrap';
import Layout from '../../components/Layout';
import { queries, dateFormat } from '../../utils/constants';
import RenderItem from '../../components/RenderItem';
import CreateRent from '../../components/CreateRent';

const SingleInspection = () => {
  const router = useRouter();
  const { id } = router.query;

  // eslint-disable-next-line no-unused-vars
  const [{ response, loading, err }, refetch] = useAxios(`${queries.inspection}/${id}`);
  const transformer = (data) => ({
    // eslint-disable-next-line no-underscore-dangle
    id: data._id,
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
    inspection: {
      scratches: data.scratches,
      extraTire: data.extraTire,
      lever: data.lever,
      brokenGlass: data.brokenGlass,
      firstTire: data.firstTire,
      secondTire: data.secondTire,
      thirdTire: data.thirdTire,
      fourthTire: data.fourthTire,
      fuelQt: data.fuelQt,
      inspectionDate: moment(data.inspectionDate).format(dateFormat)
    }
  });
  const content = (response && response.data) && transformer(response.data);
  const {
    car = {}, client = {}, employee = {}, inspection = {}
  } = content || {};

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <h1 className="text-center my-3">SingleInspection</h1>
        {content ? (
          <Container>
            <Row>
              <Col sm="12" md={{ size: 10, offset: 2 }}>
                <CreateRent content={content} />
                <Form>
                  <Card className="my-5">
                    <CardHeader>Car</CardHeader>
                    <RenderItem data={car} />
                  </Card>
                  <Card className="my-5">
                    <CardHeader>Inspection info</CardHeader>
                    <RenderItem data={inspection} />
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

export default SingleInspection;
