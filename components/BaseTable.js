/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import useAxios from 'axios-hooks';

import Link from 'next/link';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import Map from 'lodash/map';

// const QUERIES = {
//   car: `${baseurl}/car/api/noseque`
// };

const mockData = [
  {
    status: true,
    _id: '5d77e3ba974d5e86c83fa930',
    description: 'First car',
    chasisNO: 'chasis1212',
    motorNO: 'motor2121',
    plateNO: 'oias21293',
    carTypeID: '5d77e2b3974d5e86c83fa92f',
    brandID: '5d771e2c605dac82e313b757',
    modelID: '5d77e257974d5e86c83fa92e',
    fuelTypeID: '5d77226523511e03976c80ba',
    __v: 0
  },
  {
    status: true,
    _id: '5d7865d9e095578debff4705',
    description: 'Second car',
    chasisNO: 'chasis1212',
    motorNO: 'motor2121',
    plateNO: 'oias21293',
    carTypeID: '5d77e2b3974d5e86c83fa92f',
    brandID: '5d771e2c605dac82e313b757',
    modelID: '5d77e257974d5e86c83fa92e',
    fuelTypeID: '5d77226523511e03976c80ba',
    carStatus: 'Rented',
    __v: 0
  }
];

const BaseTable = ({ url }) => {
  const [dbData, setDBData] = useState([]);
  const [error, setError] = useState();
  const [keys, setKeys] = useState([]);

  const mappingKeys = () => {
    mockData.map((data) => setKeys(Object.keys(data)));
  };

  // const [{ data, loading, err }, refetch] = useAxios('https://api.github.com/repos/zeit/next.js');
  function fetchData(query) {
    // setError(error);
    // setDBData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    try {
      setDBData(mockData);
      mappingKeys();
    }
    catch (err) {
      alert(err);
    }
  }, [mockData]);

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
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </Table>
  );
};

BaseTable.propTypes = {
  // resData: PropTypes.arrayOf(
  //   PropTypes.object
  // ).isRequired,
  url: PropTypes.string.isRequired
};

export default BaseTable;
