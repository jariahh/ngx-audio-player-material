import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnDestroy, ViewChild, ViewEncapsulation} from '@angular/core';
import {AudioPlayerService} from './services/audio-player.service';
import {tap} from 'rxjs/operators';
import {BehaviorSubject, Subscription} from 'rxjs';
import {AudioPlayerModel} from './audio-player.model';
import {MatSliderChange} from '@angular/material/slider';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngx-audio-player-material',
  templateUrl: 'ngx-audio-player-material.component.html',
  styleUrls: ['./ngx-audio-player-material.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxAudioPlayerMaterialComponent  implements AfterViewInit, OnDestroy{

  @Input() src = '';
  @Input() poster = '';
  @Input() color: 'primary' | 'accent' | 'warn' | undefined;
  @ViewChild('audioElement') audioElement: ElementRef<HTMLAudioElement>;
  private audioService: AudioPlayerService;
  private subscription = new Subscription();
  status$ = new BehaviorSubject<AudioPlayerModel>(null);
  constructor() { }

  ngAfterViewInit(): void {
    this.audioService = new AudioPlayerService(this.audioElement.nativeElement);
    this.subscription.add(this.audioService.status$.pipe(tap(status => this.status$.next(status))).subscribe());
  }
  play(){
    this.audioService.play();
  }
  pause(){
    this.audioService.pause();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  seek(sliderChange: MatSliderChange) {
    this.audioService.seek(sliderChange.value);
  }

  muteToggle() {
    this.audioService.muteToggle();
  }

  changeVolume(sliderChange: MatSliderChange) {
    this.audioService.setVolume(sliderChange.value);
  }

}
