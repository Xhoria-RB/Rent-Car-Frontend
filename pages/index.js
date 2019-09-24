import React from 'react';
import {
  Container, Row
} from 'reactstrap';
import Layout from '../components/Layout';
import withAuth from '../components/lib/withAuth';
import DealerCard from '../components/DealerCard';
import { services } from '../utils/constants';

const Home = ({ userCookie }) => (
  <Layout user={userCookie}>
    <Container>
      <div className="hero">
        <div className="bg-image" />
        <div className="bg-text">
          <h1 className="title">Rent-Car </h1>
          <p className="description">
            A simple way to rent your dreamed car and enjoy it.
          </p>
        </div>
        <Container>
          {services.map((service) => (
            <Row>
              {service.map((el) => (
                <DealerCard
                  key={el.title}
                  link={el.url}
                  title={el.title}
                  image={el.image}
                />
              ))}
            </Row>
          ))}
        </Container>

        <style jsx>{`
          .bg-image {
            background: url('https://demo.quape.com/popularcars/wp-content/uploads/2017/09/3-cars.png');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            height: 60vh;
          }
          .bg-text {
            font-weight: bold;
            position: absolute;
            top: 15%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 2;
            width: 60%;
            padding: 10px;
            text-align: center;
          }
          .title {
            margin: 0;
            width: 100%;
            padding-top: 10px;
            padding-bottom: 10px;
            line-height: 1.15;
            font-size: 48px;
          }
          .title,
          .description {
            text-align: center;
          }
        `}
        </style>
      </div>
    </Container>
  </Layout>

);
export default withAuth(Home);
