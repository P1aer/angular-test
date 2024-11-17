import { Component } from '@angular/core';
import {AudioListComponent} from "../audio-list/audio-list.component";
import {AudioFooterComponent} from "../audio-footer/audio-footer.component";

export interface AudioTrack {
  title: string;
  id: string;
  authors: string[];
  duration: string;
  track: string;
  picture?: string;
}

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [AudioListComponent, AudioFooterComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
   public audioList: AudioTrack[] = [{
     title: 'test',
     id: '1b',
     authors: ['me', '1pilot'],
     duration: '255',
     track: 'qdasd11dascdasdasds',
     picture: 'assets/images/saul.jpg'
   }];
}
