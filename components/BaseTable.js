import React from 'react';
import useAxios from 'axios-hooks';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {
  Table, Col, Row, Container
} from 'reactstrap';
import { queries } from '../utils/constants';
import transformer from '../utils/transformers';

const BaseTable = ({ entity }) => {
  // eslint-disable-next-line no-unused-vars
  const [{ response, loading, err }, refetch] = useAxios(`${queries[entity]}`);
  const entityTransformer = transformer[entity];

  const transformedData = response && response.data ? response.data.map(entityTransformer) : null;

  return (
    <Container>
      <Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
          <Table hover>
            <thead>
              <tr>
                {transformedData && Object.keys(transformedData[0]).filter((data) => data !== 'id').map((key) => (
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
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>

  );
};

BaseTable.propTypes = {
  entity: PropTypes.string.isRequired
};

export default BaseTable;
