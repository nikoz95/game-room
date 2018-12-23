import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-white-widget',
  templateUrl: './white-widget.component.html',
  styleUrls: ['./white-widget.component.scss']
})
export class WhiteWidgetComponent implements OnInit {

  iconClass = '';
  iconColor = '';
  currency = '';
  title = '';
  value = 0;


  @Input() set widgetIcon(val: string) {
    this.iconClass = val;
  }
  @Input() set widgetColor(val: string) {
    this.iconColor = val;
  }
  @Input() set widgetCurrency(val: string) {
    this.currency = val;
  }
  @Input() set widgetTitle(val: string) {
    this.title = val;
  }
  @Input() set widgetValue(val: number) {
    this.value = val;
  }

  constructor() { }

  ngOnInit() { }

}
