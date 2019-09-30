import brandTransformer from './brandTransformer';
import carTransformer from './carTransformer';
import carTypeTransformer from './carTypeTransformer';
import employeeTransformer from './employeeTransformer';
import fuelTypeTransformer from './fuelTypeTransformer';
import inspectionTransformer from './inspectionTransformer';
import modelTransformer from './modelTransformer';
import rentTransformer from './rentTransformer';

module.exports = {
  brand: brandTransformer,
  car: carTransformer,
  car_type: carTypeTransformer,
  employee: employeeTransformer,
  fuel_type: fuelTypeTransformer,
  inspection: inspectionTransformer,
  model: modelTransformer,
  rent: rentTransformer
};
