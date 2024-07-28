import {Component, Input} from '@angular/core';
import {AudioTrack} from "../main-page/main-page.component";
import {NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-audio-track',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './audio-track.component.html',
  styleUrl: './audio-track.component.css'
})
export class AudioTrackComponent {
  @Input() trackData!: AudioTrack;

  public get GetToMinutesSeconds() {
    return `${Math.floor(Number(this.trackData.duration) / 60)}:${Number(this.trackData.duration) % 60}`
  }

  public get GetAuthorsString() {
    return this.trackData.authors.join(', ')
  }
}
