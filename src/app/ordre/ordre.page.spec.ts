import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdrePage } from './ordre.page';

describe('OrdrePage', () => {
  let component: OrdrePage;
  let fixture: ComponentFixture<OrdrePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OrdrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
