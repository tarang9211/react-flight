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
    origin: 'Pune',
    destination: 'Delhi',
    fare: '$200',
    departureDate: moment(),
    returnDate: moment().add('1', 'days')
  },
  {
    type: 'one-way',
    origin: 'Pune',
    destination: 'Delhi',
    fare: '$100',
    departureDate: moment(),
    returnDate: moment().add('1', 'days')
  },
  {
    type: 'one-way',
    origin: 'Pune',
    destination: 'Delhi',
    fare: '$400',
    departureDate: moment(),
    returnDate: moment().add('2', 'days')
  },
  {
    type: 'one-way',
    origin: 'Pune',
    destination: 'Rajasthan',
    fare: '$200',
    departureDate: moment(),
    returnDate: moment().add('1', 'days')
  },
  {
    type: 'return',
    origin: 'Pune',
    destination: 'Delhi',
    fare: '$200',
    departureDate: moment(),
    returnDate: moment().add('1', 'days')
  },
  {
    type: 'return',
    origin: 'Pune',
    destination: 'Delhi',
    fare: '$100',
    departureDate: moment(),
    returnDate: moment().add('1', 'days')
  },
  {
    type: 'return',
    origin: 'Pune',
    destination: 'Delhi',
    fare: '$400',
    departureDate: moment(),
    returnDate: moment().add('2', 'days')
  },
  {
    type: 'return',
    origin: 'Pune',
    destination: 'Rajasthan',
    fare: '$200',
    departureDate: moment(),
    returnDate: moment().add('1', 'days')
  },
];
