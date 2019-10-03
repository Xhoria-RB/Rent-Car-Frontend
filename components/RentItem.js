import React, { useState, useEffect } from 'react';
import get from 'lodash/get';
import {
  FormGroup, Label, Input, Card, CardHeader
} from 'reactstrap';

function RentItem({ response }) {
  const [rent, setRent] = useState(null);

  useEffect(() => {
    if (response && response.data) {
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
      setRent(transformer(response));
    }
  }, [response]);
  return (
    <>
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
    </>
  );
}

export default RentItem;
