/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import {
  Button, Modal, ModalHeader, ModalBody, Label, Input, Form, FormGroup
} from 'reactstrap';
import axios from 'axios';
import get from 'lodash/get';
import { url } from '../utils/config';
import { validateUpdate } from '../utils/validator';
import ErrorMessage from './ErrorMessage';

const UpdateRent = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newRent, setRent] = useState({});
  const [errors, setErrors] = useState([]);
  const headers = {
    'Content-Type': 'application/json'
  };

  const router = useRouter();
  const { id } = router.query;

  const errorHandling = (err) => {
    const message = get(err, 'response.data.errors.description.message', err.message);
    setErrors([...errors, { message }]);
  };

  const {
    car = {}, client = {}, employee = {}
  } = content || {};

  const sendRequest = () => {
    axios.put(`${url}/api/rent/${id}`, { ...newRent }, { headers })
      .then((res) => {
        console.log(res);
        setIsOpen(!isOpen);
        Router.reload();
      })
      .catch((err) => {
        errorHandling(err);
      });
  };

  const fillState = () => {
    setRent({
      ...newRent,
      clientID: client.id,
      carID: car.id,
      employeeID: employee.id,
      inspectionID: content.id
    });
  };

  useEffect(() => {
    fillState();
  }, []);

  const onSubmit = (evt) => {
    evt.preventDefault();
    if (validateUpdate(newRent)) {
      sendRequest();
    }
    else {
      setErrors([...errors, { message: 'Fields cannot be empty' }]);
    }
  };
  return (
    <div>
      <Button color="info" onClick={() => setIsOpen(!isOpen)}>Update Rent</Button>
      <Modal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
        <ModalHeader toggle={() => setIsOpen(!isOpen)}>Update Rent</ModalHeader>
        <ModalBody>
          {errors.map((err) => (
            <ErrorMessage key={err.message} error={err} />
          ))}
          <Form onSubmit={onSubmit}>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="clientInput" className="mr-sm-2">Client</Label>
              <Input
                type="text"
                name="clientID"
                id="clientInput"
                defaultValue={client.name}
                readOnly
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="carInput" className="mr-sm-2">Car</Label>
              <Input
                type="text"
                name="carID"
                id="carInput"
                defaultValue={car.description}
                readOnly
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="employeeID" className="mr-sm-2">Employee</Label>
              <Input
                type="text"
                name="employeeID"
                id="employeeID"
                defaultValue={employee.name}
                readOnly
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="rentDateInput" className="mr-sm-2">Rent Date</Label>
              <Input
                type="date"
                name="rentDate"
                id="rentDateInput"
                onChange={(e) => setRent({
                  ...newRent, [e.target.name]: e.target.value
                })}
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="pricePerDayInput" className="mr-sm-2">Price per Day</Label>
              <Input
                type="number"
                name="pricePerDay"
                id="pricePerDayInput"
                placeholder="100.00"
                onChange={(e) => setRent({
                  ...newRent, [e.target.name]: Number.parseFloat(e.target.value)
                })}
                min="100"
                max="100000"
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="daysQuantityInput" className="mr-sm-2">Total of Days</Label>
              <Input
                type="number"
                name="daysQt"
                id="daysQuantityInput"
                placeholder="50"
                onChange={(e) => setRent({
                  ...newRent, [e.target.name]: Number.parseFloat(e.target.value)
                })}
                min="10"
                max="730"
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="commentInput" className="mr-sm-2">Comment</Label>
              <Input
                type="text"
                name="comments"
                id="commentInput"
                placeholder="something"
                onChange={(e) => setRent({
                  ...newRent, [e.target.name]: Number.parseFloat(e.target.value)
                })}
              />
            </FormGroup>
            <Input className="btn btn-success my-2 button-small" type="submit" value="Submit" />{' '}
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default UpdateRent;
