import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarteequipmentPage } from './carteequipment.page';

describe('CarteequipmentPage', () => {
  let component: CarteequipmentPage;
  let fixture: ComponentFixture<CarteequipmentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CarteequipmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
