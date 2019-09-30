import get from 'lodash/get';

module.exports = function rentTransformer(data) {
  return {
    // eslint-disable-next-line no-underscore-dangle
    id: data._id,
    description: get(data, 'carID.description', ''),
    client: get(data, 'clientID.fullName', ''),
    employee: get(data, 'employeeID.fullName', ''),
    rentDate: data.rentDate,
    returnDate: data.returnDate
  };
};
