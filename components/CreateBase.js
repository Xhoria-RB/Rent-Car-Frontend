import React, { useState } from 'react';
import Router from 'next/router';
import {
  Button, Modal, ModalHeader, ModalBody, Label, Input, Form, FormGroup
} from 'reactstrap';
import axios from 'axios';
import get from 'lodash/get';
import { url } from '../utils/config';
import ErrorMessage from './ErrorMessage';

const CreateBase = ({ entity, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({});
  const [errors, setErrors] = useState([]);
  const headers = {
    'Content-Type': 'application/json'
  };
  const sendRequest = () => {
    axios.post(`${url}/api/${entity}`, { ...data }, { headers })
      .then((res) => {
        setIsOpen(!isOpen);
        // eslint-disable-next-line no-underscore-dangle
        Router.push(`/${entity}/${res.data._id}`);
      })
      .catch((err) => {
        const message = get(err, 'response.data.errors.description.message', err.message);
        setErrors([...errors, { message }]);
      });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    sendRequest();
  };
  return (
    <div className="col align-self-center">
      <Button color="info" onClick={() => setIsOpen(!isOpen)}>New {title}</Button>
      <Modal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
        <ModalHeader toggle={() => setIsOpen(!isOpen)}>New {title}</ModalHeader>
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
                onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
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

export default CreateBase;
