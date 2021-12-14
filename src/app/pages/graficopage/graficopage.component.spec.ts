import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficopageComponent } from './graficopage.component';

describe('GraficopageComponent', () => {
  let component: GraficopageComponent;
  let fixture: ComponentFixture<GraficopageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficopageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
