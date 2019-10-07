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

const CreateModel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [model, setModel] = useState({});
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
    model: []
  };

  const dataTransformer = (res) => {
    const { data } = res;
    // eslint-disable-next-line array-callback-return
    data.map((element) => {
      dataHolder.model.push({
        id: element._id,
        description: element.description
      });
    });
    setSelectData({ ...selectData, ...dataHolder });
  };

  const fillRequest = () => {
    axios.get(`${url}/api/brand`)
      .then((res) => dataTransformer(res))
      .catch((err) => errorHandling(err));
  };

  useEffect(() => {
    fillRequest();
  }, []);


  const sendRequest = () => {
    axios.post(`${url}/api/model`, { ...model }, { headers })
      .then((res) => {
        setIsOpen(!isOpen);
        // eslint-disable-next-line no-underscore-dangle
        Router.push(`/model/${res.data._id}`);
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
      <Button color="info" onClick={() => setIsOpen(!isOpen)}>New Model</Button>
      <Modal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
        <ModalHeader toggle={() => setIsOpen(!isOpen)}>New Model</ModalHeader>
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
                onChange={(e) => setModel({ ...model, [e.target.name]: e.target.value })}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="brandSelect">Brand</Label>
              <Input
                type="select"
                name="brandID"
                id="brandSelect"
                onChange={(e) => setModel({ ...model, [e.target.name]: e.target.value })}
                required
              >
                <option value="" selected>Select one</option>
                {!isEmpty(selectData)
                  ? selectData.model.map((el) => (
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

export default CreateModel;
