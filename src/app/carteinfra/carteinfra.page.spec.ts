import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarteinfraPage } from './carteinfra.page';

describe('CarteinfraPage', () => {
  let component: CarteinfraPage;
  let fixture: ComponentFixture<CarteinfraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CarteinfraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
