import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControltempComponent } from './controltemp.component';

describe('ControltempComponent', () => {
  let component: ControltempComponent;
  let fixture: ComponentFixture<ControltempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControltempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControltempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
