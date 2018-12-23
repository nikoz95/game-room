import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPromoComponent } from './register-promo.component';

describe('RegisterPromoComponent', () => {
  let component: RegisterPromoComponent;
  let fixture: ComponentFixture<RegisterPromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
