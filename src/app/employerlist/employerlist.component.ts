import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employerlist',
  templateUrl: './employerlist.component.html',
  styleUrls: ['./employerlist.component.scss']
})
export class EmployerlistComponent implements OnInit {

  tableContent = [
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
    },
    {
      id: 5634,
      name: 'Don Mamazagli',
      product: 'iStore',
      quantity: 123,
      status: 'complete'
    },
    {
      id: 5634,
      name: 'Don Mamazagli',
      product: 'iStore',
      quantity: 123,
      status: 'complete'
    },
    {
      id: 5634,
      name: 'Don Mamazagli',
      product: 'iStore',
      quantity: 123,
      status: 'complete'
    },
    {
      id: 5634,
      name: 'Don Mamazagli',
      product: 'iStore',
      quantity: 123,
      status: 'complete'
    },
    {
      id: 5634,
      name: 'Don Mamazagli',
      product: 'iStore',
      quantity: 123,
      status: 'complete'
    },
    {
      id: 5634,
      name: 'Don Mamazagli',
      product: 'iStore',
      quantity: 123,
      status: 'complete'
    }
  ];

  tableHeading = 'თანამშრომელთა სია';


  constructor() { }

  ngOnInit() {
  }

}
