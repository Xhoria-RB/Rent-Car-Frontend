import moment from 'moment';
import get from 'lodash/get';
import { dateFormat } from '../constants';

module.exports = function inspectionTransformer(data) {
  return {
    // eslint-disable-next-line no-underscore-dangle
    id: data._id,
    description: get(data, 'carID.description', ''),
    client: get(data, 'clientID.fullName', ''),
    employee: get(data, 'employeeID.fullName', ''),
    inspectionDate: moment(data.inspectionDate).format(dateFormat)
  };
};
