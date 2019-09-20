import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

const ErrorMessage = ({ error }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Alert color="danger" isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>{error.message}</Alert>
  );
};
ErrorMessage.propTypes = {
  error: PropTypes.shape({ message: PropTypes.string }).isRequired
};

export default ErrorMessage;
