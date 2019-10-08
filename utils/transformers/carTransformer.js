import get from 'lodash/get';

module.exports = function carTransformer(data) {
  return {
    // eslint-disable-next-line no-underscore-dangle
    id: data._id,
    description: data.description,
    brand: get(data, 'brandID.description', ''),
    model: get(data, 'modelID.description', ''),
    chasis: data.chasisNO,
    motor: data.motorNO,
    plate: data.plateNO,
    status: data.carStatus || 'Available'
  };
};
