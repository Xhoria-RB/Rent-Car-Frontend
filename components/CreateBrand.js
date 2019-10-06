import React, { useState } from 'react';
import Router from 'next/router';
import {
  Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Label, Input, FormText
} from 'reactstrap';
import axios from 'axios';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import { url } from '../utils/config';
import ErrorMessage from './ErrorMessage';
// import UserContext from './UserContext';

const CreateBrand = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [brand, setBrand] = useState({});
  const [errors, setErrors] = useState([]);
  // const { logIn } = useContext(UserContext);
  const headers = {
    'Content-Type': 'application/json'
  };
  const logRequest = () => {
    axios.post(`${url}/api/brand`, { ...brand }, { headers })
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
    logRequest();
  };
  return (
    <div>
      <Button color="info" onClick={() => setIsOpen(!isOpen)}>New Brand</Button>
      <Modal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
        <ModalHeader toggle={() => setIsOpen(!isOpen)}>New Brand</ModalHeader>
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
                onChange={(e) => setBrand({ ...brand, description: e.target.value })}
                autoFocus
              />
              {!isEmpty(errors) ? <FormText>The field cannot be empty</FormText> : null}
            </FormGroup>
            <Input className="btn btn-success my-2 button-small" type="submit" value="Submit" />{' '}
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default CreateBrand;
