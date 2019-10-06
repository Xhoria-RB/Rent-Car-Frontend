import get from 'lodash/get';

module.exports = function carTransformer(data) {
  return {
    // eslint-disable-next-line no-underscore-dangle
    id: data._id,
    brand: get(data, 'brandID.description', ''),
    model: get(data, 'modelID.description', ''),
    description: data.description,
    chasis: data.chasisNO,
    motor: data.motorNO,
    plate: data.plateNO,
    status: data.carStatus || 'Available'
  };
};
