import React from 'react';
import useAxios from 'axios-hooks';
import axios from 'axios';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {
  Table, Col, Row, Container, Button, Spinner
} from 'reactstrap';
import { queries } from '../utils/constants';
import transformer from '../utils/transformers';
import { url } from '../utils/config';

const BaseTable = ({ entity }) => {
  // eslint-disable-next-line no-unused-vars
  const [{ response, loading, err }, refetch] = useAxios(`${queries[entity]}`);
  const entityTransformer = transformer[entity];

  const transformedData = response && response.data ? response.data.map(entityTransformer) : [];
  function handleDelete(id) {
    axios.delete(`${url}/api/${entity}/${id}`)
      .then((res) => {
        alert('Deleted', res);
        refetch();
      })
      .catch((error) => console.log(error));
  }
  return (
    <Container>
      <Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
          {response && response.data
            ? (
              <Table hover>
                <thead>
                  <tr>
                    {transformedData && transformedData[0] && Object.keys(transformedData[0]).filter((data) => data !== 'id').map((key) => (
                      <th className="text-capitalize" key={key.id}>{key}</th>
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
                      <Button color="danger" className="my-1" size="lg" onClick={() => handleDelete(element.id)}>X</Button>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )
            : <center><Spinner style={{ width: '7rem', height: '7rem', margin: 'auto' }} color="dark" /></center>}

        </Col>
      </Row>
    </Container>

  );
};

BaseTable.propTypes = {
  entity: PropTypes.string.isRequired
};

export default BaseTable;
