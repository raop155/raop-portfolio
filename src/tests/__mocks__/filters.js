const filters = [
  { name: 'All' },
  { name: 'Featured' },
  { name: 'Private' },
  {
    name: 'Country',
    subfilters: [
      {
        name: 'Chile',
      },
      {
        name: 'Perú',
      },
      {
        name: 'Paraguay',
      },
    ],
  },
];

export default filters;
