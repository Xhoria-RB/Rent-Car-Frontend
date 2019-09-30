import React from 'react';
import useAxios from 'axios-hooks';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import { queries } from '../utils/constants';

const BaseTable = ({ entity }) => {
  // eslint-disable-next-line no-unused-vars
  const [{ response, loading, err }, refetch] = useAxios(`${queries[entity]}`);

  function parseCar(data) {
    return {
      // eslint-disable-next-line no-underscore-dangle
      id: data._id,
      description: data.description,
      chasis: data.chasisNO,
      motor: data.motorNO,
      plate: data.plateNO
    };
  }
  const transformedData = response && response.data ? response.data.map(parseCar) : null;

  return (
    <Table hover>
      <thead>
        <tr>
          {transformedData && Object.keys(transformedData[0]).filter((data) => data !== 'id').map((key) => (
            <th key={key.id}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {transformedData && transformedData.map((element) => (
          <tr>
            {Object.values(element).map((field, i) => {
              if (i) {
                return (
                  <Link href={`/${entity}/${element.id}`}>
                    <td>{field}</td>
                  </Link>
                );
              }
              return null;
            })}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

BaseTable.propTypes = {
  entity: PropTypes.string.isRequired
};

export default BaseTable;
