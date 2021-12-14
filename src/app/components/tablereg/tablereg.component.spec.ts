import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableregComponent } from './tablereg.component';

describe('TableregComponent', () => {
  let component: TableregComponent;
  let fixture: ComponentFixture<TableregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
