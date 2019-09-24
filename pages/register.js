import React from 'react';
import {
  Col, Button, Form, FormGroup, Label, Input, Row, Container, Jumbotron
} from 'reactstrap';
import Layout from '../components/Layout';

const Register = () => (
  <Layout>
    <Container>
      <Jumbotron>
        <Form>
          <Row form>
            <Col md={{ size: 6, offset: 3 }}>
              <FormGroup>
                <Label for="fullName">Full Name</Label>
                <Input type="text" name="fullName" id="fullName" placeholder="Juan Perez" />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={{ size: 6, offset: 3 }}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="example@email.com" />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={{ size: 6, offset: 3 }}>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password" />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={{ size: 6, offset: 3 }}>
              <FormGroup>
                <Label for="cedula">Cedula</Label>
                <Input type="text" name="cedula" id="cedula" placeholder="001-1234567-8" />
              </FormGroup>
            </Col>
          </Row>
          <center>
            <Button>Sign in</Button>
          </center>
        </Form>
      </Jumbotron>
    </Container>
  </Layout>
);

export default Register;
