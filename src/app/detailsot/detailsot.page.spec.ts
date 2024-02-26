import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsotPage } from './detailsot.page';

describe('DetailsotPage', () => {
  let component: DetailsotPage;
  let fixture: ComponentFixture<DetailsotPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailsotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
