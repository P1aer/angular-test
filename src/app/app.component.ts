import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AudioFooterComponent} from "../assets/components/audio-footer/audio-footer.component";
import {AudioNavComponent} from "../assets/components/audio-nav/audio-nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AudioFooterComponent, AudioNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AUDIO-TEST';
}
