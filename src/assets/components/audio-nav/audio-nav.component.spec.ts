import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioNavComponent } from './audio-nav.component';

describe('AudioNavComponent', () => {
  let component: AudioNavComponent;
  let fixture: ComponentFixture<AudioNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudioNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AudioNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
