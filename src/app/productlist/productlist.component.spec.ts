import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { productlistComponent } from './productlist.component';

describe('productlistComponent', () => {
  let component: productlistComponent;
  let fixture: ComponentFixture<productlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ productlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(productlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
