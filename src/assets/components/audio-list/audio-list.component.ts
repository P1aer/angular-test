import {Component, Input} from '@angular/core';
import {AudioTrack} from "../main-page/main-page.component";
import {AudioTrackComponent} from "../audio-track/audio-track.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-audio-list',
  standalone: true,
  imports: [AudioTrackComponent, NgForOf],
  templateUrl: './audio-list.component.html',
  styleUrl: './audio-list.component.css'
})
export class AudioListComponent {
  @Input() list: AudioTrack[] = []
}
