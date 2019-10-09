import React, { useState } from 'react';
import Router from 'next/router';
import {
  Button, Modal, ModalHeader, ModalBody, Label, Input, Form, FormGroup
} from 'reactstrap';
import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
import { url } from '../utils/config';
import ErrorMessage from './ErrorMessage';

const UpdateProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [employee, setEmployee] = useState({});
  const [errors, setErrors] = useState([]);
  const headers = {
    'Content-Type': 'application/json'
  };
  const sendRequest = () => {
    axios.put(`${url}/api/employee`, { ...employee }, { headers })
      .then(() => {
        setIsOpen(!isOpen);
        Router.reload();
      })
      .catch((err) => {
        const message = get(err, 'response.data.error', err.message);
        setErrors([...errors, { message }]);
      });
  };

  const validatePassword = () => {
    if (!isEmpty(employee) && employee.password !== '') {
      if (employee.password === employee.confirmPassword) {
        return true;
      }

      setErrors([...errors, { message: 'Password must match' }]);
      return false;
    }
    return false;
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    if (validatePassword()) {
      sendRequest();
    }
  };
  return (
    <div>
      <Button color="info" onClick={() => setIsOpen(!isOpen)}>Update profile</Button>
      <Modal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
        <ModalHeader toggle={() => setIsOpen(!isOpen)}>Update profile</ModalHeader>
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
                onChange={(e) => setEmployee({ ...employee, [e.target.name]: e.target.value })}
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="passwordInput" className="mr-sm-2">Password</Label>
              <Input
                type="password"
                name="password"
                id="passwordInput"
                placeholder="New Password"
                onChange={(e) => setEmployee({ ...employee, [e.target.name]: e.target.value })}
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="confirmPasswordInput" className="mr-sm-2">Confirm Password</Label>
              <Input
                type="password"
                name="confirmPassword"
                id="confirmPasswordInput"
                placeholder="Confirm"
                onChange={(e) => setEmployee({ ...employee, [e.target.name]: e.target.value })}
              />
            </FormGroup>
            <Input className="btn btn-success my-2 button-small" type="submit" value="Submit" />{' '}
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default UpdateProfile;
