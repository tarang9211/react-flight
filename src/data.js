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
    type: 'return',
    id: 5,
    flight_code: 'LH - 961',
    origin: 'Pune',
    destination: 'Delhi',
    fare: '$200',
    departureDate: moment().add(1, 'hours'),
    returnDate: moment().add('1', 'days')
  },
  {
    type: 'return',
    id: 6,
    flight_code: 'EA - 512',
    origin: 'Pune',
    destination: 'Delhi',
    fare: '$100',
    departureDate: moment().add(2, 'hours'),
    returnDate: moment().add('1', 'days')
  },
  {
    type: 'return',
    id: 7,
    flight_code: 'RT - 412',
    origin: 'Pune',
    destination: 'Delhi',
    fare: '$400',
    departureDate: moment().add(3, 'hours'),
    returnDate: moment().add('2', 'days')
  },
  {
    type: 'return',
    id: 8,
    flight_code: 'QA - 127',
    origin: 'Pune',
    destination: 'Rajasthan',
    fare: '$200',
    departureDate: moment().add(4, 'hours'),
    returnDate: moment().add('1', 'days')
  }
];
