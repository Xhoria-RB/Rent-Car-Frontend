/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import {
  Button, Modal, ModalHeader, ModalBody, Label, Input, Form, FormGroup
} from 'reactstrap';
import axios from 'axios';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import { url } from '../utils/config';
import ErrorMessage from './ErrorMessage';

const UpdateInspection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [newInspection, setNewInspection] = useState({});
  const [selectData, setSelectData] = useState({});
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

  const dataHolder = {
    client: []
  };

  const dataTransformer = (res) => {
    const { data = [] } = res;
    data.map((element) => {
      if (element.entityName === 'client') {
        dataHolder.client.push({
          id: element._id,
          description: element.fullName
        });
      }
      return null;
    });
    setSelectData({ ...selectData, ...dataHolder });
  };
  const verifyChecked = (e) => {
    setNewInspection({ ...newInspection, [e.target.name]: e.target.checked });
  };
  const fillRequest = () => {
    axios.get(`${url}/api/client`)
      .then((res) => dataTransformer(res))
      .catch((err) => errorHandling(err));
  };

  useEffect(() => {
    fillRequest();
  }, []);

  const sendRequest = () => {
    axios.put(`${url}/api/inspection/${id}`, { ...newInspection }, { headers })
      .then((res) => {
        console.log(res);
        setIsOpen(!isOpen);
        Router.reload();
      })
      .catch((err) => {
        errorHandling(err);
      });
  };
  const verifyUpdate = () => {
    // if (!isEmpty(model) && (model.description !== '' || model.brandID !== '')) {
    if (!isEmpty(newInspection) && (Object.values(newInspection).includes('') > -1)) {
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
      <Button color="info" onClick={() => setIsOpen(!isOpen)}>Update Inspection</Button>
      <Modal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
        <ModalHeader toggle={() => setIsOpen(!isOpen)}>Update Inspection</ModalHeader>
        <ModalBody>
          {errors.map((err) => (
            <ErrorMessage key={err.message} error={err} />
          ))}
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="clientSelect">Client</Label>
              <Input
                type="select"
                name="clientID"
                id="clientSelect"
                onChange={(e) => setNewInspection({
                  ...newInspection, [e.target.name]: e.target.value
                })}
                required
              >
                <option value="" selected>Select one</option>
                {!isEmpty(selectData) ? selectData.client.map((el) => (
                  <option key={el.id} value={el.id}>{el.description}</option>
                )) : null}
              </Input>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input
                  type="checkbox"
                  name="scratches"
                  onChange={(e) => verifyChecked(e)}
                /> Scratches
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input
                  type="checkbox"
                  name="extraTire"
                  onChange={(e) => verifyChecked(e)}
                /> Extra Tire
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input
                  type="checkbox"
                  name="lever"
                  onChange={(e) => verifyChecked(e)}
                /> lever
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input
                  type="checkbox"
                  name="brokenGlass"
                  onChange={(e) => verifyChecked(e)}
                /> Broken Glass
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input
                  type="checkbox"
                  name="firstTire"
                  onChange={(e) => verifyChecked(e)}
                /> First Tire
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input
                  type="checkbox"
                  name="secondTire"
                  onChange={(e) => verifyChecked(e)}
                /> Second Tire
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input
                  type="checkbox"
                  name="thirdTire"
                  onChange={(e) => verifyChecked(e)}
                /> Third Tire
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input
                  type="checkbox"
                  name="fourthTire"
                  onChange={(e) => verifyChecked(e)}
                /> Fourth Tire
              </Label>
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="fuelQuantityInput" className="mr-sm-2">Fuel Quantity</Label>
              <Input
                type="text"
                name="fuelQt"
                id="fuelQuantityInput"
                placeholder="50"
                onChange={(e) => setNewInspection({
                  ...newInspection, [e.target.name]: Number.parseFloat(e.target.value)
                })}
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

export default UpdateInspection;
