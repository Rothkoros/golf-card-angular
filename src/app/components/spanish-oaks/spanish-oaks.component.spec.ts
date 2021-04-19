import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanishOaksComponent } from './spanish-oaks.component';

describe('SpanishOaksComponent', () => {
  let component: SpanishOaksComponent;
  let fixture: ComponentFixture<SpanishOaksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpanishOaksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpanishOaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
