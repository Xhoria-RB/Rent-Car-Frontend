import { url } from './config';

module.exports = {
  services: [[
    { title: 'Rents', image: 'https://static.thenounproject.com/png/506621-200.png', url: '/rent' },
    { title: 'Report', image: 'data:image/png;base64,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', url: '/return' },
    { title: 'Inspections', image: 'https://cdn1.iconfinder.com/data/icons/smashicons-transport-outline-vol-2/60/78_-Car_Inspection-_transport_vehicle-512.png', url: '/inspection' },
    { title: 'Cars', image: 'https://image.flaticon.com/icons/svg/55/55205.svg', url: '/car' }
  ], [
    { title: 'Brands', image: 'https://cdn3.iconfinder.com/data/icons/brands-applications/512/brands-512.png', url: '/brand' },
    { title: 'Models', image: 'https://cdn2.iconfinder.com/data/icons/car-models/154/sport-tuning-car-auto-model-512.png', url: '/model' },
    { title: 'Car Types', image: 'https://cdn1.iconfinder.com/data/icons/car-parts-and-accessories-volume-01/32/convertible-car-vehicle-type-body-style-automobile-512.png', url: '/car_type' },
    { title: 'Fuel Type', image: 'https://cdn0.iconfinder.com/data/icons/jumpicon-energy-glyph/32/-_Gas-Station-Petrol-Fuel-Oil-Pump-512.png', url: '/fuel_type' }
  ]],
  navItems: [
    [
      { title: 'Rents', url: '/rent' },
      { title: 'Inspections', url: '/inspection' }
    ],
    [
      { title: 'Brands', url: '/brand' },
      { title: 'Cars', url: '/car' },
      { title: 'Car Types', url: '/car_type' },
      { title: 'Fuel Types', url: '/fuel_type' },
      { title: 'Models', url: '/model' }
    ],
    [
      { title: 'Who we are', url: '/about' },
      { title: 'Contact us', url: '/contact' },
      { title: 'Employees', url: '/employee' },
      { title: 'Clients', url: '/client' }
    ]

  ],
  queries: {
    car: `${url}/api/car`,
    brand: `${url}/api/brand`,
    car_type: `${url}/api/car_type`,
    model: `${url}/api/model`,
    fuel_type: `${url}/api/fuel_type`,
    employee: `${url}/api/employee`,
    rent: `${url}/api/rent`,
    inspection: `${url}/api/inspection`,
    client: `${url}/api/client`,
    report: `${url}/api/report`
  },
  dateFormat: 'MM/DD/YYYY'
};
