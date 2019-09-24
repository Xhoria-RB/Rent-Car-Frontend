import React from 'react';
import { Table } from 'reactstrap';
import _ from 'lodash';

function BaseTable() {
  const mockHeader = [
    {
      status: true,
      _id: '5d77e3ba974d5e86c83fa930',
      description: 'first car',
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
      description: 'first car',
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
  const mockData = [
    {
      first: 1, second: 2, third: 3, fourth: 4
    },
    {
      first: 1, second: 2, third: 3, fourth: 4
    },
    {
      first: 1, second: 2, third: 3, fourth: 4
    },
    {
      first: 1, second: 2, third: 3, fourth: 4
    }
  ];
  let keys;
  // eslint-disable-next-line array-callback-return
  mockHeader.map((data) => {
    keys = Object.keys(data);
  });
  // eslint-disable-next-line no-unused-vars
  const newTest = () => {
    // eslint-disable-next-line array-callback-return
    mockData.map((data) => {
      keys = Object.keys(data);
      //   keys.map((el) => {
      //     console.log(Object.values(data));
      //   });
    });
    console.log(keys);
    _.map(mockData, (el) => {
      console.log(Object.values(el));
    });
  };
  return (
    <Table hover>
      <thead>
        <tr>
          {keys.map((head) => (
            <th key={head.id}>{head}</th>
          ))}
          {/* <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th> */}
        </tr>
      </thead>
      <tbody>
        {/* <tr> */}
        {_.map(mockHeader, (el) => (
          <tr>
            {Object.values(el).map((e) => (<td>{e}</td>))}
          </tr>
        ))}
        {/* <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr> */}
      </tbody>
    </Table>
  );
}

export default BaseTable;
