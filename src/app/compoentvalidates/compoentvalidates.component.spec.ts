import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoentvalidatesComponent } from './compoentvalidates.component';

describe('CompoentvalidatesComponent', () => {
  let component: CompoentvalidatesComponent;
  let fixture: ComponentFixture<CompoentvalidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompoentvalidatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoentvalidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
