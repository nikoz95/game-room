import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss']
})
export class SelectBoxComponent implements OnInit {

  constructor() { }

  showDropdown = false;
  selectedValue: any;
  otherValues: any;
  colors = {
    primary: '',
    secondary: ''
  };

  @Input() set selVal(val: any) {
    this.selectedValue = val;
  }
  @Input() set othVal(val: any) {
    this.otherValues = val;
  }

  @Input() set width(val: any) {
    this.dropDownMain.nativeElement.style.setProperty('width', val + "%");
  }
  @Input() set height(val: any) {
    this.dropDownMain.nativeElement.style.setProperty('height', val + "px");
    this.dropDownMain.nativeElement.style.setProperty('line-height', val + "px");
    this.dropDownMain.nativeElement.style.setProperty('border-radius', val / 20 + "px");
  }
  @Input() set primaryColor(val: string) {
    this.colors.primary = val;
  }
  @Input() set secondaryColor(val: string) {
    this.colors.secondary = val;
  }

  @Output() selectedItem = new EventEmitter<any>();


  @ViewChild('dropdownMain') dropDownMain: ElementRef;

  ngOnInit() { }

  toggleMenu() {
    this.showDropdown = !this.showDropdown;
  }
  get dropdown() {
    return this.showDropdown;
  }
  selectItem(index) {
    this.selectedValue = index;
    this.toggleMenu();
    this.selectedItem.emit(this.otherValues[index]);
  }

}
