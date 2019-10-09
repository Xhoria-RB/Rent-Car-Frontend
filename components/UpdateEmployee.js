import React, { useState } from 'react';
import Router, { useRouter } from 'next/router';
import {
  Button, Modal, ModalHeader, ModalBody, Label, Input, Form, FormGroup
} from 'reactstrap';
import axios from 'axios';
import get from 'lodash/get';
import moment from 'moment';
import cookie from 'js-cookie';
import { url } from '../utils/config';
import ErrorMessage from './ErrorMessage';

const UpdateEmployee = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [employee, setEmployee] = useState({});
  const [errors, setErrors] = useState([]);
  const headers = {
    'Content-Type': 'application/json'
  };
  const userCookie = cookie.get('user');
  const router = useRouter();
  const { id } = router.query;

  const sendRequest = () => {
    axios.put(`${url}/api/employee/${id}`, { ...employee }, { headers })
      .then(() => {
        setIsOpen(!isOpen);
        Router.push('/employee');
      })
      .catch((err) => {
        const message = get(err, 'response.data.error', err.message);
        setErrors([...errors, { message }]);
      });
  };

  const onSubmit = (evt) => {
    const user = JSON.parse(userCookie);
    evt.preventDefault();
    if (user.role === 'HR' || user.role === 'Admin') {
      sendRequest();
    }
    else {
      setErrors([...errors, { message: 'Permissions required to perform operation' }]);
    }
  };
  return (
    <div>
      <Button color="info" onClick={() => setIsOpen(!isOpen)}>Update Employee</Button>
      <Modal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
        <ModalHeader toggle={() => setIsOpen(!isOpen)}>Update Employee</ModalHeader>
        <ModalBody>
          {errors.map((err) => (
            <ErrorMessage key={err.message} error={err} />
          ))}
          <Form onSubmit={onSubmit}>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="departmentSelect" className="mr-sm-2">Department</Label>
              <Input
                type="select"
                name="role"
                id="departmentSelect"
                onChange={(e) => setEmployee({ ...employee, [e.target.name]: e.target.value })}
                required
              >
                <option value="" selected>Select one</option>
                <option value="User">Sales</option>
                <option value="HR">Human Resources</option>
                <option value="Admin">Technology</option>
              </Input>
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="startingDate" className="mr-sm-2">Starting Date</Label>
              <Input
                type="date"
                name="startingDate"
                id="startingDate"
                onChange={(e) => setEmployee({
                  ...employee,
                  [e.target.name]: Date.parse(e.target.value)
                })}
                min={moment(Date.now()).format('YYYY/MM/DD')}
                required
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="shiftSelect" className="mr-sm-2">Shift</Label>
              <Input
                type="select"
                name="shift"
                id="shiftSelect"
                onChange={(e) => setEmployee({ ...employee, [e.target.name]: e.target.value })}
                required
              >
                <option value="" selected>Select one</option>
                <option value="M">Matutine</option>
                <option value="V">Vespertine</option>
                <option value="N">Nocturne</option>
              </Input>
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="commissionInput" className="mr-sm-2">Commission</Label>
              <Input
                type="text"
                name="commission"
                id="commissionInput"
                onChange={(e) => setEmployee({
                  ...employee,
                  [e.target.name]: Number.parseFloat(e.target.value)
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

export default UpdateEmployee;
