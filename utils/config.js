process.env.PORT = process.env.PORT || 8000;
const ENV_URL = `http://localhost:${process.env.PORT}`;

module.exports = {
  url: ENV_URL
};
