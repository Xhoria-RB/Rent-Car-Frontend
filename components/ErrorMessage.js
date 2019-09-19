import React, { useState } from 'react';

const ErrorMessage = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <p color="info" isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
        <strong>ERROR</strong>
      </p>
    </>
  );
};

export default ErrorMessage;
