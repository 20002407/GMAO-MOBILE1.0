import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartebatimentPage } from './cartebatiment.page';

describe('CartebatimentPage', () => {
  let component: CartebatimentPage;
  let fixture: ComponentFixture<CartebatimentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CartebatimentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
