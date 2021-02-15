import {BehaviorSubject} from 'rxjs';
import {AudioPlayerModel} from '../audio-player.model';

export class AudioPlayerService {
  status$ = new BehaviorSubject<AudioPlayerModel>(null);
  audioEvents = [
    'ended',
    'error',
    'play',
    'playing',
    'pause',
    'timeupdate',
    'canplay',
    'loadedmetadata',
    'loadstart'
  ];
  constructor(private audioPlayer: HTMLAudioElement) {
    this.addEvents(audioPlayer, this.audioEvents, this.eventCallBack);
  }
  private eventCallBack = (ev) => {
    this.status$.next({
      currentTime: this.audioPlayer.currentTime,
      duration: this.audioPlayer.duration,
      muted: this.audioPlayer.muted,
      paused: this.audioPlayer.paused,
      ready: this.audioPlayer.readyState == 1,
      volume: this.audioPlayer.volume
    });
  }

  private addEvents(obj, events, handler) {
    events.forEach(event => {
      obj.addEventListener(event, handler);
    });
  }
  play(){
    this.audioPlayer.play().then();
  }
  pause(){
    this.audioPlayer.pause();
  }

  seek(value: number) {
    this.audioPlayer.currentTime = value;
  }

  muteToggle() {
    this.audioPlayer.muted = !this.audioPlayer.muted;
    this.eventCallBack(null);
  }

  setVolume(value: number) {
    console.log(value);
    this.audioPlayer.volume = value / 100;
  }
}
