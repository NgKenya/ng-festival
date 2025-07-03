import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedhuleItemComponent } from './schedule-item.component';

describe('SchedhuleItemComponent', () => {
  let component: SchedhuleItemComponent;
  let fixture: ComponentFixture<SchedhuleItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchedhuleItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SchedhuleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
