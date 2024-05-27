import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBulletComponent } from './about-bullet.component';

describe('AboutBulletComponent', () => {
  let component: AboutBulletComponent;
  let fixture: ComponentFixture<AboutBulletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutBulletComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutBulletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
