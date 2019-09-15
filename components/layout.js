import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Nav from './nav';


const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
    </Head>

    <Nav />

    { children }

  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
