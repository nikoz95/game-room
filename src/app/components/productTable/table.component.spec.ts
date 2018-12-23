import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { productTableComponent } from './table.component';

describe('productTableComponent', () => {
  let component: productTableComponent;
  let fixture: ComponentFixture<productTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ productTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(productTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
