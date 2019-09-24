import React from 'react';
import Router from 'next/router';
import { Button } from 'reactstrap';
import Cookie from 'js-cookie';


const Logout = () => {
  const handleLogout = () => {
    Cookie.remove('user');
    Router.push('/');
  };

  return <Button color="danger" onClick={handleLogout}>Logout</Button>;
};

export default Logout;
