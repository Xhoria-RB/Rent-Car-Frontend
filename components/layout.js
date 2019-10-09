import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Nav from './nav';
import Footer from './Footer';


const Layout = ({ children, user = {}, light = false }) => (
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

    {!light && <Nav user={user} />}

    {children}

    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  user: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]).isRequired
};

export default Layout;
