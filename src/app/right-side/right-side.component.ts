import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.scss']
})
export class RightSideComponent implements OnInit {
  data: any;

  @Input()
  set appData(val: any) {
    this.data = val;
  }

  constructor() {}

  ngOnInit() {}

  get state() {
    return this.data.data.gameState;
  }
}
