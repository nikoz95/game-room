import { Component, OnInit, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})

export class TimerComponent implements OnInit {
  @Input()
  set time(time: number) {
    this.currentTime = time;
    this.updateVisual();
  }

  @Input()
  set timerActive(active: boolean) {
    var act = (active.toString() != 'false') ? true : false;

    if (act && this.currentTime > 0) {
      this.startTimer(this.currentTime);
    }
    else {
      this.stopTimer();
    }
  }

  @Input() height: number;
  @Input() maxTime: number;
  @Input() minTime: number;
  @Input() fixedTime: boolean;

  @ViewChild('cont') cont: ElementRef;
  @ViewChild('label') label: ElementRef;
  @ViewChild('bar') bar: ElementRef;

  private intervalId: any = -1;
  private currentTime: number = 0;

  constructor() { }

  ngOnInit() {
    if (this.maxTime == undefined) {
      console.error("Timer Max Time hasn't provided!");
    }

    this.startTimer(0);
    this.updateVisual();
  }

  private updateVisual() {
    if (this.height) {
      this.label.nativeElement.style.setProperty('font-size', this.height + 'px');
      this.label.nativeElement.style.setProperty('line-height', this.height + 'px');
      this.cont.nativeElement.style.setProperty('height', this.height + 'px');
    }
  }

  private updateView() {
    this.bar.nativeElement.style.setProperty('width', ((this.currentTime / this.maxTime) * 100) + '%');

    if (this.minTime != undefined) {
      if (this.currentTime <= (this.maxTime * this.minTime) / 100) {
        this.bar.nativeElement.setAttribute('class', 'timer-bar timer-minTime');
      }
      else {
        this.bar.nativeElement.setAttribute('class', 'timer-bar');
      }
    }
  }

  private displayTime() {
    const h = Math.floor(this.currentTime / 3600);
    const m = Math.floor((this.currentTime % 3600) / 60);
    const s = this.currentTime % 60;
    return [
      h,
      m > 9 ? m : (h ? '0' + m : m || '0'),
      s > 9 ? s : '0' + s,
    ].filter(a => a).join(':');
  }

  private updateTimer() {
    if (this.fixedTime === true) {
      this.currentTime--;
      if (this.currentTime < 0) {
        this.currentTime = 0;
        this.timerActive = false;
        clearTimeout(this.intervalId);
      }
      this.updateView();
    } else {
      this.currentTime++;
      this.updateView();
    }
  }

  public startTimer(time) {
    if (this.fixedTime == true) {
      if (time > 0) {
        this.currentTime = time;
        this.intervalId = setInterval(this.updateTimer.bind(this), 1000);
      }
    } else {

      if (time >= 0) {
        this.currentTime = time;
        this.intervalId = setInterval(this.updateTimer.bind(this), 1000);
      }
    }
  }

  public stopTimer() {
    clearTimeout(this.intervalId);
    this.updateView();
  }
}