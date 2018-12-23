import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { promolistComponent } from './promolist.component';

describe('promolistComponent', () => {
  let component: promolistComponent;
  let fixture: ComponentFixture<promolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ promolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(promolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
