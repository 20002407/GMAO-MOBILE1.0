import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarteactifPage } from './carteactif.page';

describe('CarteactifPage', () => {
  let component: CarteactifPage;
  let fixture: ComponentFixture<CarteactifPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CarteactifPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
