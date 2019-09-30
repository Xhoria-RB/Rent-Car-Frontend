import get from 'lodash/get';

module.exports = function inspectionTransformer(data) {
  return {
    // eslint-disable-next-line no-underscore-dangle
    id: data._id,
    description: get(data, 'carID.description', ''),
    client: get(data, 'clientID.fullName', ''),
    employee: get(data, 'employeeID.fullName', ''),
    inspectionDate: data.inspectionDate
  };
};
