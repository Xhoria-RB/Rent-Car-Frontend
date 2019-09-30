module.exports = function brandTransformer(data) {
  return {
    // eslint-disable-next-line no-underscore-dangle
    id: data._id,
    description: data.description
  };
};
