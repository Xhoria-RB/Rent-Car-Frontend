import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import axios from 'axios';
import Cookie from 'js-cookie';
import get from 'lodash/get';
import {
  Col, Button, Form, FormGroup, Label, Input, Row, Container, Jumbotron
} from 'reactstrap';
import Layout from '../components/Layout';
import { url } from '../utils/config';
import ErrorMessage from '../components/ErrorMessage';
import withAuth from '../components/lib/withAuth';

const Register = ({ userCookie }) => {
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState([]);
  const headers = {
    'Content-Type': 'application/json'
  };

  const handleSubmit = () => {
    axios.post(`${url}/auth/register`, { ...user }, { headers })
      .then((res) => {
        if (res.status === 200) {
          Cookie.set('user', res.data);
          Router.push('/');
        }
      })
      .catch((err) => {
        const message = get(err, 'response.data.error', err.message);
        setErrors([...errors, { message }]);
      });
  };

  return (
    <Layout user={userCookie}>
      <Container>
        <Jumbotron>
          <Form>
            <Row form>
              <Col md={{ size: 6, offset: 3 }}>
                {errors.map((err) => (
                  <ErrorMessage key={err.message} error={err} />
                ))}
              </Col>
            </Row>
            <Row form>
              <Col md={{ size: 6, offset: 3 }}>
                <FormGroup>
                  <Label for="fullName">Full Name</Label>
                  <Input onChange={(e) => setUser({ ...user, fullName: e.target.value })} type="text" name="fullName" id="fullName" placeholder="Juan Perez" />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={{ size: 6, offset: 3 }}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input onChange={(e) => setUser({ ...user, email: e.target.value })} type="email" name="email" id="exampleEmail" placeholder="example@email.com" />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={{ size: 6, offset: 3 }}>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input onChange={(e) => setUser({ ...user, password: e.target.value })} type="password" name="password" id="examplePassword" placeholder="password" />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={{ size: 6, offset: 3 }}>
                <FormGroup>
                  <Label for="cedula">Cedula</Label>
                  <Input onChange={(e) => setUser({ ...user, idCard: e.target.value.replace(/-/g, '') })} type="text" name="cedula" id="cedula" placeholder="001-1234567-8" />
                </FormGroup>
              </Col>
            </Row>
            <center>
              <Button onClick={handleSubmit}>Sign in</Button>
            </center>
          </Form>
        </Jumbotron>
      </Container>
    </Layout>
  );
};
Register.propTypes = {
  userCookie: PropTypes.objectOf(PropTypes.string).isRequired
};

export default withAuth(Register);
