export default class AppData {
  data: any = {
    gameState: 'home',
    iconColors: ['red', 'blue', 'green', 'yellow'],
    iconList: ['pe-7s-cash', 'pe-7s-cart', 'pe-7s-browser', 'pe-7s-users'],
    currency: '₾',
    titleList: ['Revenue', 'Sales', 'Templates', 'Clients'],
    valueList: [23569, 34355, 3468, 2968],
    tableContent: [
      {
        id: 5634,
        name: 'Don Kote',
        product: 'iStore',
        quantity: 123,
        status: 'complete'
      },
      {
        id: 5634,
        name: 'Don Zauri',
        product: 'iStore',
        quantity: 123,
        status: 'pending'
      },
      {
        id: 5634,
        name: 'Don Vito',
        product: 'iStore',
        quantity: 123,
        status: 'complete'
      },
      {
        id: 5634,
        name: 'Don Elguja',
        product: 'iStore',
        quantity: 123,
        status: 'pending'
      },
      {
        id: 5634,
        name: 'Don Mamazagli',
        product: 'iStore',
        quantity: 123,
        status: 'complete'
      }
    ],
    tableHeading: 'თანამშრომელთა სია',
    computers:
      [
        {
          id: 1,
          name: 'Standart Console',
          type: 'standart',
          state: 'free',
          users: 0,
          maxUsers: 4,
          maxTime: 0,
          currentTime: 0,
          fixedTime: true,
          defaultPrice: 4,
          currentPrice: 8
        },
        {
          id: 2,
          name: 'Standart Console',
          type: 'standart',
          state: 'free',
          users: 0,
          maxUsers: 4,
          maxTime: 0,
          currentTime: 0,
          fixedTime: true,
          defaultPrice: 4,
          currentPrice: 8
        },
        {
          id: 3,
          name: 'Standart Console',
          type: 'standart',
          state: 'free',
          users: 0,
          maxUsers: 4,
          maxTime: 0,
          currentTime: 0,
          fixedTime: true,
          defaultPrice: 4,
          currentPrice: 8
        },
        {
          id: 4,
          name: 'Standart Console',
          type: 'standart',
          state: 'free',
          users: 0,
          maxUsers: 4,
          maxTime: 0,
          currentTime: 0,
          fixedTime: true,
          defaultPrice: 4,
          currentPrice: 8
        },
        {
          id: 5,
          name: 'Standart Console',
          type: 'standart',
          state: 'free',
          users: 0,
          maxUsers: 4,
          maxTime: 0,
          currentTime: 0,
          fixedTime: true,
          defaultPrice: 4,
          currentPrice: 8
        },
        {
          id: 6,
          name: 'Standart Console',
          type: 'standart',
          state: 'free',
          users: 0,
          maxUsers: 4,
          maxTime: 0,
          currentTime: 0,
          fixedTime: true,
          defaultPrice: 4,
          currentPrice: 8
        },
        {
          id: 7,
          name: 'VIP Console',
          type: 'vip',
          state: 'free',
          users: 0,
          maxUsers: 4,
          maxTime: 0,
          currentTime: 0,
          fixedTime: true,
          defaultPrice: 8,
          currentPrice: 8
        },
        {
          id: 8,
          name: 'VIP Console',
          type: 'vip',
          state: 'free',
          users: 0,
          maxUsers: 4,
          maxTime: 0,
          currentTime: 0,
          fixedTime: true,
          defaultPrice: 8,
          currentPrice: 8
        },
        {
          id: 9,
          name: 'Standart Console',
          type: 'standart',
          state: 'free',
          users: 0,
          maxUsers: 4,
          maxTime: 0,
          currentTime: 0,
          fixedTime: true,
          defaultPrice: 4,
          currentPrice: 8
        }
      ],
    controllers: [
      { value: 1, name: '1 ჯოისტიკი' },
      { value: 2, name: '2 ჯოისტიკი' },
      { value: 3, name: '3 ჯოისტიკი' },
      { value: 4, name: '4 ჯოისტიკი' }
    ],
    time: [
      { value: 0, name: 'მიმდინარე' },
      { value: 5, name: 'ნახ. საათი' },
      { value: 1, name: '1 საათი' },
      { value: 2, name: '2 საათი' },
      { value: 3, name: '3 საათი' }

    ]
  };

  changeState(val: string): void {
    console.log(val);
    this.data.gameState = val;
  }
}
