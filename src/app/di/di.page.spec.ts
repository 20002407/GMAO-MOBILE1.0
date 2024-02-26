import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DIPage } from './di.page';

describe('DIPage', () => {
  let component: DIPage;
  let fixture: ComponentFixture<DIPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
