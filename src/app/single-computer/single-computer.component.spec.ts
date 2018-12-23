import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleComputerComponent } from './single-computer.component';

describe('SingleComputerComponent', () => {
  let component: SingleComputerComponent;
  let fixture: ComponentFixture<SingleComputerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleComputerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
