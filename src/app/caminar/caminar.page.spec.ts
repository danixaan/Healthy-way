import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaminarPage } from './caminar.page';

describe('CaminarPage', () => {
  let component: CaminarPage;
  let fixture: ComponentFixture<CaminarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CaminarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
