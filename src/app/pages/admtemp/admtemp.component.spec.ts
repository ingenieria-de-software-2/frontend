import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmtempComponent } from './admtemp.component';

describe('AdmtempComponent', () => {
  let component: AdmtempComponent;
  let fixture: ComponentFixture<AdmtempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmtempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmtempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
