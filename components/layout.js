import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Nav from './nav';
import Footer from './Footer';


const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Home</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
    </Head>

    <Nav />

    {children}

    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
