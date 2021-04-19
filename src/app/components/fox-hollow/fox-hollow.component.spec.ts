import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoxHollowComponent } from './fox-hollow.component';

describe('FoxHollowComponent', () => {
  let component: FoxHollowComponent;
  let fixture: ComponentFixture<FoxHollowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoxHollowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoxHollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
