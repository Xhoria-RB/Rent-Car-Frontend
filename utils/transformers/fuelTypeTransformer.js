module.exports = function fuelTypeTransformer(data) {
  return {
    // eslint-disable-next-line no-underscore-dangle
    id: data._id,
    description: data.description
  };
};
