import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @ViewChild('buttonComponent') btnCont;

  @Input() value;
  @Input() set width(val: any) {
    this.btnCont.nativeElement.style.setProperty('width', val + "%");
  }

  @Input() set height(val: any) {
    this.btnCont.nativeElement.style.setProperty('height', val + "px");
    this.btnCont.nativeElement.style.setProperty('border-radius', val / 10 + "px");
  }
  constructor() { }

  ngOnInit() {
  }

}
