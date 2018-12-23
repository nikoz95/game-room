import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterConsoleComponent } from './register-Console.component';

describe('RegisterConsoleComponent', () => {
  let component: RegisterConsoleComponent;
  let fixture: ComponentFixture<RegisterConsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterConsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
