import React, { useState } from 'react';
import Router, { useRouter } from 'next/router';
import {
  Button, Modal, ModalHeader, ModalBody, Label, Input, Form, FormGroup
} from 'reactstrap';
import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
import { url } from '../utils/config';
import ErrorMessage from './ErrorMessage';

const UpdateClient = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [client, setClient] = useState({});
  const [errors, setErrors] = useState([]);
  const headers = {
    'Content-Type': 'application/json'
  };
  const router = useRouter();
  const { id } = router.query;

  const sendRequest = () => {
    axios.put(`${url}/api/client/${id}`, { ...client }, { headers })
      .then((res) => {
        console.log(res);
        setIsOpen(!isOpen);
        Router.reload();
      })
      .catch((err) => {
        const message = get(err, 'response.data.error', err.message);
        setErrors([...errors, { message }]);
      });
  };
  const verifyUpdate = () => {
    // if (!isEmpty(model) && (model.description !== '' || model.brandID !== '')) {
    if (!isEmpty(client) && (Object.values(client).includes('') > -1)) {
      return true;
    }
    setErrors([...errors, { message: 'Fields cannot be empty' }]);
    return false;
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    if (verifyUpdate()) {
      sendRequest();
    }
  };
  return (
    <div>
      <Button color="info" onClick={() => setIsOpen(!isOpen)}>Update Client</Button>
      <Modal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
        <ModalHeader toggle={() => setIsOpen(!isOpen)}>Update Client</ModalHeader>
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
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="entitySelect" className="mr-sm-2">Juridic Entity</Label>
              <Input
                type="select"
                name="entity"
                id="entitySelect"
                onChange={(e) => setClient({ ...client, [e.target.name]: e.target.value })}
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

export default UpdateClient;
