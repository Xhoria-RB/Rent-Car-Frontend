import { url } from './config';

module.exports = {
  services: [[
    { title: 'Rents', image: 'https://static.thenounproject.com/png/506621-200.png', url: '/rent' },
    { title: 'Return', image: 'https://cdn2.iconfinder.com/data/icons/automotive-1/68/car_vehicle_automobile_repeat_resend_return_2-512.png', url: '/return' },
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
      { title: 'Returns', url: '/return' },
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
