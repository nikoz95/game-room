import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { consolelistComponent } from './consolelist.component';

describe('consolelistComponent', () => {
  let component: consolelistComponent;
  let fixture: ComponentFixture<consolelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ consolelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(consolelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
