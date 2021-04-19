import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanksgivingPointComponent } from './thanksgiving-point.component';

describe('ThanksgivingPointComponent', () => {
  let component: ThanksgivingPointComponent;
  let fixture: ComponentFixture<ThanksgivingPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThanksgivingPointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanksgivingPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
