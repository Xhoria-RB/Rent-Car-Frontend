/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import {
  Button, Modal, ModalHeader, ModalBody, Label, Input, Form, FormGroup
} from 'reactstrap';
import axios from 'axios';
import get from 'lodash/get';
import { url } from '../utils/config';
import ErrorMessage from './ErrorMessage';

const Return = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newRent, setRent] = useState({});
  const [errors, setErrors] = useState([]);
  const headers = {
    'Content-Type': 'application/json'
  };

  const errorHandling = (err) => {
    const message = get(err, 'response.data.errors.description.message', err.message);
    setErrors([...errors, { message }]);
  };

  const {
    car = {}, client = {}
  } = content || {};

  const sendRequest = () => {
    axios.put(`${url}/api/return/${content.id}`, { ...newRent }, { headers })
      .then(() => {
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
      carID: car.id,
      returnDate: Date.now()
    });
  };

  useEffect(() => {
    fillState();
  }, []);

  const onSubmit = (evt) => {
    evt.preventDefault();
    sendRequest();
  };
  return (
    <div>
      <Button color="info" onClick={() => setIsOpen(!isOpen)}>Return</Button>
      <Modal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
        <ModalHeader toggle={() => setIsOpen(!isOpen)}>Returning</ModalHeader>
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
            <Input className="btn btn-success my-2 button-small" type="submit" value="Submit" />{' '}
            <Input
              className="btn btn-danger my-2 button-small"
              type="button"
              value="Cancel"
              onClick={() => setIsOpen(!isOpen)}
            />{' '}
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Return;
