import moment from 'moment';
import get from 'lodash/get';
import { dateFormat } from '../constants';

module.exports = function rentTransformer(data) {
  return {
    // eslint-disable-next-line no-underscore-dangle
    id: data._id,
    description: get(data, 'carID.description', ''),
    client: get(data, 'clientID.fullName', ''),
    employee: get(data, 'employeeID.fullName', ''),
    rentDate: moment(data.rentDate).format(dateFormat),
    returnDate: moment(data.returnDate).format(dateFormat)
  };
};
