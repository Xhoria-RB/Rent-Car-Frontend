import React, { useState } from 'react';
import Router from 'next/router';
import {
  Button, Modal, ModalHeader, ModalBody, Label, Input, Form, FormGroup
} from 'reactstrap';
import axios from 'axios';
import get from 'lodash/get';
import { url } from '../utils/config';
import ErrorMessage from './ErrorMessage';

const CreateClient = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [client, setClient] = useState({});
  const [errors, setErrors] = useState([]);
  const headers = {
    'Content-Type': 'application/json'
  };
  const sendRequest = () => {
    axios.post(`${url}/api/client`, { ...client }, { headers })
      .then(() => {
        setIsOpen(!isOpen);
        Router.reload();
      })
      .catch((err) => {
        const message = get(err, 'response.data.error', err.message);
        setErrors([...errors, { message }]);
      });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    sendRequest();
  };
  return (
    <div>
      <Button color="info" onClick={() => setIsOpen(!isOpen)}>New Client</Button>
      <Modal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
        <ModalHeader toggle={() => setIsOpen(!isOpen)}>New Client</ModalHeader>
        <ModalBody>
          {errors.map((err) => (
            <ErrorMessage key={err.message} error={err} />
          ))}
          <Form onSubmit={onSubmit}>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="fullNameInput" className="mr-sm-2">Full Name</Label>
              <Input
                type="text"
                name="fullName"
                id="fullNameInput"
                placeholder="Juan Perez"
                onChange={(e) => setClient({ ...client, [e.target.name]: e.target.value })}
                required
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="idCardInput" className="mr-sm-2">Cedula</Label>
              <Input
                type="text"
                name="idCard"
                id="idCardInput"
                placeholder="000-0000000-0"
                onChange={(e) => setClient({ ...client, [e.target.name]: e.target.value.replace('-', '') })}
                required
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="creditCardInput" className="mr-sm-2">Credit Card</Label>
              <Input
                type="text"
                name="creditCard"
                id="creditCardInput"
                placeholder="0000-0000-0000-0000"
                onChange={(e) => setClient({ ...client, [e.target.name]: e.target.value })}
                required
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="entitySelect" className="mr-sm-2">Juridic Entity</Label>
              <Input
                type="select"
                name="entity"
                id="entitySelect"
                onChange={(e) => setClient({ ...client, [e.target.name]: e.target.value })}
                required
              >
                <option value="" selected>Select One</option>
                <option value="L">Legal</option>
                <option value="N">Natural One</option>
              </Input>
            </FormGroup>
            <Input className="btn btn-success my-2 button-small" type="submit" value="Submit" />{' '}
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default CreateClient;
