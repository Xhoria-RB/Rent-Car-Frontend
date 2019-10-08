import moment from 'moment';
import get from 'lodash/get';
import { dateFormat } from '../constants';

module.exports = function rentTransformer(data) {
  return {
    // eslint-disable-next-line no-underscore-dangle
    id: data._id,
    car: get(data, 'carID.description', ''),
    plateNO: get(data, 'carID.plateNO', ''),
    brand: get(data, 'carID.brandID.description', ''),
    model: get(data, 'carID.modelID.description', ''),
    client: get(data, 'clientID.fullName', ''),
    client_cedula: get(data, 'clientID.idCard', ''),
    employee: get(data, 'employeeID.fullName', ''),
    employee_cedula: get(data, 'employeeID.idCard', ''),
    inspectioned: get(data, 'inspectionID.inspectionDate', ''),
    rentDate: moment(data.rentDate).format(dateFormat),
    returnDate: moment(data.returnDate).format(dateFormat),
    pricePerDay: data.pricePerDay,
    daysQt: data.daysQt
  };
};
