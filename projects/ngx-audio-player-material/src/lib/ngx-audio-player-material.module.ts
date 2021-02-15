import { NgModule } from '@angular/core';
import { NgxAudioPlayerMaterialComponent } from './ngx-audio-player-material.component';
import {TicksTimeFormatPipe} from './pipes';
import {TimeFormatPipe} from './pipes';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {CommonModule} from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  declarations: [
    NgxAudioPlayerMaterialComponent,
    TicksTimeFormatPipe,
    TimeFormatPipe
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatSliderModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatMenuModule
  ],
  exports: [
    NgxAudioPlayerMaterialComponent,
    TicksTimeFormatPipe,
    TimeFormatPipe
  ]
})
export class NgxAudioPlayerMaterialModule { }
