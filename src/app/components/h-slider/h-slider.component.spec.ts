import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HSliderComponent } from './h-slider.component';

describe('HSliderComponent', () => {
  let component: HSliderComponent;
  let fixture: ComponentFixture<HSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
