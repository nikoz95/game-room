import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promolist',
  templateUrl: './promolist.component.html',
  styleUrls: ['./promolist.component.scss']
})
export class promolistComponent implements OnInit {

  tableContent = [
    {
      id: 5634,
      name: 'Don Koteeee',
      product: 'ხინკალი',
      quantity: 30,
      danger: false,
      status: 'მარაგშია'
    },
    {
      id: 5634,
      name: 'Don Zauri',
      product: 'ხინკალი',
      quantity: 30,
      danger: false,
      status: 'მთავრდება'
    },
    {
      id: 5634,
      name: 'Don Vito',
      product: 'ხინკალი',
      quantity: 3,
      danger: true,
      status: 'მარაგშია'
    },
    {
      id: 5634,
      name: 'Don Elguja',
      product: 'ხინკალი',
      quantity: 10,
      danger: true,
      status: 'მთავრდება'
    },
    {
      id: 5634,
      name: 'Don Mamazagli',
      product: 'ხინკალი',
      quantity: 30,
      danger: false,
      status: 'მარაგშია'
    },
    {
      id: 5634,
      name: 'Don Mamazagli',
      product: 'ხინკალი',
      quantity: 30,
      danger: false,
      status: 'მარაგშია'
    },
    {
      id: 5634,
      name: 'Don Mamazagli',
      product: 'ხინკალი',
      quantity: 30,
      danger: false,
      status: 'მარაგშია'
    },
    {
      id: 5634,
      name: 'Don Mamazagli',
      product: 'ხინკალი',
      quantity: 30,
      danger: false,
      status: 'მარაგშია'
    },
    {
      id: 5634,
      name: 'Don Mamazagli',
      product: 'ხინკალი',
      quantity: 30,
      danger: false,
      status: 'მარაგშია'
    },
    {
      id: 5634,
      name: 'Don Mamazagli',
      product: 'ხინკალი',
      quantity: 30,
      danger: false,
      status: 'მარაგშია'
    },
    {
      id: 5634,
      name: 'Don Mamazagli',
      product: 'ხინკალი',
      quantity: 30,
      danger: false,
      status: 'მარაგშია'
    }
  ];

  tableHeading = 'აქციების სია';


  constructor() { }

  ngOnInit() {
  }

}
