import React, { useContext } from 'react';
import { Button } from 'reactstrap';
import UserContext from './UserContext';

const Logout = () => {
  const { logOut } = useContext(UserContext);
  const handleLogout = () => {
    logOut();
  };

  return <Button color="danger" onClick={handleLogout}>Logout</Button>;
};

export default Logout;
