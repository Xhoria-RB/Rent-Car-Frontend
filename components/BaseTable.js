import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import Map from 'lodash/map';

const BaseTable = ({ resData }) => {
  const [dbData, setDBData] = useState([]);
  const [keys, setKeys] = useState([]);

  const mappingKeys = () => {
    dbData.map((data) => setKeys(Object.keys(data)));
  };

  useEffect(() => {
    try {
      setDBData(resData);
      mappingKeys();
    }
    catch (err) {
      alert(err);
    }
  }, [resData, dbData]);

  return (
    <Table hover>
      <thead>
        <tr>
          {keys.map((head) => (
            <th key={head.id}>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* <tr> */}
        {Map(dbData, (el) => (
          <tr>
            {Object.values(el).map((x) => (<td>{x}</td>))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

BaseTable.propTypes = {
  resData: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired
};

export default BaseTable;
