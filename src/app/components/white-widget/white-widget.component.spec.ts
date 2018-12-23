import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteWidgetComponent } from './white-widget.component';

describe('WhiteWidgetComponent', () => {
  let component: WhiteWidgetComponent;
  let fixture: ComponentFixture<WhiteWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiteWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
