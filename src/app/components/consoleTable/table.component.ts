import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-consoleTable',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class consoleTableComponent implements OnInit {

  data: any;
  title: string;


  @Input() set tableHeading(val: any) {
    this.title = val;
  }
  @Input() set tableData(vals: any) {
    this.data = vals;
  }

  constructor() { }

  ngOnInit() {
  }

}
