import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { consoleTableComponent } from './table.component';

describe('consoleTableComponent', () => {
  let component: consoleTableComponent;
  let fixture: ComponentFixture<consoleTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ consoleTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(consoleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
