import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OTPage } from './ot.page';

describe('OTPage', () => {
  let component: OTPage;
  let fixture: ComponentFixture<OTPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
