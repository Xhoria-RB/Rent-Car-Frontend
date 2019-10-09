import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';

function validateUpdate(entity) {
  if (!isEmpty(entity)) {
    const response = map(entity, (key) => {
      if (key === '') {
        return false;
      }
      return true;
    });
    return !response.includes(false);
  }
  return false;
}

module.exports = { validateUpdate };
