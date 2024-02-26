import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsdiPage } from './detailsdi.page';

describe('DetailsdiPage', () => {
  let component: DetailsdiPage;
  let fixture: ComponentFixture<DetailsdiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailsdiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
