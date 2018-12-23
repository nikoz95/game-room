import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.scss']
})
export class LeftSideComponent implements OnInit {

  data: any;

  @Input() set appData(val: any) {
    this.data = val;
  }

  constructor() { }

  ngOnInit() {
  }

}
