import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('menuToggle') menuTogle: ElementRef;
  constructor() { }

  ngOnInit() {
    const menuToggle = this.menuTogle.nativeElement;
    const windowWidth = window.screen.width;
    if (windowWidth < 992) {
      console.log(document.getElementsByTagName('img')[0].src = '../../assets/images/logo2.png');
      document.getElementsByTagName('img')[0].classList.add('img_edit');

    }
    menuToggle.addEventListener('click', () => {
      if (windowWidth < 1010) {
        document.getElementsByTagName('body')[0].classList.remove('open');
        if (windowWidth < 760) {
          document.getElementById('left-panel').classList.toggle('open-menu');
        } else {
          document.getElementById('left-panel').classList.toggle('open-menu');
        }
      } else {
        document.getElementsByTagName('body')[0].classList.toggle('open');
        document.getElementById('left-panel').classList.remove('open-menu');
      }
    });
  }
}
