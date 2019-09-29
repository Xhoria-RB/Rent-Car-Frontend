import React, { Component } from 'react';
import Axios from 'axios';
import { url } from '../utils/config';
import BaseTable from './BaseTable';

export default class TableFetcher extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    Axios.get(`${url}/api/car`)
      .then((res) => {
        this.setState({ ...res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <BaseTable resData={this.state} url="/car" />
    );
  }
}
