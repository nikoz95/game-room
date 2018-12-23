import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-computer',
  templateUrl: './single-computer.component.html',
  styleUrls: ['./single-computer.component.scss']
})
export class SingleComputerComponent implements OnInit {

  selectedValue = 'label';
  otherValues = [
    'label1', 'label2', 'label3'
  ];
  computerName = '';
  computerID = 0;
  computerState = 'free';
  computerType = 'standart';

  timeSettings = {
    controllers: 0,
    time: 0
  };

  @Input() data;
  @Input() currentTime;
  @Input() maxTime;
  @Input() fixedTime;

  @Input() set name(value: string) {
    this.computerName = value;
  }
  @Input() set id(value: number) {
    this.computerID = value;
  }
  @Input() set state(value: string) {
    this.computerState = value;
  }
  @Input() set type(value: string) {
    this.computerType = value;
  }

  @Output() start = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
  }

  setSettings(msg: string, ev: any) {
    switch (msg) {
      case 'controller': {
        this.timeSettings.controllers = ev.value;
        return;
      }
      case 'time': {
        this.timeSettings.time = ev.value;
        return;
      }
    }
  }
  startTime() {
    this.start.emit(this.timeSettings);
  }

  get controllers() {
    return this.data.data.controllers;
  }
  get time() {
    return this.data.data.time;
  }

}
