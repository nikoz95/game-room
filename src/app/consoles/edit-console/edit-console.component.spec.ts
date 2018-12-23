import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConsoleComponent } from './edit-Console.component';

describe('EditConsoleComponent', () => {
  let component: EditConsoleComponent;
  let fixture: ComponentFixture<EditConsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditConsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
