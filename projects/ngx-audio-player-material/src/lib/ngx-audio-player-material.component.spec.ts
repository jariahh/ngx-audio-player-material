import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAudioPlayerMaterialComponent } from './ngx-audio-player-material.component';

describe('NgxAudioPlayerMaterialComponent', () => {
  let component: NgxAudioPlayerMaterialComponent;
  let fixture: ComponentFixture<NgxAudioPlayerMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxAudioPlayerMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAudioPlayerMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
