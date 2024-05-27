import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAlertComponent } from './event-alert.component';

describe('EventAlertComponent', () => {
  let component: EventAlertComponent;
  let fixture: ComponentFixture<EventAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventAlertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
