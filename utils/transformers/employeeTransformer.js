module.exports = function employeeTransformer(data) {
  return {
    // eslint-disable-next-line no-underscore-dangle
    id: data._id,
    name: data.fullName,
    cedula: data.idCard,
    email: data.email,
    role: data.role,
    commission: data.commission,
    shift: data.shift
  };
};
