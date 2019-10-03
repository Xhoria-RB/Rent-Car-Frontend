import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import useAxios from 'axios-hooks';
import get from 'lodash/get';
import {
  Row, Col, Button, Form, FormGroup, Label, Input, FormText, Container, Spinner, Card,
  CardHeader
} from 'reactstrap';
import Layout from '../../components/Layout';
import { queries } from '../../utils/constants';

const SingleRent = () => {
  const router = useRouter();
  const { id } = router.query;

  // eslint-disable-next-line no-unused-vars
  const [{ response, loading, err }, refetch] = useAxios(`${queries.rent}/${id}`);

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
    },
    client: {
      id: get(data, 'clientID._id'),
      name: get(data, 'clientID.fullName', ''),
      cedula: get(data, 'clientID.idCard', ''),
      credit_card: get(data, 'clientID.creditCard', ''),
      entity: get(data, 'clientID.entity')
    },
    employee: {
      id: get(data, 'employeeID._id'),
      name: get(data, 'employeeID.fullName', ''),
      cedula: get(data, 'employeeID.idCard', ''),
      shift: get(data, 'employeeID.shift', '')
    },
    rentDate: data.rentDate,
    returnDate: data.returnDate,
    pricePerDay: data.pricePerDay,
    daysQt: data.daysQt
  });


  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <h1>SingleRent</h1>
        {response && response.data ? (
          <Container>
            {console.log(loading)}
            <pre>{JSON.stringify(transformer(response.data))}</pre>
            <Row>
              <Col sm="12" md={{ size: 8, offset: 2 }}>
                <Form>
                  <Card>
                    <CardHeader>Car</CardHeader>
                    <div className="mx-1">
                      <FormGroup>
                        <Label for="exampleEmail">Description</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                      </FormGroup>
                      <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                      </FormGroup>
                    </div>
                  </Card>
                  <Card>
                    <CardHeader>Client</CardHeader>
                    <div className="mx-1">
                      <FormGroup>
                        <Label for="exampleEmail">Description</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                      </FormGroup>
                      <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                      </FormGroup>
                    </div>
                  </Card>
                  <Card>
                    <CardHeader>Employee</CardHeader>
                    <div className="mx-1">
                      <FormGroup>
                        <Label for="exampleEmail">Description</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                      </FormGroup>
                      <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                      </FormGroup>
                    </div>
                  </Card>
                  <Button>Submit</Button>
                </Form>
              </Col>
            </Row>
          </Container>
        ) : (
          <center>
              {console.log(err, '+++++++++++', loading)}
              <Spinner
                style={{ width: '7rem', height: '7rem' }}
                color="dark"
              />
            </center>
        )}

        {/* {response && response.data && <pre>{JSON.stringify(response.data, null, 2)}</pre>} */}

      </Layout>
    </div>
  );
};

export default SingleRent;
