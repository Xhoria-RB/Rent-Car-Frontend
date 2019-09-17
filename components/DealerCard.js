import React from 'react';
import Link from 'next/link';
import {
  Card, CardHeader, Col, CardBody
} from 'reactstrap';

const DealerCard = ({ link, title, image }) => (
  <Col xs="3">
    <Link href={link}>
      <Card className="my-3">
        <center>
          <CardHeader>{title}</CardHeader>
          <CardBody>
            <img width="20%" src={image} alt="Card cars" className="img-fluid" />
          </CardBody>
        </center>
      </Card>
    </Link>
  </Col>
);

export default DealerCard;
