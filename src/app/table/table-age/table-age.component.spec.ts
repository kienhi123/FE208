import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAgeComponent } from './table-age.component';

describe('TableAgeComponent', () => {
  let component: TableAgeComponent;
  let fixture: ComponentFixture<TableAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
