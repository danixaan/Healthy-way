import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ejercicios1Page } from './ejercicios1.page';

describe('Ejercicios1Page', () => {
  let component: Ejercicios1Page;
  let fixture: ComponentFixture<Ejercicios1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Ejercicios1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
