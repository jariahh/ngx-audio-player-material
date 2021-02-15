import { TestBed } from '@angular/core/testing';

import { NgxAudioPlayerMaterialService } from './ngx-audio-player-material.service';

describe('NgxAudioPlayerMaterialService', () => {
  let service: NgxAudioPlayerMaterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxAudioPlayerMaterialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
