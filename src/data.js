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
    origin: 'Pune',
    destination: 'Delhi',
    fare: '$200',
    departureDate: moment().add(1, 'hours'),
    returnDate: moment().add('1', 'days')
  },
  {
    type: 'one-way',
    id: 2,
    origin: 'Pune',
    destination: 'Delhi',
    fare: '$100',
    departureDate: moment().add(2, 'hours'),
    returnDate: moment().add('1', 'days')
  },
  {
    type: 'one-way',
    id: 3,
    origin: 'Pune',
    destination: 'Delhi',
    fare: '$400',
    departureDate: moment().add(3, 'hours'),
    returnDate: moment().add('2', 'days')
  },
  {
    type: 'one-way',
    id: 4,
    origin: 'Pune',
    destination: 'Rajasthan',
    fare: '$200',
    departureDate: moment().add(4, 'hours'),
    returnDate: moment().add('1', 'days')
  },
  {
    type: 'return',
    origin: 'Pune',
    destination: 'Delhi',
    fare: '$200',
    departureDate: moment().add(1, 'hours'),
    returnDate: moment().add('1', 'days')
  },
  {
    type: 'return',
    origin: 'Pune',
    destination: 'Delhi',
    fare: '$100',
    departureDate: moment().add(2, 'hours'),
    returnDate: moment().add('1', 'days')
  },
  {
    type: 'return',
    origin: 'Pune',
    destination: 'Delhi',
    fare: '$400',
    departureDate: moment().add(3, 'hours'),
    returnDate: moment().add('2', 'days')
  },
  {
    type: 'return',
    origin: 'Pune',
    destination: 'Rajasthan',
    fare: '$200',
    departureDate: moment().add(4, 'hours'),
    returnDate: moment().add('1', 'days')
  }
];
