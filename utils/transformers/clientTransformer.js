module.exports = function clientTransformer(data) {
  return {
    // eslint-disable-next-line no-underscore-dangle
    id: data._id,
    name: data.fullName,
    cedula: data.idCard
  };
};
