## ngx-audio-player-material
This is a simple html5 wrapper to play audio using standard angular material for a material like view to match your angular material theme.

---

### Install
Install ngx-audio-player-material from npm:

`npm install ngx-audio-player-material -save`

Add needed package to NgModule imports:
```
import { NgxAudioPlayerMaterialModule } from "ngx-audio-player-material";
 @NgModule({ 
...
  imports: [
    NgxAudioPlayerMaterialModule
  ]
...
})
```
Add component to your page:
```
<ngx-audio-player
    [poster]="song.imageUrl"
    [src]="song.url"></ngx-audio-player>
```
