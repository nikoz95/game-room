import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerlistComponent } from './employerlist.component';

describe('EmployerlistComponent', () => {
  let component: EmployerlistComponent;
  let fixture: ComponentFixture<EmployerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
