/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import {
  Button, Modal, ModalHeader, ModalBody, Label, Input, Form, FormGroup
} from 'reactstrap';
import axios from 'axios';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import { url } from '../utils/config';
import ErrorMessage from './ErrorMessage';

const CreateInspection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [newInspection, setNewInspection] = useState({});
  const [selectData, setSelectData] = useState({});
  const [errors, setErrors] = useState([]);
  const headers = {
    'Content-Type': 'application/json'
  };

  const errorHandling = (err) => {
    const message = get(err, 'response.data.errors.description.message', err.message);
    setErrors([...errors, { message }]);
  };

  const dataHolder = {
    client: [],
    car: [],
    employee: []
  };

  const dataTransformer = (res) => {
    const { data = [] } = res;
    data.map((element) => {
      if (element.entityName === 'client') {
        dataHolder.client.push({
          id: element._id,
          description: element.fullName
        });
      }
      if (element.entityName === 'car') {
        dataHolder.car.push({
          id: element._id,
          description: element.description,
          carStatus: element.carStatus
        });
      }
      if (element.entityName === 'employee') {
        dataHolder.employee.push({
          id: element._id,
          description: element.fullName
        });
      }
      return null;
    });
    setSelectData({ ...selectData, ...dataHolder });
  };
  const verifyChecked = (e) => {
    setNewInspection({ ...newInspection, [e.target.name]: e.target.checked });
  };
  const fillRequest = () => {
    axios.get(`${url}/api/car`)
      .then((res) => dataTransformer(res))
      .catch((err) => errorHandling(err));

    axios.get(`${url}/api/client`)
      .then((res) => dataTransformer(res))
      .catch((err) => errorHandling(err));

    axios.get(`${url}/api/employee`)
      .then((res) => dataTransformer(res))
      .catch((err) => errorHandling(err));
  };

  useEffect(() => {
    fillRequest();
  }, []);

  const sendRequest = () => {
    axios.post(`${url}/api/inspection`, { ...newInspection }, { headers })
      .then((res) => {
        setIsOpen(!isOpen);
        Router.push(`/inspection/${res.data._id}`);
      })
      .catch((err) => {
        errorHandling(err);
      });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    sendRequest();
  };
  return (
    <div>
      <Button color="info" onClick={() => setIsOpen(!isOpen)}>New Inspection</Button>
      <Modal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
        <ModalHeader toggle={() => setIsOpen(!isOpen)}>New Inspection</ModalHeader>
        <ModalBody>
          {errors.map((err) => (
            <ErrorMessage key={err.message} error={err} />
          ))}
          <Form onSubmit={onSubmit}>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="employeeSelect">Employee</Label>
              <Input
                type="select"
                name="employeeID"
                id="employeeSelect"
                onChange={(e) => setNewInspection({
                  ...newInspection, [e.target.name]: e.target.value
                })}
                required
              >
                <option value="" selected>Select one</option>
                {!isEmpty(selectData) ? selectData.employee.map((el) => (
                  <option key={el.id} value={el.id}>{el.description}</option>
                )) : null}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="clientSelect">Client</Label>
              <Input
                type="select"
                name="clientID"
                id="clientSelect"
                onChange={(e) => setNewInspection({
                  ...newInspection, [e.target.name]: e.target.value
                })}
                required
              >
                <option value="" selected>Select one</option>
                {!isEmpty(selectData) ? selectData.client.map((el) => (
                  <option key={el.id} value={el.id}>{el.description}</option>
                )) : null}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="carSelect">Car</Label>
              <Input
                type="select"
                name="carID"
                id="carSelect"
                onChange={(e) => setNewInspection({
                  ...newInspection, [e.target.name]: e.target.value
                })}
                required
              >
                <option value="" selected>Select one</option>
                {!isEmpty(selectData) ? selectData.car.filter((e) => e.carStatus !== 'Rented').map((el) => (
                  <option key={el.id} value={el.id}>{el.description}</option>
                )) : null}
              </Input>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input
                  type="checkbox"
                  name="scratches"
                  onChange={(e) => verifyChecked(e)}
                /> Scratches
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input
                  type="checkbox"
                  name="extraTire"
                  onChange={(e) => verifyChecked(e)}
                /> Extra Tire
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input
                  type="checkbox"
                  name="lever"
                  onChange={(e) => verifyChecked(e)}
                /> lever
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input
                  type="checkbox"
                  name="brokenGlass"
                  onChange={(e) => verifyChecked(e)}
                /> Broken Glass
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input
                  type="checkbox"
                  name="firstTire"
                  onChange={(e) => verifyChecked(e)}
                /> First Tire
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input
                  type="checkbox"
                  name="secondTire"
                  onChange={(e) => verifyChecked(e)}
                /> Second Tire
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input
                  type="checkbox"
                  name="thirdTire"
                  onChange={(e) => verifyChecked(e)}
                /> Third Tire
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input
                  type="checkbox"
                  name="fourthTire"
                  onChange={(e) => verifyChecked(e)}
                /> Fourth Tire
              </Label>
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="fuelQuantityInput" className="mr-sm-2">Fuel Quantity</Label>
              <Input
                type="text"
                name="fuelQt"
                id="fuelQuantityInput"
                placeholder="50"
                onChange={(e) => setNewInspection({
                  ...newInspection, [e.target.name]: Number.parseFloat(e.target.value)
                })}
                required
              />
            </FormGroup>
            <Input className="btn btn-success my-2 button-small" type="submit" value="Submit" />{' '}
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default CreateInspection;
