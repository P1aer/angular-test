import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BSwitchComponent } from './b-switch.component';

describe('BSwitchComponent', () => {
  let component: BSwitchComponent;
  let fixture: ComponentFixture<BSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BSwitchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
