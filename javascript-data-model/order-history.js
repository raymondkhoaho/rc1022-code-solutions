var orderHistory = [
  {
    orderNumber: '114-3941689-8772232',
    deliveryDate: 'Aug 8, 2020',
    returnDate: 'Sep 7,2020',
    totalPrice: 34.00,
    orderItem: [
      {
        itemPrice: 31.55,
        itemName: 'JavaScript for impatient programmers',
        itemAuthor: 'Rauschmayer, Dr. Axel'
      }
    ]
  },
  {
    orderNumber: '113-9984268-1280257',
    deliveryDate: 'Jul 20, 2020',
    returnDate: 'Aug 19, 2020',
    totalPrice: 44.53,
    orderItem: [
      {
        itemPrice: 41.33,
        itemName: 'The Timeless Way of Building',
        itemAuthor: 'Alexander, Christopher'
      }
    ]
  },
  {
    orderNumber: '114-2875557-9059409',
    deliveryDate: 'Jul 7, 2020',
    returnDate: 'Aug 5, 2020',
    totalPrice: 17.22,
    orderItem: [
      {
        itemPrice: 15.98,
        itemName: 'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adatper for WII U',
        itemAuthor: null
      }
    ]

  },
  {
    orderNumber: '113-2883177-2648248',
    deliveryDate: 'Jul 5, 2020',
    returnDate: 'Aug 4, 2020',
    totalPrice: 138.93,
    orderItem: [
      {
        itemPrice: 94.95,
        itemName: 'Gamecube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        itemAuthor: null
      },
      {
        itemPrice: 15.98,
        itemName: 'The Art of Sql',
        itemAuthor: 'Faroult, Stephanie'
      }
    ]
  }
];

console.log(orderHistory[3].orderItem[1].itemAuthor);
