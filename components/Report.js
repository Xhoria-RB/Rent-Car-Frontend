import React, { useState, useEffect } from 'react';
import useAxios from 'axios-hooks';
import Link from 'next/link';
import {
  Table, Col, Row, Container, Button, Spinner, FormGroup, Input, Label
} from 'reactstrap';
import { queries } from '../utils/constants';
import transformer from '../utils/transformers';

const NewReport = () => {
  // eslint-disable-next-line no-unused-vars
  const [{ response, loading, err }, refetch] = useAxios(`${queries.report}`);
  const [params, setParams] = useState({});
  const [content, setContent] = useState({});
  const entityTransformer = transformer.report;


  useEffect(() => {
    const transformedData = response && response.data ? response.data.map(entityTransformer) : [];
    setContent(transformedData);
  }, [response, params]);

  const cleanDates = (dateString) => {
    const dateArray = dateString.split('-');
    const first = Date.parse(dateArray[0]);
    const second = Date.parse(dateArray[1]);
    if (first >= second) {
      return {
        start: second,
        end: first
      };
    }
    return {
      start: first,
      end: second
    };
  };

  const filterData = (element) => {
    if (params.employee) {
      return element.employee.includes(params.search);
    }
    if (params.client) {
      return element.client.includes(params.search);
    }
    if (params.brand) {
      return element.brand.includes(params.search);
    }
    if (params.model) {
      return element.model.includes(params.search);
    }

    if (params.date) {
      const dates = cleanDates(params.search);
      return ((Date.parse(element.rentDate) >= dates.start)
        && (Date.parse(element.rentDate) <= dates.end));
    }
    return true;
  };

  const verifyChecked = (e) => {
    setParams({ ...params, [e.target.name]: e.target.checked });
  };

  const filterHandle = () => {
    setContent(content.filter(filterData));
  };
  const printHandle = () => (window && window.print ? window.print() : null);

  return (
    <div className="mx-4 py-4">
      <Container>
        <h1>Hello</h1>
        <div id="no-print" className="my-4">
          <Row>
            <Col sm="5">
              <FormGroup check inline>
                <Label check>
                  <Input
                    type="checkbox"
                    name="employee"
                    onChange={(e) => verifyChecked(e)}
                  /> Employee
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input
                    type="checkbox"
                    name="client"
                    onChange={(e) => verifyChecked(e)}
                  /> Client
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input
                    type="checkbox"
                    name="model"
                    onChange={(e) => verifyChecked(e)}
                  /> Model
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input
                    type="checkbox"
                    name="brand"
                    onChange={(e) => verifyChecked(e)}
                  /> Brand
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input
                    type="checkbox"
                    name="date"
                    onChange={(e) => verifyChecked(e)}
                  /> Dates
                </Label>
              </FormGroup>
            </Col>
            <Col sm="5">
              <FormGroup check inline>
                <Input type="text" name="search" placeholder="Search" onChange={(e) => setParams({ ...params, [e.target.name]: e.target.value })} />
                <Button color="primary" onClick={filterHandle}>Search</Button>
              </FormGroup>
            </Col>
            <Col sm="2">
              <Button onClick={printHandle}>Print
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
      <Row>
        <Col sm="8" id="section-to-print">
          {response && response.data
            ? (
              <Table hover>
                <thead>
                  <tr>
                    <th>#</th>
                    {content && content[0] && Object.keys(content[0]).filter((data) => data !== 'id').map((key) => (
                      <th className="text-capitalize" key={key.id}>{key}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {content && content.map((element, num) => (
                    <tr>
                      <td>{num + 1}</td>
                      {Object.values(element).map((field, i) => {
                        if (i) {
                          return (
                            <Link href={`/rent/${element.id}`}>
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
            )
            : <center><Spinner style={{ width: '7rem', height: '7rem', margin: 'auto' }} color="dark" /></center>}

        </Col>
      </Row>
      <style jsx>
        {`
      @media print {
        #no-print {
          visibility: hidden !important;
          display: none !important;
          }
        #section-to-print, #section-to-print * {
          visibility: visible;
          }
          #section-to-print {
            position: absolute;
            left: 0;
            top: 0;
            }
          }
      `}
      </style>
    </div>

  );
};

// BaseTable.propTypes = {
//   entity: PropTypes.string.isRequired
// };

export default NewReport;
