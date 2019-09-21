import React, { useState } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Label, Input
} from 'reactstrap';
import axios from 'axios';
import Cookie from 'js-cookie';
import parseCookies from './lib/parseCookies';
import { url } from '../utils/config';
import ErrorMessage from './ErrorMessage';

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState([]);
  const headers = {
    'Content-Type': 'application/json'
  };
  const logRequest = () => {
    axios.post(`${url}/auth/login`, { ...user }, { headers })
      .then((res) => {
        if (res.status === 200) {
          const { data } = res;
          setIsOpen(!isOpen);
          Cookie.set('user', data);
        }
      })
      .catch((err) => {
        setErrors([...errors, { message: err.response.data.error }]);
      });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    logRequest();
  };
  return (
    <div>
      <Button color="danger" onClick={() => setIsOpen(!isOpen)}>Login</Button>
      <Modal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
        <ModalHeader toggle={() => setIsOpen(!isOpen)}>Log In</ModalHeader>
        <ModalBody>
          {errors.map((err) => (
            <ErrorMessage key={err.message} error={err} />
          ))}
          <Form onSubmit={onSubmit}>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="email" className="mr-sm-2">Email</Label>
              <Input
                type="email"
                name="email"
                id="emailInput"
                placeholder="example@example.com"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                autoFocus
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="password" className="mr-sm-2">Password</Label>
              <Input
                type="password"
                name="password"
                id="passwordInput"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Password"
              />
            </FormGroup>
            <Input className="btn btn-success my-2 button-small" type="submit" value="Submit" />{' '}
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

Login.getInitialProps = ({ req }) => {
  const cookies = parseCookies(req);
  return {
    initialCookieValue: cookies.user
  };
};

export default Login;
