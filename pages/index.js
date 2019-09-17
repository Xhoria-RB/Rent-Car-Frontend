import React from 'react';
import {
  Container, Row
} from 'reactstrap';
import Layout from '../components/Layout';
import DealerCard from '../components/DealerCard';
import Footer from '../components/Footer';
import { services } from '../constants/services';


const Home = () => (
  <Layout>
    <Container>
      <div className="hero">
        <div className="ricardo">
          <Container>
            <h1 className="title">Rent-Car </h1>
            <p className="description">
              A simple way to rent your dreamed car and enjoy it.
            </p>
            {/* <img src="https://demo.quape.com/popularcars/wp-content/uploads/2017/09/3-cars.png" alt="cars" className="img-fluid" /> */}
          </Container>
        </div>
        <Container>
          {services.map((service) => (
            <Row>
              {service.map((el) => <DealerCard link={el.url} title={el.title} image={el.image} />)}
            </Row>
          ))}
          <Footer />
        </Container>

        <style jsx>{`
          html {
          }
          .ricardo {
            background: url('https://demo.quape.com/popularcars/wp-content/uploads/2017/09/3-cars.png');
            background-repeat: no-repeat;
            background-size: cover;
            height: 60vh;
          }
          .hero {
            width: 100%;
            color: #333;
          }
          .title {
            margin: 0;
            width: 100%;
            padding-top: 50px;
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


export default Home;
