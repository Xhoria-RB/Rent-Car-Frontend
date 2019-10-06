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

const CreateCar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [car, setCar] = useState({});
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
    brand: [],
    model: [],
    fuel_type: [],
    car_type: []
  };

  const dataTransformer = (res) => {
    const { data } = res;
    // eslint-disable-next-line array-callback-return
    data.map((element) => {
      if (element.entityName === 'brand') {
        dataHolder.brand.push({
          id: element._id,
          description: element.description
        });
      }
      if (element.entityName === 'model') {
        dataHolder.model.push({
          id: element._id,
          brandID: element.brandID,
          description: element.description
        });
      }
      if (element.entityName === 'fuel_type') {
        dataHolder.fuel_type.push({
          id: element._id,
          description: element.description
        });
      }
      if (element.entityName === 'car_type') {
        dataHolder.car_type.push({
          id: element._id,
          description: element.description
        });
      }
    });
    setSelectData({ ...selectData, ...dataHolder });
  };

  const fillRequest = () => {
    axios.get(`${url}/api/model`)
      .then((res) => dataTransformer(res))
      .catch((err) => errorHandling(err));

    axios.get(`${url}/api/brand`)
      .then((res) => dataTransformer(res))
      .catch((err) => errorHandling(err));

    axios.get(`${url}/api/fuel_type`)
      .then((res) => dataTransformer(res))
      .catch((err) => errorHandling(err));

    axios.get(`${url}/api/car_type`)
      .then((res) => dataTransformer(res))
      .catch((err) => errorHandling(err));
  };

  useEffect(() => {
    fillRequest();
  }, []);


  const sendRequest = () => {
    axios.post(`${url}/api/car`, { ...car }, { headers })
      .then(() => {
        setIsOpen(!isOpen);
        Router.reload();
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
      <Button color="info" onClick={() => setIsOpen(!isOpen)}>New Car</Button>
      <Modal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
        <ModalHeader toggle={() => setIsOpen(!isOpen)}>New Car</ModalHeader>
        <ModalBody>
          {errors.map((err) => (
            <ErrorMessage key={err.message} error={err} />
          ))}
          <Form onSubmit={onSubmit}>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="descriptionInput" className="mr-sm-2">Description</Label>
              <Input
                type="text"
                name="description"
                id="descriptionInput"
                placeholder="something..."
                onChange={(e) => setCar({ ...car, [e.target.name]: e.target.value })}
                required
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="chasisInput" className="mr-sm-2">Chasis No.</Label>
              <Input
                type="text"
                name="chasisNO"
                id="chasisInput"
                placeholder="something..."
                onChange={(e) => setCar({ ...car, [e.target.name]: e.target.value })}
                required
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="motorInput" className="mr-sm-2">Motor No.</Label>
              <Input
                type="text"
                name="motorNO"
                id="motorInput"
                placeholder="something..."
                onChange={(e) => setCar({ ...car, [e.target.name]: e.target.value })}
                required
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="plateInput" className="mr-sm-2">Plate No.</Label>
              <Input
                type="text"
                name="plateNO"
                id="plateInput"
                placeholder="something..."
                onChange={(e) => setCar({ ...car, [e.target.name]: e.target.value })}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="brandSelect">Brand</Label>
              <Input
                type="select"
                name="brandID"
                id="brandSelect"
                onChange={(e) => setCar({ ...car, [e.target.name]: e.target.value })}
                required
              >
                <option value="" selected>Select one</option>
                {!isEmpty(selectData) ? selectData.brand.map((el) => (
                  <option key={el.id} value={el.id}>{el.description}</option>
                )) : null}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="modelSelect">Model</Label>
              <Input
                type="select"
                name="modelID"
                id="modelSelect"
                onChange={(e) => setCar({ ...car, [e.target.name]: e.target.value })}
                required
              >
                <option value="" selected>Select one</option>
                {!isEmpty(selectData) && !isEmpty(car.brandID)
                  ? selectData.model.filter((e) => e.brandID === car.brandID).map((el) => (
                    <option key={el.id} value={el.id}>{el.description}</option>
                  )) : null}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="fuelTypeSelect">Fuel Type</Label>
              <Input
                type="select"
                name="fuelTypeID"
                id="fuelTypeSelect"
                onChange={(e) => setCar({ ...car, [e.target.name]: e.target.value })}
                required
              >
                <option value="" selected>Select one</option>
                {!isEmpty(selectData) ? selectData.fuel_type.map((el) => (
                  <option key={el.id} value={el.id}>{el.description}</option>
                )) : null}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="carTypeSelect">Car Type</Label>
              <Input
                type="select"
                name="carTypeID"
                id="carTypeSelect"
                onChange={(e) => setCar({ ...car, [e.target.name]: e.target.value })}
                required
              >
                <option value="" selected>Select one</option>
                {!isEmpty(selectData) ? selectData.car_type.map((el) => (
                  <option key={el.id} value={el.id}>{el.description}</option>
                )) : null}
              </Input>
            </FormGroup>
            <Input className="btn btn-success my-2 button-small" type="submit" value="Submit" />{' '}
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default CreateCar;
