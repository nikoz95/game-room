import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  data: any;

  @Input() set appData(val: any) {
    this.data = val;
  }

  constructor() { }

  ngOnInit() {
  }

  toggleClass() {
    const panel = document.getElementsByClassName('left-panel')[0];
    panel.classList.remove('override-panel');
    panel.classList.add('override-panel');
  }

}
