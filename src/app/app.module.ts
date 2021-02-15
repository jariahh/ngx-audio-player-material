import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxAudioPlayerMaterialModule} from 'ngx-audio-player-material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxAudioPlayerMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
