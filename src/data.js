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
    fare: '$200',
    departureDate: moment().add(1, 'hours'),
    returnDate: moment().add('1', 'days')
  },
  {
    type: 'one-way',
    id: 2,
    flight_code: 'PD - 201',
    origin: 'Pune',
    destination: 'Delhi',
    fare: '$100',
    departureDate: moment().add(2, 'hours'),
    returnDate: moment().add('1', 'days')
  },
  {
    type: 'one-way',
    id: 3,
    flight_code: 'PD - 203',
    origin: 'Pune',
    destination: 'Delhi',
    fare: '$400',
    departureDate: moment().add(3, 'hours'),
    returnDate: moment().add('2', 'days')
  },
  {
    type: 'one-way',
    id: 4,
    flight_code: 'PD - 204',
    origin: 'Pune',
    destination: 'Rajasthan',
    fare: '$200',
    departureDate: moment().add(4, 'hours'),
    returnDate: moment().add('1', 'days')
  },
  {
    type: 'return',
    id: 5,
    origin: 'Pune',
    destination: 'Delhi',
    fare: '$200',
    departureDate: moment().add(1, 'hours'),
    returnDate: moment().add('1', 'days')
  },
  {
    type: 'return',
    id: 6,
    origin: 'Pune',
    destination: 'Delhi',
    fare: '$100',
    departureDate: moment().add(2, 'hours'),
    returnDate: moment().add('1', 'days')
  },
  {
    type: 'return',
    id: 7,
    origin: 'Pune',
    destination: 'Delhi',
    fare: '$400',
    departureDate: moment().add(3, 'hours'),
    returnDate: moment().add('2', 'days')
  },
  {
    type: 'return',
    id: 8,
    origin: 'Pune',
    destination: 'Rajasthan',
    fare: '$200',
    departureDate: moment().add(4, 'hours'),
    returnDate: moment().add('1', 'days')
  }
];
