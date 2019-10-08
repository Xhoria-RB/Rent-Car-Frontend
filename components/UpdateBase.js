import React, { useState } from 'react';
import Router, { useRouter } from 'next/router';
import {
  Button, Modal, ModalHeader, ModalBody, Label, Input, Form, FormGroup
} from 'reactstrap';
import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
import ErrorMessage from './ErrorMessage';

const UpdateBase = ({ entity, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({});
  const [errors, setErrors] = useState([]);
  const headers = {
    'Content-Type': 'application/json'
  };
  const router = useRouter();
  const { id } = router.query;
  const sendRequest = () => {
    axios.put(`${entity}/${id}`, { ...data }, { headers })
      .then(() => {
        setIsOpen(!isOpen);
        Router.reload();
      })
      .catch((err) => {
        const message = get(err, 'response.data.errors.description.message', err.message);
        setErrors([...errors, { message }]);
      });
  };
  const verifyUpdate = () => {
    if (!isEmpty(data) && data.description !== '') {
      return true;
    }
    setErrors([...errors, { message: 'Description cannot be empty' }]);
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
      <Button color="info" onClick={() => setIsOpen(!isOpen)}>Update {title}</Button>
      <Modal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
        <ModalHeader toggle={() => setIsOpen(!isOpen)}>Update {title}</ModalHeader>
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
              />
            </FormGroup>
            <Input className="btn btn-success my-2 button-small" type="submit" value="Submit" />{' '}
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default UpdateBase;
