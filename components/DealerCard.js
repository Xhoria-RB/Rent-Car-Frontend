import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {
  Card, CardHeader, Col, CardBody
} from 'reactstrap';

const DealerCard = ({ link, title, image }) => (
  <Col xs="3">
    <Link href={link}>
      <Card className="my-3" style={{ maxHeight: '200px', overflow: 'hidden' }}>
        <center>
          <CardHeader>{title}</CardHeader>
          <CardBody>
            <img width="50%" src={image} alt="Card cars" className="img-fluid" style={{ objectFit: 'contain' }} />
          </CardBody>
        </center>
      </Card>
    </Link>
  </Col>
);

DealerCard.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default DealerCard;
