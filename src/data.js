import moment from 'moment';

export const airports = [
  { name: 'Pune', code: 'PNQ' },
  { name: 'Mumbai', code: 'BOM' },
  { name: 'Chennai', code: 'MAA' },
  { name: 'Delhi', code: 'DEL' },
  { name: 'Rajasthan', code: 'RAJ' },
  { name: 'Goa', code: 'GOA' }
];

export const flights = [
  {
    type: 'one-way',
    id: 1,
    flight_code: 'PD - 202',
    origin: 'Pune',
    destination: 'Delhi',
    fare: '9,500',
    departureDate: moment().add(1, 'hours'),
    arrivalTime: moment().add(2, 'hours')
  },
  {
    type: 'one-way',
    id: 1,
    flight_code: 'PQ - 272',
    origin: 'Pune',
    destination: 'Delhi',
    fare: '7,000',
    departureDate: moment().add(1, 'hours'),
    arrivalTime: moment().add(2, 'hours')
  },
  {
    type: 'one-way',
    id: 1,
    flight_code: 'PA - 152',
    origin: 'Pune',
    destination: 'Delhi',
    fare: '8000',
    departureDate: moment().add(1, 'hours'),
    arrivalTime: moment().add(2, 'hours')
  },
  {
    type: 'one-way',
    id: 2,
    flight_code: 'AZ - 201',
    origin: 'Pune',
    destination: 'Delhi',
    fare: '8,500',
    departureDate: moment().add(2, 'hours'),
    arrivalTime: moment().add(4, 'hours')
  },
  {
    type: 'one-way',
    id: 3,
    flight_code: 'EF - 203',
    origin: 'Pune',
    destination: 'Delhi',
    fare: '10,500',
    departureDate: moment().add(3, 'hours'),
    arrivalTime: moment().add(5, 'hours')
  },
  {
    type: 'one-way',
    id: 4,
    flight_code: 'RE - 204',
    origin: 'Pune',
    destination: 'Rajasthan',
    fare: '5,500',
    departureDate: moment().add(4, 'hours'),
    arrivalTime: moment().add(6, 'hours')
  },
  {
    type: 'one-way',
    id: 12,
    flight_code: 'ER - 901',
    origin: 'Pune',
    destination: 'Rajasthan',
    fare: '5,000',
    departureDate: moment().add(4, 'hours'),
    arrivalTime: moment().add(6, 'hours')
  },
  {
    type: 'one-way',
    id: 20,
    flight_code: 'QW - 284',
    origin: 'Pune',
    destination: 'Rajasthan',
    fare: '6,500',
    departureDate: moment().add(4, 'hours'),
    arrivalTime: moment().add(6, 'hours')
  },
  {
    type: 'one-way',
    id: 4,
    flight_code: 'RT - 504',
    origin: 'Pune',
    destination: 'Rajasthan',
    fare: '7,000',
    departureDate: moment().add(4, 'hours'),
    arrivalTime: moment().add(6, 'hours')
  },
  {
    type: 'return',
    id: 5,
    route_one_code: 'LH - 961',
    route_two_code: 'LH - 870',
    origin: 'Pune',
    destination: 'Delhi',
    route_one_fare: '8,500',
    route_two_fare: '10,500',
    route_one_departure: moment().add(1, 'hours'),
    route_one_arrival: moment().add(3, 'hours'),
    route_two_departure: moment().add(7, 'hours'),
    route_two_arrival: moment().add(8, 'hours'),
    departureDate: moment().add(1, 'hours'),
    returnDate: moment().add('10', 'hours')
  },
  {
    type: 'return',
    id: 6,
    route_one_code: 'EA - 512',
    route_two_code: 'EA - 640',
    origin: 'Pune',
    destination: 'Delhi',
    route_one_fare: '9,500',
    route_two_fare: '6,500',
    route_one_departure: moment().add(2, 'hours'),
    route_one_arrival: moment().add(4, 'hours'),
    route_two_departure: moment().add(8, 'hours'),
    route_two_arrival: moment().add(9, 'hours'),
    departureDate: moment().add(2, 'hours'),
    returnDate: moment().add('1', 'days')
  },
  {
    type: 'return',
    id: 7,
    route_one_code: 'RT - 412',
    route_two_code: 'RT - 530',
    origin: 'Pune',
    destination: 'Delhi',
    route_one_fare: '10,500',
    route_two_fare: '12,500',
    route_one_departure: moment().add(3, 'hours'),
    route_one_arrival: moment().add(5, 'hours'),
    route_two_departure: moment().add(9, 'hours'),
    route_two_arrival: moment().add(10, 'hours'),
    departureDate: moment().add(3, 'hours'),
    returnDate: moment().add('2', 'days')
  },
  {
    type: 'return',
    id: 8,
    route_one_code: 'QA - 127',
    route_two_code: 'QA - 960',
    origin: 'Pune',
    destination: 'Rajasthan',
    route_one_fare: '10,500',
    route_two_fare: '8,500',
    route_one_departure: moment().add(4, 'hours'),
    route_one_arrival: moment().add(5, 'hours'),
    route_two_departure: moment().add(8, 'hours'),
    route_two_arrival: moment().add(9, 'hours'),
    departureDate: moment().add(4, 'hours'),
    returnDate: moment().add('1', 'days')
  }
];
