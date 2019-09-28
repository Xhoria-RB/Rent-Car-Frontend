/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import Map from 'lodash/map';

const BaseTable = ({ resData, url }) => {
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
        {Map(dbData, (obj) => (
          <tr>
            {Object.values(obj).map((el) => (
              <Link href={{
                pathname: url,
                query: { id: obj._id }
              }}
              ><td>{el}</td>
              </Link>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

BaseTable.propTypes = {
  resData: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
  url: PropTypes.string.isRequired
};

export default BaseTable;
